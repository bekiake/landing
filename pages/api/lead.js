// Next.js API route for proxying Google Apps Script requests
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
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
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Proxy error', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
