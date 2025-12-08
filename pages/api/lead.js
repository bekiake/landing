// Next.js API route for proxying Google Apps Script requests and sending to Telegram
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendToTelegram(formData) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram credentials not configured');
    return;
  }

  // Format the message
  const message = `
🆕 *Yangi Lead!*

👤 *Ism:* ${formData.name || 'N/A'}
📱 *Telefon:* ${formData.phone || 'N/A'}

📅 *Sana:* ${new Date().toLocaleString('uz-UZ')}
  `.trim();

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      }),
    });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Send to Google Sheets
      const response = await fetch('https://script.google.com/macros/s/AKfycbyYXU9rfaOA9p4ZO6uvW9WM6_re4UbM-ZeZNoAklZ7Fd_UrjCSB_l5KsmlGcU4hQxFvMw/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });
      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = { result: text };
      }

      // Send to Telegram (don't wait for it to complete)
      sendToTelegram(req.body).catch(err => console.error('Telegram error:', err));

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Proxy error', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
