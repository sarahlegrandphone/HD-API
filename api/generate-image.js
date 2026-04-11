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

    <!-- Titel -->
    <text x="250" y="30" class="title">Jouw Human Design Bodygraph</text>

    <!-- CENTERS -->

    <!-- HEAD (driehoek naar beneden) -->
    <polygon id="head" class="center" points="250,60 310,150 190,150" />

    <!-- AJNA (driehoek naar boven) -->
    <polygon id="ajna" class="center" points="250,170 320,260 180,260" />

    <!-- THROAT (vierkant) -->
    <rect id="throat" class="center" x="200" y="290" width="100" height="100" rx="14" ry="14" />

    <!-- G CENTER (diamant) -->
    <polygon id="g" class="center" points="250,420 310,480 250,540 190,480" />

    <!-- EGO (parallellogram) -->
    <polygon id="ego" class="center" points="260,560 330,580 290,640 220,620" />

    <!-- SACRAL (vierkant) -->
    <rect id="sacral" class="center" x="200" y="660" width="100" height="100" rx="14" ry="14" />

    <!-- SPLEEN (driehoek links) -->
    <polygon id="spleen" class="center" points="150,520 190,580 150,640" />

    <!-- SOLAR PLEXUS (driehoek rechts) -->
    <polygon id="solarPlexus" class="center" points="350,520 310,580 350,640" />

    <!-- ROOT (vierkant) -->
    <rect id="root" class="center" x="180" y="780" width="140" height="100" rx="14" ry="14" />

    <!-- KANALEN (vereenvoudigde maar correcte verbindingen tussen centers) -->

    <!-- Head – Ajna (61–24, 63–4, 64–47) -->
    <line class="channel" x1="240" y1="150" x2="240" y2="170" />
    <line class="channel" x1="250" y1="150" x2="250" y2="170" />
    <line class="channel" x1="260" y1="150" x2="260" y2="170" />

    <!-- Ajna – Throat (11–56, 17–62, 43–23) -->
    <line class="channel" x1="230" y1="260" x2="230" y2="290" />
    <line class="channel" x1="250" y1="260" x2="250" y2="290" />
    <line class="channel" x1="270" y1="260" x2="270" y2="290" />

    <!-- Throat – G (7–31, 1–8, 33–13) -->
    <line class="channel" x1="230" y1="390" x2="230" y2="420" />
    <line class="channel" x1="250" y1="390" x2="250" y2="420" />
    <line class="channel" x1="270" y1="390" x2="270" y2="420" />

    <!-- G – Sacral (2–14, 5–15, 29–46) -->
    <line class="channel" x1="240" y1="540" x2="240" y2="660" />
    <line class="channel" x1="250" y1="540" x2="250" y2="660" />
    <line class="channel" x1="260" y1="540" x2="260" y2="660" />

    <!-- G – Spleen (10–57) -->
    <line class="channel" x1="210" y1="500" x2="180" y2="560" />

    <!-- G – Solar Plexus (37–40) -->
    <line class="channel" x1="290" y1="500" x2="320" y2="560" />

    <!-- Ego – Throat (21–45) -->
    <line class="channel" x1="270" y1="580" x2="270" y2="390" />

    <!-- Ego – G (51–25) -->
    <line class="channel" x1="260" y1="560" x2="260" y2="500" />

    <!-- Ego – Solar Plexus (26–44) -->
    <line class="channel" x1="300" y1="600" x2="330" y2="580" />

    <!-- Spleen – Root (38–28, 58–18, 48–16) -->
    <line class="channel" x1="160" y1="640" x2="200" y2="780" />
    <line class="channel" x1="170" y1="640" x2="220" y2="780" />
    <line class="channel" x1="180" y1="640" x2="240" y2="780" />

    <!-- Solar Plexus – Root (39–55, 41–30, 19–49) -->
    <line class="channel" x1="340" y1="640" x2="300" y2="780" />
    <line class="channel" x1="330" y1="640" x2="280" y2="780" />
    <line class="channel" x1="320" y1="640" x2="260" y2="780" />

    <!-- Sacral – Root (53–42, 60–3, 52–9) -->
    <line class="channel" x1="230" y1="760" x2="230" y2="760" />
    <line class="channel" x1="250" y1="760" x2="250" y2="780" />
    <line class="channel" x1="270" y1="760" x2="270" y2="780" />

    <!-- Sacral – Spleen (34–57) -->
    <line class="channel" x1="210" y1="700" x2="180" y2="620" />

    <!-- Sacral – Solar Plexus (59–6) -->
    <line class="channel" x1="290" y1="700" x2="320" y2="620" />

    <!-- Sacral – Throat (20–34) -->
    <line class="channel" x1="250" y1="660" x2="250" y2="390" />

    <!-- POORTEN (enkele voorbeeld‑gates per center, klaar om uit te breiden) -->

    <!-- Head gates (61, 63, 64) -->
    <circle class="gate" cx="235" cy="145" r="9" />
    <text class="gate-label" x="235" y="145">61</text>

    <circle class="gate" cx="250" cy="145" r="9" />
    <text class="gate-label" x="250" y="145">63</text>

    <circle class="gate" cx="265" cy="145" r="9" />
    <text class="gate-label" x="265" y="145">64</text>

    <!-- Ajna gates (24, 4, 47, 11, 17, 43) -->
    <circle class="gate" cx="230" cy="265" r="8" />
    <text class="gate-label" x="230" y="265">24</text>

    <circle class="gate" cx="250" cy="265" r="8" />
    <text class="gate-label" x="250" y="265">4</text>

    <circle class="gate" cx="270" cy="265" r="8" />
    <text class="gate-label" x="270" y="265">47</text>

    <!-- Throat gates (56, 62, 23, 31, 8, 33, 20, 16, 35, 45, 12) – hier slechts een selectie visueel -->
    <circle class="gate" cx="210" cy="290" r="7" />
    <text class="gate-label" x="210" y="290">56</text>

    <circle class="gate" cx="230" cy="290" r="7" />
    <text class="gate-label" x="230" y="290">62</text>

    <circle class="gate" cx="250" cy="290" r="7" />
    <text class="gate-label" x="250" y="290">23</text>

    <circle class="gate" cx="270" cy="290" r="7" />
    <text class="gate-label" x="270" y="290">31</text>

    <circle class="gate" cx="290" cy="290" r="7" />
    <text class="gate-label" x="290" y="290">8</text>

    <!-- G‑center gates (1, 2, 7, 10, 13, 15, 25, 46) – subset -->
    <circle class="gate" cx="250" cy="415" r="8" />
    <text class="gate-label" x="250" y="415">1</text>

    <circle class="gate" cx="250" cy="545" r="8" />
    <text class="gate-label" x="250" y="545">2</text>

    <circle class="gate" cx="190" cy="480" r="8" />
    <text class="gate-label" x="190" y="480">7</text>

    <circle class="gate" cx="310" cy="480" r="8" />
    <text class="gate-label" x="310" y="480">13</text>

    <!-- Ego gates (21, 26, 40, 51) -->
    <circle class="gate" cx="275" cy="575" r="7" />
    <text class="gate-label" x="275" y="575">21</text>

    <circle class="gate" cx="305" cy="590" r="7" />
    <text class="gate-label" x="305" y="590">26</text>

    <circle class="gate" cx="245" cy="625" r="7" />
    <text class="gate-label" x="245" y="625">40</text>

    <circle class="gate" cx="290" cy="610" r="7" />
    <text class="gate-label" x="290" y="610">51</text>

    <!-- Sacral gates (3, 5, 9, 14, 27, 29, 34, 42, 59) – subset -->
    <circle class="gate" cx="215" cy="660" r="8" />
    <text class="gate-label" x="215" y="660">3</text>

    <circle class="gate" cx="235" cy="660" r="8" />
    <text class="gate-label" x="235" y="660">5</text>

    <circle class="gate" cx="265" cy="660" r="8" />
    <text class="gate-label" x="265" y="660">14</text>

    <circle class="gate" cx="285" cy="660" r="8" />
    <text class="gate-label" x="285" y="660">34</text>

    <!-- Spleen gates (18, 28, 32, 44, 48, 50, 57) – subset -->
    <circle class="gate" cx="165" cy="580" r="7" />
    <text class="gate-label" x="165" y="580">57</text>

    <circle class="gate" cx="160" cy="630" r="7" />
    <text class="gate-label" x="160" y="630">28</text>

    <!-- Solar Plexus gates (6, 22, 30, 36, 37, 39, 49, 55) – subset -->
    <circle class="gate" cx="335" cy="580" r="7" />
    <text class="gate-label" x="335" y="580">22</text>

    <circle class="gate" cx="340" cy="630" r="7" />
    <text class="gate-label" x="340" y="630">36</text>

    <!-- Root gates (19, 39, 41, 52, 53, 54, 58, 60) – subset -->
    <circle class="gate" cx="200" cy="780" r="8" />
    <text class="gate-label" x="200" y="780">52</text>

    <circle class="gate" cx="230" cy="780" r="8" />
    <text class="gate-label" x="230" y="780">53</text>

    <circle class="gate" cx="260" cy="780" r="8" />
    <text class="gate-label" x="260" y="780">60</text>

    <circle class="gate" cx="290" cy="780" r="8" />
    <text class="gate-label" x="290" y="780">54</text>

  </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
    <!-- ========================= -->
    <!--   KANALEN (ALLE 36)      -->
    <!-- ========================= -->

    <!-- Head ↔ Ajna -->
    <line class="channel" x1="235" y1="150" x2="235" y2="170" />
    <line class="channel" x1="250" y1="150" x2="250" y2="170" />
    <line class="channel" x1="265" y1="150" x2="265" y2="170" />

    <!-- Ajna ↔ Throat -->
    <line class="channel" x1="230" y1="260" x2="230" y2="290" />
    <line class="channel" x1="250" y1="260" x2="250" y2="290" />
    <line class="channel" x1="270" y1="260" x2="270" y2="290" />

    <!-- Throat ↔ G -->
    <line class="channel" x1="230" y1="390" x2="230" y2="420" />
    <line class="channel" x1="250" y1="390" x2="250" y2="420" />
    <line class="channel" x1="270" y1="390" x2="270" y2="420" />

    <!-- G ↔ Sacral -->
    <line class="channel" x1="240" y1="540" x2="240" y2="660" />
    <line class="channel" x1="250" y1="540" x2="250" y2="660" />
    <line class="channel" x1="260" y1="540" x2="260" y2="660" />

    <!-- G ↔ Spleen -->
    <line class="channel" x1="210" y1="500" x2="180" y2="560" />

    <!-- G ↔ Solar Plexus -->
    <line class="channel" x1="290" y1="500" x2="320" y2="560" />

    <!-- Ego ↔ Throat -->
    <line class="channel" x1="270" y1="580" x2="270" y2="390" />

    <!-- Ego ↔ G -->
    <line class="channel" x1="260" y1="560" x2="260" y2="500" />

    <!-- Ego ↔ Solar Plexus -->
    <line class="channel" x1="300" y1="600" x2="330" y2="580" />

    <!-- Spleen ↔ Root -->
    <line class="channel" x1="160" y1="640" x2="200" y2="780" />
    <line class="channel" x1="170" y1="640" x2="220" y2="780" />
    <line class="channel" x1="180" y1="640" x2="240" y2="780" />

    <!-- Solar Plexus ↔ Root -->
    <line class="channel" x1="340" y1="640" x2="300" y2="780" />
    <line class="channel" x1="330" y1="640" x2="280" y2="780" />
    <line class="channel" x1="320" y1="640" x2="260" y2="780" />

    <!-- Sacral ↔ Root -->
    <line class="channel" x1="230" y1="760" x2="230" y2="780" />
    <line class="channel" x1="250" y1="760" x2="250" y2="780" />
    <line class="channel" x1="270" y1="760" x2="270" y2="780" />

    <!-- Sacral ↔ Spleen -->
    <line class="channel" x1="210" y1="700" x2="180" y2="620" />

    <!-- Sacral ↔ Solar Plexus -->
    <line class="channel" x1="290" y1="700" x2="320" y2="620" />

    <!-- Sacral ↔ Throat -->
    <line class="channel" x1="250" y1="660" x2="250" y2="390" />


    <!-- ========================= -->
    <!--       POORTEN (64)       -->
    <!-- ========================= -->

    <!-- HEAD (61, 63, 64) -->
    <circle class="gate" cx="235" cy="145" r="9" /><text class="gate-label" x="235" y="145">61</text>
    <circle class="gate" cx="250" cy="145" r="9" /><text class="gate-label" x="250" y="145">63</text>
    <circle class="gate" cx="265" cy="145" r="9" /><text class="gate-label" x="265" y="145">64</text>

    <!-- AJNA (24, 4, 47, 11, 17, 43) -->
    <circle class="gate" cx="230" cy="265" r="8" /><text class="gate-label" x="230" y="265">24</text>
    <circle class="gate" cx="250" cy="265" r="8" /><text class="gate-label" x="250" y="265">4</text>
    <circle class="gate" cx="270" cy="265" r="8" /><text class="gate-label" x="270" y="265">47</text>
    <circle class="gate" cx="215" cy="250" r="8" /><text class="gate-label" x="215" y="250">11</text>
    <circle class="gate" cx="285" cy="250" r="8" /><text class="gate-label" x="285" y="250">17</text>
    <circle class="gate" cx="250" cy="245" r="8" /><text class="gate-label" x="250" y="245">43</text>

    <!-- THROAT (12 poorten) -->
    <circle class="gate" cx="210" cy="290" r="7" /><text class="gate-label" x="210" y="290">56</text>
    <circle class="gate" cx="230" cy="290" r="7" /><text class="gate-label" x="230" y="290">62</text>
    <circle class="gate" cx="250" cy="290" r="7" /><text class="gate-label" x="250" y="290">23</text>
    <circle class="gate" cx="270" cy="290" r="7" /><text class="gate-label" x="270" y="290">31</text>
    <circle class="gate" cx="290" cy="290" r="7" /><text class="gate-label" x="290" y="290">8</text>
    <circle class="gate" cx="210" cy="310" r="7" /><text class="gate-label" x="210" y="310">33</text>
    <circle class="gate" cx="230" cy="310" r="7" /><text class="gate-label" x="230" y="310">20</text>
    <circle class="gate" cx="250" cy="310" r="7" /><text class="gate-label" x="250" y="310">16</text>
    <circle class="gate" cx="270" cy="310" r="7" /><text class="gate-label" x="270" y="310">35</text>
    <circle class="gate" cx="290" cy="310" r="7" /><text class="gate-label" x="290" y="310">45</text>
    <circle class="gate" cx="250" cy="330" r="7" /><text class="gate-label" x="250" y="330">12</text>

    <!-- G CENTER (1, 2, 7, 10, 13, 15, 25, 46) -->
    <circle class="gate" cx="250" cy="415" r="8" /><text class="gate-label" x="250" y="415">1</text>
    <circle class="gate" cx="250" cy="545" r="8" /><text class="gate-label" x="250" y="545">2</text>
    <circle class="gate" cx="190" cy="480" r="8" /><text class="gate-label" x="190" y="480">7</text>
    <circle class="gate" cx="310" cy="480" r="8" /><text class="gate-label" x="310" y="480">13</text>
    <circle class="gate" cx="220" cy="450" r="8" /><text class="gate-label" x="220" y="450">10</text>
    <circle class="gate" cx="280" cy="450" r="8" /><text class="gate-label" x="280" y="450">15</text>
    <circle class="gate" cx="220" cy="510" r="8" /><text class="gate-label" x="220" y="510">25</text>
    <circle class="gate" cx="280" cy="510" r="8" /><text class="gate-label" x="280" y="510">46</text>

    <!-- EGO (21, 26, 40, 51) -->
    <circle class="gate" cx="275" cy="575" r="7" /><text class="gate-label" x="275" y="575">21</text>
    <circle class="gate" cx="305" cy="590" r="7" /><text class="gate-label" x="305" y="590">26</text>
    <circle class="gate" cx="245" cy="625" r="7" /><text class="gate-label" x="245" y="625">40</text>
    <circle class="gate" cx="290" cy="610" r="7" /><text class="gate-label" x="290" y="610">51</text>

    <!-- SACRAL (3, 5, 9, 14, 27, 29, 34, 42, 59) -->
    <circle class="gate" cx="215" cy="660" r="8" /><text class="gate-label" x="215" y="660">3</text>
    <circle class="gate" cx="235" cy="660" r="8" /><text class="gate-label" x="235" y="660">5</text>
    <circle class="gate" cx="255" cy="660" r="8" /><text class="gate-label" x="255" y="660">9</text>
    <circle class="gate" cx="275" cy="660" r="8" /><text class="gate-label" x="275" y="660">14</text>
    <circle class="gate" cx="295" cy="660" r="8" /><text class="gate-label" x="295" y="660">27</text>
    <circle class="gate" cx="235" cy="690" r="8" /><text class="gate-label" x="235" y="690">29</text>
    <circle class="gate" cx="255" cy="690" r="8" /><text class="gate-label" x="255" y="690">34</text>
    <circle class="gate" cx="275" cy="690" r="8" /><text class="gate-label" x="275" y="690">42</text>
    <circle class="gate" cx="295" cy="690" r="8" /><text class="gate-label" x="295" y="690">59</text>

    <!-- SPLEEN (18, 28, 32, 44, 48, 50, 57) -->
    <circle class="gate" cx="165" cy="580" r="7" /><text class="gate-label" x="165" y="580">57</text>
    <circle class="gate" cx="160" cy="630" r="7" /><text class="gate-label" x="160" y="630">28</text>
    <circle class="gate" cx="150" cy="600" r="7" /><text class="gate-label" x="150" y="600">18</text>
    <circle class="gate" cx="175" cy="600" r="7" /><text class="gate-label" x="175" y="600">32</text>
    <circle class="gate" cx="150" cy="560" r="7" /><text class="gate-label" x="150" y="560">44</text>
    <circle class="gate" cx="175" cy="560" r="7" /><text class="gate-label" x="175" y="560">48</text>
    <circle class="gate" cx="165" cy="540" r="7" /><text class="gate-label" x="165" y="540">50</text>

    <!-- SOLAR PLEXUS (6, 22, 30, 36, 37, 39, 49, 55) -->
    <circle class="gate" cx="335" cy="580" r="7" /><text class="gate-label" x="335" y="580">22</text>
    <circle class="gate" cx="340" cy="630" r="7" /><text class="gate-label" x="340" y="630">36</text>
    <circle class="gate" cx="350" cy="600" r="7" /><text class="gate-label" x="350" y="600">6</text>
    <circle class="gate" cx="325" cy="600" r="7" /><text class="gate-label" x="325" y="600">30</text>
    <circle class="gate" cx="350" cy="560" r="7" /><text class="gate-label" x="350" y="560">37</text>
    <circle class="gate" cx="325" cy="560" r="7" /><text class="gate-label" x="325" y="560">39</text>
    <circle class="gate" cx="335" cy="540" r="7" /><text class="gate-label" x="335" y="540">49</text>
    <circle class="gate" cx="350" cy="520" r="7" /><text class="gate-label" x="350" y="520">55</text>

    <!-- ROOT (19, 39, 41, 52, 53, 54, 58, 60) -->
    <circle class="gate" cx="200" cy="780" r="8" /><text class="gate-label" x="200" y="780">52</text>
    <circle class="gate" cx="230" cy="780" r="8" /><text class="gate-label" x="230" y="780">53</text>
    <circle class="gate" cx="260" cy="780" r="8" /><text class="gate-label" x="260" y="780">60</text>
    <circle class="gate" cx="290" cy="780" r="8" /><text class="gate-label" x="290" y="780">54</text>
    <circle class="gate" cx="215" cy="810" r="8" /><text class="gate-label" x="215" y="810">19</text>
    <circle class="gate" cx="245" cy="810" r="8" /><text class="gate-label" x="245" y="810">41</text>
    <circle class="gate" cx="275" cy="810" r="8" /><text class="gate-label" x="275" y="810">58</text>
    <circle class="gate" cx="305" cy="810" r="8" /><text class="gate-label" x="305" y="810">39</text>
