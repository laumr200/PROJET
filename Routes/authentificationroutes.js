import { Router } from "express";

import { login } from "../Authentification/login.js";

import loginRules from "../Validations/loginValidation.js";

const authRoute = Router()

authRoute.post('/',  login)

export default authRoute