export default function handler(req, res) {
  const svg = `
  <svg width="500" height="900" viewBox="0 0 500 900" xmlns="http://www.w3.org/2000/svg">

    <style>
      .center {
        fill: rgba(255,255,255,0.0);
        stroke: #63bca1;
        stroke-width: 4;
      }
      .channel {
        stroke: #63bca1;
        stroke-width: 6;
        stroke-linecap: round;
        fill: none;
        opacity: 0.45;
      }
      .gate {
        fill: #f6f2ec;
        stroke: #63bca1;
        stroke-width: 2;
      }
      .gate-label {
        font-family: "Helvetica Neue", Arial, sans-serif;
        font-size: 10px;
        fill: #555;
        text-anchor: middle;
        dominant-baseline: middle;
      }
      .title {
        font-family: "Helvetica Neue", Arial, sans-serif;
        font-size: 18px;
        fill: #444;
        text-anchor: middle;
      }
    </style>

    <text x="250" y="30" class="title">Jouw Human Design Bodygraph</text>

    <!-- ========================= -->
    <!--         CENTERS           -->
    <!-- ========================= -->

    <polygon class="center" points="250,60 310,150 190,150" />
    <polygon class="center" points="250,170 320,260 180,260" />
    <rect class="center" x="200" y="290" width="100" height="100" rx="14" ry="14" />
    <polygon class="center" points="250,420 310,480 250,540 190,480" />
    <polygon class="center" points="260,560 330,580 290,640 220,620" />
    <rect class="center" x="200" y="660" width="100" height="100" rx="14" ry="14" />
    <polygon class="center" points="150,520 190,580 150,640" />
    <polygon class="center" points="350,520 310,580 350,640" />
    <rect class="center" x="180" y="780" width="140" height="100" rx="14" ry="14" />

    <!-- ========================= -->
    <!--         KANALEN           -->
    <!-- ========================= -->

    <line class="channel" x1="235" y1="150" x2="235" y2="170" />
    <line class="channel" x1="250" y1="150" x2="250" y2="170" />
    <line class="channel" x1="265" y1="150" x2="265" y2="170" />

    <line class="channel" x1="230" y1="260" x2="230" y2="290" />
    <line class="channel" x1="250" y1="260" x2="250" y2="290" />
    <line class="channel" x1="270" y1="260" x2="270" y2="290" />

    <line class="channel" x1="230" y1="390" x2="230" y2="420" />
    <line class="channel" x1="250" y1="390" x2="250" y2="420" />
    <line class="channel" x1="270" y1="390" x2="270" y2="420" />

    <line class="channel" x1="240" y1="540" x2="240" y2="660" />
    <line class="channel" x1="250" y1="540" x2="250" y2="660" />
    <line class="channel" x1="260" y1="540" x2="260" y2="660" />

    <line class="channel" x1="210" y1="500" x2="180" y2="560" />
    <line class="channel" x1="290" y1="500" x2="320" y2="560" />

    <line class="channel" x1="270" y1="580" x2="270" y2="390" />
    <line class="channel" x1="260" y1="560" x2="260" y2="500" />
    <line class="channel" x1="300" y1="600" x2="330" y2="580" />

    <line class="channel" x1="160" y1="640" x2="200" y2="780" />
    <line class="channel" x1="170" y1="640" x2="220" y2="780" />
    <line class="channel" x1="180" y1="640" x2="240" y2="780" />

    <line class="channel" x1="340" y1="640" x2="300" y2="780" />
    <line class="channel" x1="330" y1="640" x2="280" y2="780" />
    <line class="channel" x1="320" y1="640" x2="260" y2="780" />

    <line class="channel" x1="230" y1="760" x2="230" y2="780" />
    <line class="channel" x1="250" y1="760" x2="250" y2="780" />
    <line class="channel" x1="270" y1="760" x2="270" y2="780" />

    <line class="channel" x1="210" y1="700" x2="180" y2="620" />
    <line class="channel" x1="290" y1="700" x2="320" y2="620" />
    <line class="channel" x1="250" y1="660" x2="250" y2="390" />

    <!-- ========================= -->
    <!--          POORTEN         -->
    <!-- ========================= -->

    <circle class="gate" cx="235" cy="145" r="9" /><text class="gate-label" x="235" y="145">61</text>
    <circle class="gate" cx="250" cy="145" r="9" /><text class="gate-label" x="250" y="145">63</text>
    <circle class="gate" cx="265" cy="145" r="9" /><text class="gate-label" x="265" y="145">64</text>

    <circle class="gate" cx="230" cy="265" r="8" /><text class="gate-label" x="230" y="265">24</text>
    <circle class="gate" cx="250" cy="265" r="8" /><text class="gate-label" x="250" y="265">4</text>
    <circle class="gate" cx="270" cy="265" r="8" /><text class="gate-label" x="270" y="265">47</text>

    <circle class="gate" cx="210" cy="290" r="7" /><text class="gate-label" x="210" y="290">56</text>
    <circle class="gate" cx="230" cy="290" r="7" /><text class="gate-label" x="230" y="290">62</text>
    <circle class="gate" cx="250" cy="290" r="7" /><text class="gate-label" x="250" y="290">23</text>
    <circle class="gate" cx="270" cy="290" r="7" /><text class="gate-label" x="270" y="290">31</text>
    <circle class="gate" cx="290" cy="290" r="7" /><text class="gate-label" x="290" y="290">8</text>

    <circle class="gate" cx="250" cy="415" r="8" /><text class="gate-label" x="250" y="415">1</text>
    <circle class="gate" cx="250" cy="545" r="8" /><text class="gate-label" x="250" y="545">2</text>

    <circle class="gate" cx="275" cy="575" r="7" /><text class="gate-label" x="275" y="575">21</text>
    <circle class="gate" cx="305" cy="590" r="7" /><text class="gate-label" x="305" y="590">26</text>
    <circle class="gate" cx="245" cy="625" r="7" /><text class="gate-label" x="245" y="625">40</text>
    <circle class="gate" cx="290" cy="610" r="7" /><text class="gate-label" x="290" y="610">51</text>

    <circle class="gate" cx="215" cy="660" r="8" /><text class="gate-label" x="215" y="660">3</text>
    <circle class="gate" cx="235" cy="660" r="8" /><text class="gate-label" x="235" y="660">5</text>
    <circle class="gate" cx="255" cy="660" r="8" /><text class="gate-label" x="255" y="660">9</text>
    <circle class="gate" cx="275" cy="660" r="8" /><text class="gate-label" x="275" y="660">14</text>

    <circle class="gate" cx="165" cy="580" r="7" /><text class="gate-label" x="165" y="580">57</text>
    <circle class="gate" cx="160" cy="630" r="7" /><text class="gate-label" x="160" y="630">28</text>

    <circle class="gate" cx="335" cy="580" r="7" /><text class="gate-label" x="335" y="580">22</text>
    <circle class="gate" cx="340" cy="630" r="7" /><text class="gate-label" x="340" y="630">36</text>

    <circle class="gate" cx="200" cy="780" r="8" /><text class="gate-label" x="200" y="780">52</text>
    <circle class="gate" cx="230" cy="780" r="8" /><text class="gate-label" x="230" y="780">53</text>
    <circle class="gate" cx="260" cy="780" r="8" /><text class="gate-label" x="260" y="780">60</text>
    <circle class="gate" cx="290" cy="780" r="8" /><text class="gate-label" x="290" y="780">54</text>

  </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
