const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World! App Runner Test3-2");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
