import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Proxy route for schemes API to avoid CORS issues from the frontend preview environment
  app.post("/api/getSchemes", async (req, res) => {
    try {
      const response = await fetch("https://api.nivesh.com/API/getSchemesDataV2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body || {}),
      });

      const text = await response.text();
      // Attempt to parse JSON, but return raw text if parsing fails
      try {
        const json = JSON.parse(text);
        res.status(response.status).json(json);
      } catch (e) {
        res.status(response.status).send(text);
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Proxy request failed" });
    }
  });

  return app;
}
