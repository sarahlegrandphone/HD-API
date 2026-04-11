export default function handler(req, res) {
  const svg = `
  <svg width="500" height="900" viewBox="0 0 500 900" xmlns="http://www.w3.org/2000/svg">

    <style>
      .center {
        fill: rgba(255,255,255,0.0);
        stroke: #63bca1;
        stroke-width: 4;
      }
    </style>

    <!-- HEAD (driehoek naar beneden) -->
    <polygon class="center" points="250,40 310,140 190,140" />

    <!-- AJNA (driehoek naar boven) -->
    <polygon class="center" points="250,160 320,260 180,260" />

    <!-- THROAT (vierkant) -->
    <rect class="center" x="200" y="290" width="100" height="100" rx="14" ry="14" />

    <!-- G CENTER (diamant) -->
    <polygon class="center" points="250,420 310,480 250,540 190,480" />

    <!-- EGO (parallellogram) -->
    <polygon class="center" points="260,560 330,580 290,640 220,620" />

    <!-- SACRAL (vierkant) -->
    <rect class="center" x="200" y="660" width="100" height="100" rx="14" ry="14" />

    <!-- SPLEEN (driehoek links) -->
    <polygon class="center" points="150,520 190,580 150,640" />

    <!-- SOLAR PLEXUS (driehoek rechts) -->
    <polygon class="center" points="350,520 310,580 350,640" />

    <!-- ROOT (vierkant) -->
    <rect class="center" x="180" y="780" width="140" height="100" rx="14" ry="14" />

  </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
