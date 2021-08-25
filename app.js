<<<<<<< HEAD
const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
=======
const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
>>>>>>> 22d428665b21d04fc7e0c7a888e6e6a5985a9ec4
});