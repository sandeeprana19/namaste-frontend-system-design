import express from "express";
import bodyParser from "body-parser";

const app = express();
console.log(app);

app.use(bodyParser.json());

app.all("/", (req, res) => {
  console.log("Request >", req);
  console.log("Response >", res);
  res.send(`I'm Up!`);
});

const todos = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
  },
];

// READ
app.get("/todos", (req, res) => {
  res.json(todos);
});

// CREATE
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json({
    message: "New Todo Added!",
  });
});

// UPDATE

// DELETE

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
