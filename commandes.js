export default function handler(req, res) {
  res.status(200).json([
    {
      date: '2025-05-20',
      name: 'Exemple Nom',
      email: 'exemple@email.com',
      address: '123 rue Exemple',
      imageType: 'Logo Ykita',
      size: 'M',
      quantity: 2
    }
  ]);
}