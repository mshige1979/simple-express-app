import express from "express";
import mustacheExpress from "mustache-express";
import bodyParser from 'body-parser';
import mysql2 from 'mysql2';

const app = express();
const port = 5000;

// template
app.set('views', `${__dirname}/views`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

app.use(express.static("public"));

// 
app.use(bodyParser.urlencoded({ extended: true }));

/*
// DB
const con = mysql2.createConnection({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected');
});
*/

app.get("/", (req: express.Request, res: express.Response) => {
  /*
  // simple query
  con.query(
    "SELECT * FROM `users`",
    (err, results, fields) => {
      if (err !== null) {
        throw err;
      }

      //res.send("Hello World! App Runner Test3-3");
      res.render('index', {
        items: results
      });
    }
  );
  */
  //res.send("Hello World! App Runner Test3-3");
  res.render('index',);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
