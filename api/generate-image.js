export default function handler(req, res) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="700" viewBox="0 0 400 700">
    <style>
      .c { fill: none; stroke: black; stroke-width: 2; }
    </style>

<!-- HEAD (reeds perfect gecentreerd) -->
<path
  d="
    M194 10
    A8 8 0 0 1 206 10

    L248 88
    A6 6 0 0 1 242 96

    L158 96
    A6 6 0 0 1 152 88

    L194 10
    Z
  "
  fill="none"
  stroke="black"
  stroke-width="1"
  stroke-linejoin="round"
/>

<!-- Gates HEAD -->
<text x="165" y="90" font-size="14" text-anchor="middle">64</text>
<text x="200" y="90" font-size="14" text-anchor="middle">61</text>
<text x="235" y="90" font-size="14" text-anchor="middle">63</text>

<!-- Channels HEAD -->
<line x1="188" y1="115" x2="188" y2="128" stroke="black" stroke-width="3" />
<line x1="192" y1="115" x2="192" y2="128" stroke="black" stroke-width="3" />

<line x1="213" y1="115" x2="213" y2="128" stroke="black" stroke-width="3" />
<line x1="217" y1="115" x2="217" y2="128" stroke="black" stroke-width="3" />

<!-- AJNA (reeds perfect gecentreerd) -->
<path
  d="
    M194 206
    A8 8 0 0 0 206 206

    L248 128
    A6 6 0 0 0 242 120

    L158 120
    A6 6 0 0 0 152 128

    L194 206
    Z
  "
  fill="none"
  stroke="black"
  stroke-width="1"
  stroke-linejoin="round"
/>

<!-- Gates AJNA -->
<text x="165" y="132" font-size="14" text-anchor="middle">47</text>
<text x="200" y="132" font-size="14" text-anchor="middle">24</text>
<text x="235" y="132" font-size="14" text-anchor="middle">4</text>

<text x="174" y="160" font-size="14" text-anchor="middle">17</text>
<text x="215" y="160" font-size="14" text-anchor="middle">11</text>

<text x="200" y="200" font-size="14" text-anchor="middle">43</text>

<!-- THROAT (gecentreerd: x=145 → 155) -->
<rect class="c" x="155" y="220" width="90" height="90" rx="6" />

<!-- G-CENTER (gecentreerd rond x=200) -->
<polygon class="c" points="200,340 140,400 200,460 260,400" />

<!-- EGO (gecentreerd rond x=200) -->
<polygon class="c" points="260,420 300,470 200,460" />

<!-- SPLEEN (20px naar rechts) -->
<path
  d="
    M130 546
    A8 8 0 0 0 130 534

    L52 492
    A6 6 0 0 0 44 498

    L44 582
    A6 6 0 0 0 52 588

    L130 546
    Z
  "
  fill="none"
  stroke="black"
  stroke-width="1"
  stroke-linejoin="round"
/>

<!-- SACRAL (gecentreerd: x=145 → 155) -->
<rect class="c" x="155" y="500" width="90" height="90" rx="6" />

<!-- SOLAR PLEXUS (gecentreerd: x=264 → 255) -->
<path
  d="
    M255 534
    A8 8 0 0 0 255 546

    L333 588
    A6 6 0 0 0 341 582

    L341 498
    A6 6 0 0 0 333 492

    L255 534
    Z
  "
  fill="none"
  stroke="black"
  stroke-width="1"
  stroke-linejoin="round"
/>

<!-- ROOT (gecentreerd: x=145 → 155) -->
<rect class="c" x="155" y="610" width="90" height="90" rx="6" />

  </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
