// /api/generate-image.js
export default function handler(req, res) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="700" viewBox="0 0 400 700">
    <style>
      .c { fill: none; stroke: black; stroke-width: 2; }
    </style>

    <!-- HEAD (rounded) -->
    <path class="c"
      d="M190 10
         Q172 50 140 90
         Q190 110 240 90
         Q208 50 190 10 Z" />

    <!-- AJNA (rounded) -->
    <path class="c"
      d="M190 195
         Q172 155 140 115
         Q190 95 240 115
         Q208 155 190 195 Z" />

    <!-- THROAT (rect stays with rx) -->
    <rect class="c" x="145" y="220" width="90" height="90" rx="6" />

    <!-- G-CENTER (rounded diamond) -->
    <path class="c"
      d="M190 340
         Q150 370 130 400
         Q150 430 190 460
         Q230 430 250 400
         Q230 370 190 340 Z" />

    <!-- EGO (rounded triangle) -->
    <path class="c"
      d="M280 420
         Q310 435 320 470
         Q285 465 250 460
         Q265 435 280 420 Z" />

    <!-- SPLEEN (rounded triangle) -->
    <path class="c"
      d="M30 505
         Q70 525 110 545
         Q70 565 30 585
         Q20 545 30 505 Z" />

    <!-- SACRAL -->
    <rect class="c" x="145" y="500" width="90" height="90" rx="6" />

    <!-- SOLAR PLEXUS (rounded triangle) -->
    <path class="c"
      d="M260 545
         Q300 525 340 505
         Q300 565 340 585
         Q300 565 260 545 Z" />

    <!-- ROOT -->
    <rect class="c" x="145" y="610" width="90" height="90" rx="6" />
  </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
