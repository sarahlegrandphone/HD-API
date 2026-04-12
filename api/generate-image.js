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
    <polygon class="c" points="200,240 150,160 250,160" />

    <!-- THROAT (100x100, perfecte afstand, perfecte uitlijning) -->
    <rect class="c" x="150" y="280" width="100" height="100" rx="6" />

    <!-- G-CENTER (nog NIET aangepast) -->
    <polygon class="c" points="200,360 140,420 200,480 260,420" />

    <!-- EGO (nog NIET aangepast) -->
    <rect class="c" x="250" y="330" width="70" height="60" rx="6" />

    <!-- SPLEEN (nog NIET aangepast) -->
    <polygon class="c" points="130,350 175,385 130,420 85,385" />

    <!-- SACRAL (nog NIET aangepast) -->
    <rect class="c" x="155" y="455" width="90" height="90" rx="6" />

    <!-- SOLAR PLEXUS (nog NIET aangepast) -->
    <polygon class="c" points="270,460 315,495 270,530 225,495" />

    <!-- ROOT (nog NIET aangepast) -->
    <rect class="c" x="155" y="580" width="90" height="90" rx="6" />
  </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
