export default async function handler(req, res) {
  const universeId = '7332812970'; // Universe ID Motorcycle Racing
  const url = `https://games.roblox.com/v1/games?universeIds=${universeId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const visits = data.data[0].visits;

    res.status(200).json({ visits });
  } catch (err) {
    res.status(500).json({ error: 'Errore nel recupero delle visite.' });
  }
}
