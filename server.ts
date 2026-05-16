import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import puppeteer from "puppeteer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for PDF generation
  app.post("/api/generate-pdf", async (req, res) => {
    try {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      const page = await browser.newPage();
      
      // Navigate to the local server
      await page.goto('http://127.0.0.1:3000/', {
        waitUntil: 'networkidle0'
      });

      // Emulate print media type
      await page.emulateMediaType('print');

      const pdf = await page.pdf({
        format: 'Letter',
        margin: {
          top: '0cm',
          bottom: '0cm',
          left: '0cm',
          right: '0cm'
        },
        printBackground: true
      });

      await browser.close();

      res.contentType("application/pdf");
      res.send(Buffer.from(pdf));
    } catch (error) {
      console.error("PDF Generation Error:", error);
      res.status(500).json({ error: "Failed to generate PDF" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
