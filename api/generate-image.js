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
    <text class="gate-label" x="230" y="290">
