export default async function handler(req, res) {
  // Vamos aceitar apenas GET para facilitar o uso do fetch no front
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ message: 'Missing lat or lng query parameters' });
  }

  try {
    const apiKey = process.env.OPENCAGE_API_KEY; // pegue a API key da variável de ambiente, NÃO defina aqui no código
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lng}&key=${apiKey}`
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
