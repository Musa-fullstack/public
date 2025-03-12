const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
    const HTMLPath = path.join(__dirname, "views", "index.html")
  res.sendFile(HTMLPath);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
