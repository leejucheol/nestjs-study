import { Router } from "express";
import {
  createCat,
  deleteCat,
  readAllcat,
  readCat,
  updateCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

//* READ 고양이 전체 데이터 다 조회 (회원 정보라고 생각해도됨) CRUD가 중요
router.get("/cats", readAllcat);

//* READ 특정 고양이 데이터 조회 (유저라고 하면 본인 혹은 특정 유저 조회)
router.get("/cats/:id", readCat);

//* CREATE 새로운 고양이 추가 api (유저가 회원가입 혹은 블로그 포스팅하는 거랑 비슷)
router.post("/cats", createCat);

//* UPDATE 고양이 데이터 업데이트 -> PUT
router.put("/cats/:id", updateCat);

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
router.patch("/cats/:id", updatePartialCat);

//* DELETE 고양이 데이터 삭제 -> DELETE
router.delete("/cats/:id", deleteCat);

export default router;
