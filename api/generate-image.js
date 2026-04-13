export default function handler(req, res) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="700" viewBox="0 0 400 700">
    <style>
      .c { fill: none; stroke: black; stroke-width: 2; }
    </style>

   <!-- HEAD -->
<polygon class="c" points="190,10 140,90 240,90" />

<!-- Gates on long side -->
<text x="165" y="85" font-size="14" text-anchor="middle">64</text>
<text x="190" y="85" font-size="14" text-anchor="middle">61</text>
<text x="215" y="85" font-size="14" text-anchor="middle">63</text>

<!-- CHANNEL 64-47 (official HD style) -->
<line x1="163" y1="85" x2="163" y2="90" stroke="black" stroke-width="3" />
<line x1="167" y1="85" x2="167" y2="90" stroke="black" stroke-width="3" />

<line x1="163" y1="115" x2="163" y2="128" stroke="black" stroke-width="3" />
<line x1="167" y1="115" x2="167" y2="128" stroke="black" stroke-width="3" />

<!-- CHANNEL 61-24 -->
<line x1="188" y1="85" x2="188" y2="90" stroke="black" stroke-width="3" />
<line x1="192" y1="85" x2="192" y2="90" stroke="black" stroke-width="3" />

<line x1="188" y1="115" x2="188" y2="128" stroke="black" stroke-width="3" />
<line x1="192" y1="115" x2="192" y2="128" stroke="black" stroke-width="3" />

<!-- CHANNEL 63-4 -->
<line x1="213" y1="85" x2="213" y2="90" stroke="black" stroke-width="3" />
<line x1="217" y1="85" x2="217" y2="90" stroke="black" stroke-width="3" />

<line x1="213" y1="115" x2="213" y2="128" stroke="black" stroke-width="3" />
<line x1="217" y1="115" x2="217" y2="128" stroke="black" stroke-width="3" />

<!-- AJNA -->
<polygon class="c" points="190,195 140,115 240,115" />

<!-- Gates on long side -->
<text x="165" y="128" font-size="14" text-anchor="middle">47</text>
<text x="190" y="128" font-size="14" text-anchor="middle">24</text>
<text x="215" y="128" font-size="14" text-anchor="middle">4</text>

<!-- Gates on slanted sides -->
<text x="174" y="154" font-size="14" text-anchor="middle">17</text>
<text x="206" y="154" font-size="14" text-anchor="middle">11</text>

<!-- Gate in the point -->
<text x="190" y="180" font-size="14" text-anchor="middle">43</text>

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

<svg width="300" height="300" viewBox="0 0 400 600">

<!-- SOLAR PLEXUS (driehoek, punt naar links, gecentreerd op y=545) -->
<polygon
  points="260,620 340,580 340,660"
  fill="none"
  stroke="black"
  stroke-width="10"
  stroke-linejoin="round"
/>

</svg>
    <!-- ROOT -->
    <rect class="c" x="145" y="610" width="90" height="90" rx="6" />
  </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
