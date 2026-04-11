// /api/generate-image.js

export default async function handler(req, res) {
  // Canvas
  const width = 400;
  const height = 900;

  // Kleuren & stijl
  const turquoise = "#63bca1";
  const rustBrown = "#b46a4c"; // nog niet gebruikt, maar klaar voor later
  const centerStrokeWidth = 1.5;
  const gateRadius = 7;
  const gateNumberFontSize = 9;
  const channelStrokeWidth = 2;

  // Centers (klassieke HD layout, hoog & smal)
  const centers = {
    Crown:   { x: 200, y: 70,  type: "triangleUp" },
    Mind:    { x: 200, y: 150, type: "triangleDown" },
    Throat:  { x: 200, y: 240, type: "square" },
    Self:    { x: 200, y: 350, type: "diamond" },
    Heart:   { x: 260, y: 350, type: "squareSmall" },
    Spleen:  { x: 130, y: 350, type: "triangleLeft" },
    Emotions:{ x: 270, y: 460, type: "triangleRight" },
    Sacral:  { x: 200, y: 470, type: "square" },
    Root:    { x: 200, y: 620, type: "square" }
  };

  // Gates → Centers (uit jouw C# GatesExtensionMethods.GetCenter)
  const gateToCenter = {
    1: "Self",
    2: "Self",
    3: "Sacral",
    4: "Mind",
    5: "Sacral",
    6: "Emotions",
    7: "Self",
    8: "Throat",
    9: "Sacral",
    10: "Self",
    11: "Mind",
    12: "Throat",
    13: "Self",
    14: "Sacral",
    15: "Self",
    16: "Throat",
    17: "Mind",
    18: "Spleen",
    19: "Root",
    20: "Throat",
    21: "Heart",
    22: "Emotions",
    23: "Throat",
    24: "Mind",
    25: "Self",
    26: "Heart",
    27: "Sacral",
    28: "Spleen",
    29: "Sacral",
    30: "Emotions",
    31: "Throat",
    32: "Spleen",
    33: "Throat",
    34: "Sacral",
    35: "Throat",
    36: "Emotions",
    37: "Emotions",
    38: "Root",
    39: "Root",
    40: "Heart",
    41: "Root",
    42: "Sacral",
    43: "Mind",
    44: "Spleen",
    45: "Throat",
    46: "Self",
    47: "Mind",
    48: "Spleen",
    49: "Emotions",
    50: "Spleen",
    51: "Heart",
    52: "Root",
    53: "Root",
    54: "Root",
    55: "Emotions",
    56: "Throat",
    57: "Spleen",
    58: "Root",
    59: "Sacral",
    60: "Root",
    61: "Crown",
    62: "Throat",
    63: "Crown",
    64: "Crown"
  };

  // Channels (uit jouw Channels enum)
  const channels = [
    [1, 8],
    [2, 14],
    [3, 60],
    [4, 63],
    [5, 15],
    [6, 59],
    [7, 31],
    [9, 52],
    [10, 20],
    [10, 34],
    [10, 57],
    [11, 56],
    [12, 22],
    [13, 33],
    [16, 48],
    [17, 62],
    [18, 58],
    [19, 49],
    [20, 34],
    [20, 57],
    [21, 45],
    [23, 43],
    [24, 61],
    [25, 51],
    [26, 44],
    [27, 50],
    [28, 38],
    [29, 46],
    [30, 41],
    [32, 54],
    [34, 57],
    [35, 36],
    [37, 40],
    [39, 55],
    [42, 53],
    [47, 64]
  ];

  // Groepeer gates per center
  const gatesByCenter = {};
  for (let gate = 1; gate <= 64; gate++) {
    const centerName = gateToCenter[gate];
    if (!centerName) continue;
    if (!gatesByCenter[centerName]) gatesByCenter[centerName] = [];
    gatesByCenter[centerName].push(gate);
  }

  // Posities van gates per center (cirkelvormig rond het center)
  const gatePositions = {}; // gateNumber -> {x, y}
  const gateRingRadius = 32;

  Object.entries(gatesByCenter).forEach(([centerName, gateList]) => {
    const center = centers[centerName];
    if (!center) return;
    const count = gateList.length;
    gateList.forEach((gate, index) => {
      const angle = (Math.PI * 2 * index) / count - Math.PI / 2; // start bovenaan
      const x = center.x + gateRingRadius * Math.cos(angle);
      const y = center.y + gateRingRadius * Math.sin(angle);
      gatePositions[gate] = { x, y };
    });
  });

  // Helpers om center‑vormen te tekenen
  function drawCenterShape(id, center) {
    const { x, y, type } = center;
    const size = 60;
    const half = size / 2;
    const small = 36;
    const smallHalf = small / 2;

    switch (type) {
      case "triangleUp":
        return `<polygon id="${id}" points="${x},${y - half} ${x - half},${y + half} ${x + half},${y + half}" fill="none" stroke="${turquoise}" stroke-width="${centerStrokeWidth}" />`;
      case "triangleDown":
        return `<polygon id="${id}" points="${x},${y + half} ${x - half},${y - half} ${x + half},${y - half}" fill="none" stroke="${turquoise}" stroke-width="${centerStrokeWidth}" />`;
      case "triangleLeft":
        return `<polygon id="${id}" points="${x - half},${y} ${x + half},${y - half} ${x + half},${y + half}" fill="none" stroke="${turquoise}" stroke-width="${centerStrokeWidth}" />`;
      case "triangleRight":
        return `<polygon id="${id}" points="${x + half},${y} ${x - half},${y - half} ${x - half},${y + half}" fill="none" stroke="${turquoise}" stroke-width="${centerStrokeWidth}" />`;
      case "diamond":
        return `<polygon id="${id}" points="${x},${y - half} ${x - half},${y} ${x},${y + half} ${x + half},${y}" fill="none" stroke="${turquoise}" stroke-width="${centerStrokeWidth}" />`;
      case "squareSmall":
        return `<rect id="${id}" x="${x - smallHalf}" y="${y - smallHalf}" width="${small}" height="${small}" fill="none" stroke="${turquoise}" stroke-width="${centerStrokeWidth}" />`;
      case "square":
      default:
        return `<rect id="${id}" x="${x - half}" y="${y - half}" width="${size}" height="${size}" fill="none" stroke="${turquoise}" stroke-width="${centerStrokeWidth}" />`;
    }
  }

  // SVG centers
  const centersSvg = Object.entries(centers)
    .map(([name, center]) => drawCenterShape(name, center))
    .join("\n");

  // SVG gates (cirkel + turquoise nummer)
  const gatesSvg = Object.entries(gatePositions)
    .map(([gateStr, pos]) => {
      const gate = parseInt(gateStr, 10);
      return `
        <g id="gate-${gate}">
          <circle cx="${pos.x}" cy="${pos.y}" r="${gateRadius}" fill="white" stroke="${turquoise}" stroke-width="1" />
          <text x="${pos.x}" y="${pos.y + 3}" text-anchor="middle" font-size="${gateNumberFontSize}" fill="${turquoise}" font-family="sans-serif">${gate}</text>
        </g>
      `;
    })
    .join("\n");

  // SVG channels (lijnen tussen gate‑posities)
  const channelsSvg = channels
    .map(([g1, g2], idx) => {
      const p1 = gatePositions[g1];
      const p2 = gatePositions[g2];
      if (!p1 || !p2) return "";
      return `<line id="channel-${idx}" x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="#222" stroke-width="${channelStrokeWidth}" stroke-linecap="round" />`;
    })
    .join("\n");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect x="0" y="0" width="${width}" height="${height}" fill="white" />
      ${channelsSvg}
      ${centersSvg}
      ${gatesSvg}
    </svg>
  `.trim();

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
