import { Router } from "express";
import { pathInitial, pathInitialPost } from "../controllers/apiController.js";
const router  = Router()

router.get("/",pathInitial)

router.post("/", pathInitialPost)

export default router