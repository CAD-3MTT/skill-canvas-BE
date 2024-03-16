const express = require("express");
const app = express();

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/short-message", (req, res) => {
  const body = req.body;

  res.json({
    message: `You are awesome ${body?.name} for reaching here 🎉🎉🎉🎺🎺🎺`,
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`skill-canvas-BE app listening on port http://localhost:${port}`);
});
