export default async function handler(req, res) {
  // Imposta header CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  const universeId = '7332812970'; // Universe ID Motorcycle Racing
  const url = `https://games.roblox.com/v1/games?universeIds=${universeId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const visits = data.data?.[0]?.visits || 0; // fallback a 0 se undefined

    res.status(200).json({ visits });
  } catch (err) {
    res.status(500).json({ error: 'Errore nel recupero delle visite.' });
  }
}
