const express = require("express");
const app = express();
const port = 8000;
const routes = require("./routes/routes");
const authroutes = require("./routes/authroutes");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api", routes.router);
app.use("/auth",authroutes.router)
app.listen(port, console.log(`app is listening to port ${port}`));
