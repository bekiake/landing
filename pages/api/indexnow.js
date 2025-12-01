export default async function handler(req, res) {
  try {
    const { url } = req.body;

    // IndexNow payload
    const payload = {
      host: "airtickett.uz",
      key: "f7e6be3d3073465f9eb0b69ea18a8a10",
      keyLocation: "https://airtickett.uz/f7e6be3d3073465f9eb0b69ea18a8a10.txt",
      urls: [url],
    };

    await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: "IndexNow error", details: e.message });
  }
}
