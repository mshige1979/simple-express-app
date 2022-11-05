import express from "express";
import mustacheExpress from "mustache-express";
import bodyParser from 'body-parser';
const app = express();
const port = 5000;

// template
app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

app.use(express.static("public"));

// 
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  //res.send("Hello World! App Runner Test3-3");
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
