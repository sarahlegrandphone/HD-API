// /api/generate-image.js

export default function handler(req, res) {
  const width = 400;
  const height = 700;
  const turquoise = "#63bca1";

  // SVG bodygraph omtrek (alleen centers)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 400 700">
      <style>
        .center-outline {
          fill: transparent;
          stroke: ${turquoise};
          stroke-width: 2;
          stroke-linejoin: round;
        }
      </style>

      <!-- Head -->
      <polygon class="center-outline" points="200,40 150,120 250,120" />

      <!-- Ajna -->
      <polygon class="center-outline" points="200,140 150,200 250,200" />

      <!-- Throat -->
      <rect class="center-outline" x="155" y="215" width="90" height="90" rx="6" />

      <!-- G-Center -->
      <polygon class="center-outline" points="200,340 155,385 200,430 245,385" />

      <!-- Heart/Ego -->
      <rect class="center-outline" x="250" y="330" width="70" height="60" rx="6" />

      <!-- Sacral -->
      <rect class="center-outline" x="155" y="455" width="90" height="90" rx="6" />

      <!-- Solar Plexus -->
      <polygon class="center-outline" points="270,460 315,495 270,530 225,495" />

      <!-- Spleen -->
      <polygon class="center-outline" points="130,460 175,495 130,530 85,495" />

      <!-- Root -->
      <rect class="center-outline" x="155" y="580" width="90" height="90" rx="6" />
    </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
