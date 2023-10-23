const express = require("express");

const app = express();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running at PORT:${PORT}`);
});

app.get("/", (req, res) => {
  return res.json({ message: "Hey I'm nodejs in container" });
});
