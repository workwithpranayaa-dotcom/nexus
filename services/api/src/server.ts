import express from "express";

const app = express();
app.use(express.json());

const incidents = [
  { id: "INC-1042", title: "Payment failure spike", severity: "HIGH", status: "INVESTIGATING" }
];

app.get("/health", (_, res) => res.json({ ok: true, service: "nexus-api" }));
app.get("/api/incidents", (_, res) => res.json(incidents));

app.post("/api/events", (req, res) => {
  const event = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    ...req.body
  };
  console.log("EVENT", event);
  res.status(202).json(event);
});

app.listen(4000, () => console.log("NEXUS API listening on :4000"));
