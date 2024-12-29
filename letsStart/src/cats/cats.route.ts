import { Cat } from "./cats.model";
import { Router } from "express";

const router = Router();

//* READ 고양이 전체 데이터 다 조회 (회원 정보라고 생각해도됨) CRUD가 중요
router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    //throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* READ 특정 고양이 데이터 조회 (유저라고 하면 본인 혹은 특정 유저 조회)
router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* CREATE 새로운 고양이 추가 api (유저가 회원가입 혹은 블로그 포스팅하는 거랑 비슷)
router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data); // data를 입력하면 create가 됨
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

export default router;