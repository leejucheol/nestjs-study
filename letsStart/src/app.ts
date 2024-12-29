import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

//* json middleware / express에서 제공하는 middleware를 사용
app.use(express.json());

app.use(catsRouter); // 중간 middleware라고 생각해도됨. 실직적으로는 라우터

//* 404 middleware
app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
