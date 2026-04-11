export default function handler(req, res) {
  // Placeholder afbeelding (PNG)
  const svg = `
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#f5f5f5"/>
      <text x="50%" y="50%" font-size="20" text-anchor="middle" fill="#333">
        Bodygraph afbeelding werkt!
      </text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
