// /api/generate-image.js
export default function handler(req, res) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="700" viewBox="0 0 400 700">
    <style>
      .c { fill: none; stroke: black; stroke-width: 2; }
    </style>

    <!-- HEAD (rounded corners) -->
    <path class="c" d="
      M190 10
      L152 86
      A6 6 0 0 0 140 90
      L228 90
      A6 6 0 0 0 240 86
      L190 10
      Z" />

    <!-- AJNA (rounded corners) -->
    <path class="c" d="
      M190 195
      L152 119
      A6 6 0 0 0 140 115
      L228 115
      A6 6 0 0 0 240 119
      L190 195
      Z" />

    <!-- THROAT -->
    <rect class="c" x="145" y="220" width="90" height="90" rx="6" />

    <!-- G-CENTER (diamond with rounded corners) -->
    <path class="c" d="
      M190 340
      L136 394
      A6 6 0 0 0 130 400
      L184 454
      A6 6 0 0 0 190 460
      L244 406
      A6 6 0 0 0 250 400
      L196 346
      A6 6 0 0 0 190 340
      Z" />

    <!-- EGO (rounded corners) -->
    <path class="c" d="
      M280 420
      L314 464
      A6 6 0 0 0 320 470
      L256 464
      A6 6 0 0 0 250 460
      L280 420
      Z" />

    <!-- SPLEEN (rounded corners) -->
    <path class="c" d="
      M30 505
      L104 541
      A6 6 0 0 0 110 545
      L104 549
      A6 6 0 0 0 30 585
      L30 505
      Z" />

    <!-- SACRAL -->
    <rect class="c" x="145" y="500" width="90" height="90" rx="6" />

    <!-- SOLAR PLEXUS (rounded corners) -->
    <path class="c" d="
      M260 545
      L334 509
      A6 6 0 0 1 340 505
      L340 585
      A6 6 0 0 1 334 589
      L260 545
      Z" />

    <!-- ROOT -->
    <rect class="c" x="145" y="610" width="90" height="90" rx="6" />
  </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
