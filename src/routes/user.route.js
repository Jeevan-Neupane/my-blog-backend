import { Router } from "express";
import { check } from "express-validator";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();


router.post('/', [check('fullName', "Full Name is required field").not().isEmpty(),
check('username', "Username is required").not().isEmpty(),
check("email", "Email is required").isEmail(),
check("password", "Password is required field").isLength({
    min: 6
})],
    registerUser
)


export default router;