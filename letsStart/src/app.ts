import * as express from "express";
// express 공부
const app = express(); // app이 서버 역할을 한다 (변수명?)
const port = 3000;
app.get("/test", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send("Hello World!@@");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
