import { Router } from "express";
import { signUp, login } from "../../controllers/auth.controller";

export const router: Router = Router();

router.post('/register', signUp)

router.post('/login', login)
