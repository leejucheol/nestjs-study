import { error } from "console";
import { Cat } from "./app.model";
import * as express from "express";

const app: express.Express = express();

// app.use는 middleware라고 함. / app.get 라우터 부분에 next라는 인자만 추가해주면 middleware가 됨 ex) app.get("/cats/blue", (req, res, next)
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

// const data = [1, 2, 3, 4];

// app.get들은 다 라우터라고 함.
app.get("/", (req: express.Request, res: express.Response) => {
  //console.log(req.rawHeaders[1]);
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res) => {
  //console.log(req.rawHeaders[1]);
  res.send({ blue: Cat[0] });
});

app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
