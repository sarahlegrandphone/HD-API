// /api/generate-image.js
export default function handler(req, res) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="700" viewBox="0 0 400 700">
    <style>
      .c { fill: none; stroke: black; stroke-width: 2; }
    </style>

    <!-- HEAD (correct) -->
    <polygon class="c" points="200,40 150,120 250,120" />

    <!-- AJNA (perfecte spiegel van HEAD) -->
    <polygon class="c" points="200,230 150,150 250,150" />

    <!-- THROAT (100x100, perfecte afstand, perfecte uitlijning) -->
    <rect class="c" x="150" y="260" width="100" height="100" rx="6" />

    <!-- G-CENTER (nog NIET aangepast) -->
    <polygon class="c" points="200,380 140,440 200,500 260,440" />

    <!-- EGO (nog NIET aangepast) -->
    <rect class="c" x="250" y="330" width="70" height="60" rx="6" />

    <!-- SPLEEN (nog NIET aangepast) -->
    <polygon class="c" points="130,350 175,385 130,420 85,385" />

    <!-- SACRAL (100x100) -->
    <rect class="c" x="150" y="540" width="100" height="100" rx="6" />

    <!-- SOLAR PLEXUS (nog NIET aangepast) -->
    <polygon class="c" points="270,460 315,495 270,530 225,495" />

    <!-- ROOT (nog NIET aangepast) -->
    <rect class="c" x="150" y="600" width="100" height="100" rx="6" />
  </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
