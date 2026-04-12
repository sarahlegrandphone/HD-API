// /api/generate-image.js
export default function handler(req, res) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="700" viewBox="0 0 400 700">
    <style>
      .c { fill: none; stroke: black; stroke-width: 2; }
    </style>

    <!-- HEAD -->
    <polygon class="c" points="200,40 150,120 250,120" />

    <!-- AJNA -->
    <polygon class="c" points="200,140 150,200 250,200" />

    <!-- THROAT -->
    <rect class="c" x="155" y="215" width="90" height="90" rx="6" />

    <!-- G-CENTER -->
    <polygon class="c" points="200,340 155,385 200,430 245,385" />

    <!-- EGO (rechts van G) -->
    <rect class="c" x="250" y="330" width="70" height="60" rx="6" />

    <!-- SPLEEN (links van G) -->
    <polygon class="c" points="130,350 175,385 130,420 85,385" />

    <!-- SACRAL -->
    <rect class="c" x="155" y="455" width="90" height="90" rx="6" />

    <!-- SOLAR PLEXUS (rechts van Sacral) -->
    <polygon class="c" points="270,460 315,495 270,530 225,495" />

    <!-- ROOT -->
    <rect class="c" x="155" y="580" width="90" height="90" rx="6" />
  </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
