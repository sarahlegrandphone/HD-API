// /api/generate-image.js
export default function handler(req, res) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="700" viewBox="0 0 400 700">
    <style>
      .c { fill: none; stroke: black; stroke-width: 2; }
    </style>

    <!-- HEAD with 6px rounded corners -->
<path class="c" d="
  M190 16
  L146 84
  A6 6 0 0 0 140 90
  L234 90
  A6 6 0 0 0 240 84
  L190 16
  Z" />

    <!-- AJNA (perfecte spiegel van HEAD) -->
    <polygon class="c" points="190,195 140,115 240,115" />

    <!-- THROAT (90x90, perfecte afstand, perfecte uitlijning) -->
    <rect class="c" x="145" y="220" width="90" height="90" rx="6" />

    <!-- G-CENTER -->
    <polygon class="c" points="190,340 130,400 190,460 250,400" />

    <!-- EGO -->
    <polygon class="c" points="280,420 320,470 250,460" />

    <!-- SPLEEN (driehoek, punt naar rechts, gecentreerd op y=545) -->
    <polygon class="c" points="30,505 110,545 30,585" />

    <!-- SACRAL (100x100) -->
    <rect class="c" x="145" y="500" width="90" height="90" rx="6" />

    <!-- SOLAR PLEXUS (driehoek, punt naar links, gecentreerd op y=545) -->
    <polygon class="c" points="260,545 340,505 340,585" />

    <!-- ROOT -->
    <rect class="c" x="145" y="610" width="90" height="90" rx="6" />
  </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
