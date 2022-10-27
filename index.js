const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use("/", (req, res) > {
  res.send({
    status: 200,
    message: "Success"
  })
})

app.listen(port, () => {
  console.log("Server active at port", port);
)
