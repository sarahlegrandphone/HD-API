// /api/generate-image.js
export default function handler(req, res) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="700" viewBox="0 0 400 700">
    <style>
      .c { fill: none; stroke: black; stroke-width: 2; }
    </style>

    <!-- HEAD (rounded triangle) -->
    <path class="c" d="
      M190 10
      Q185 20 140 90
      Q190 85 240 90
      Q195 20 190 10
      Z" />

    <!-- AJNA (rounded triangle) -->
    <path class="c" d="
      M190 195
      Q185 185 140 115
      Q190 120 240 115
      Q195 185 190 195
      Z" />

    <!-- THROAT -->
    <rect class="c" x="145" y="220" width="90" height="90" rx="6" />

    <!-- G-CENTER (diamond stays sharp) -->
    <polygon class="c" points="190,340 130,400 190,460 250,400" />

    <!-- EGO (rounded triangle) -->
    <path class="c" d="
      M280 420
      Q300 445 320 470
      Q285 465 250 460
      Q270 440 280 420
      Z" />

    <!-- SPLEEN (rounded triangle) -->
    <path class="c" d="
      M30 505
      Q40 525 110 545
      Q40 565 30 585
      Q25 545 30 505
      Z" />

    <!-- SACRAL -->
    <rect class="c" x="145" y="500" width="90" height="90" rx="6" />

    <!-- SOLAR PLEXUS (rounded triangle) -->
    <path class="c" d="
      M260 545
      Q300 525 340 505
      Q345 545 340 585
      Q300 565 260 545
      Z" />

    <!-- ROOT -->
    <rect class="c" x="145" y="610" width="90" height="90" rx="6" />
  </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
