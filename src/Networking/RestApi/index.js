import express from "express";

const app = express();
console.log(app);

app.all("/", (req, res) => {
  console.log("Request >", req);
  console.log("Response >", res);
  res.send(`I'm Up!`);
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
