export default function handler(req, res) {
  const { date, time, location } = req.query;

  // Placeholder berekening — later vullen we dit met echte HD-logica
  const result = {
    success: true,
    message: "HD berekening werkt!",
    input: { date, time, location },
    chart: {
      type: "Manifesting Generator",
      profile: "4/6",
      definition: "Single",
      centers: {
        head: "open",
        ajna: "open",
        throat: "defined",
        g: "defined",
        sacral: "defined",
        root: "open",
        spleen: "open",
        solarPlexus: "open",
        ego: "open"
      }
    }
  };

  res.status(200).json(result);
}

