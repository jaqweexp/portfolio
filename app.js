const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("This is my portfolio");
});

app.listen(3000);
