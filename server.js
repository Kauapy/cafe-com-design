const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// Importar o JSON
const coffee = require("./coffee.json");

// Middlewares
app.use(cors());
app.use(express.json());

// Em desenvolvimento: só as rotas da API
if (process.env.NODE_ENV !== 'production') {
  // API Routes para desenvolvimento
  app.get("/coffee", (req, res) => {
    console.log("📄 Requisição para /coffee recebida");
    console.log("☕ Dados do café:", coffee.length, "cafés encontrados");
    res.json(coffee);
  });

  app.get("/api/coffee", (req, res) => {
    console.log("📄 Requisição para /api/coffee recebida");
    res.json(coffee);
  });

  app.get("/api", (req, res) => {
    res.json({ 
      message: "API funcionando!", 
      status: "online",
      endpoints: ["/coffee", "/api/coffee"]
    });
  });
} else {
  // Em produção: servir React + API
  app.use(express.static(path.join(__dirname, 'build')));

  app.get("/coffee", (req, res) => {
    res.json(coffee);
  });

  app.get("/api/coffee", (req, res) => {
    res.json(coffee);
  });

  app.get("/api", (req, res) => {
    res.json({ 
      message: "API funcionando!", 
      status: "online",
      endpoints: ["/coffee", "/api/coffee"]
    });
  });

  // Catch all: serve React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Iniciar servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`☕ Coffee data loaded: ${coffee.length} items`);
});