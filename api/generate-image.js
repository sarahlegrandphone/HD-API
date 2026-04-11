export default function handler(req, res) {
  const svg = `
  <svg width="500" height="900" viewBox="0 0 500 900" xmlns="http://www.w3.org/2000/svg">

    <!-- ZACHTE STIJL -->
    <style>
      .center {
        fill: rgba(255,255,255,0.0);
        stroke: #63bca1;
        stroke-width: 4;
        rx: 18;
        ry: 18;
      }
    </style>

    <!-- HEAD CENTER -->
    <polygon class="center" points="250,40 310,120 250,200 190,120" />

    <!-- AJNA CENTER -->
    <polygon class="center" points="250,220 320,300 250,380 180,300" />

    <!-- THROAT CENTER -->
    <rect class="center" x="200" y="400" width="100" height="120" />

    <!-- G CENTER -->
    <polygon class="center" points="250,540 320,620 250,700 180,620" />

    <!-- SACRAL CENTER -->
    <rect class="center" x="200" y="720" width="100" height="120" />

    <!-- SPLEEN CENTER (links) -->
    <polygon class="center" points="120,520 180,580 180,660 120,720" />

    <!-- SOLAR PLEXUS CENTER (rechts) -->
    <polygon class="center" points="380,520 320,580 320,660 380,720" />

    <!-- EGO CENTER -->
    <rect class="center" x="200" y="580" width="100" height="80" />

    <!-- ROOT CENTER -->
    <rect class="center" x="180" y="860" width="140" height="80" />

  </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
