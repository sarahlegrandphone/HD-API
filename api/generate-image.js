// /api/generate-image.js
export default function handler(req, res) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="700" viewBox="0 0 400 700">
    <style>
      .c { fill: none; stroke: black; stroke-width: 2; }
    </style>

    <!-- HEAD (correct) -->
    <polygon class="c" points="190,10 140,90 240,90" />

    <!-- AJNA (perfecte spiegel van HEAD) -->
    <polygon class="c" points="190,195 140,115 240,115" />

    <!-- THROAT (90x90, perfecte afstand, perfecte uitlijning) -->
    <rect class="c" x="145" y="220" width="90" height="90" rx="6" />

    <!-- G-CENTER (nog NIET aangepast) -->
    <polygon class="c" points="190,340 130,400 190,460 250,400" />

    <!-- EGO (nog NIET aangepast) -->
    <rect class="c" x="250" y="330" width="70" height="60" rx="6" />

    <!-- SPLEEN (nog NIET aangepast) -->
    <polygon class="c" points="130,350 175,385 130,420 85,385" />

    <!-- SACRAL (100x100) -->
    <rect class="c" x="145" y="500" width="90" height="90" rx="6" />

    <!-- SOLAR PLEXUS (nog NIET aangepast) -->
    <polygon class="c" points="270,460 315,495 270,530 225,495" />

    <!-- ROOT (nog NIET aangepast) -->
    <rect class="c" x="145" y="610" width="90" height="90" rx="6" />
  </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
