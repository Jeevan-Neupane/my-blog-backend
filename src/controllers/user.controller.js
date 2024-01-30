import { validationResult } from "express-validator"
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";


export const registerUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json(new ApiError(400, "Please send appropriate data", errors.array()))
    }

    const { fullName, username, email, password } = req.body;

    try {
        const user = await User.find({
            $or: [
                { username },
                { email }
            ]
        })

        if (user.length == 0) {
            res.status(400).json(new ApiError(400, "User already existed"));
            return;
        }

        const newUser = await User.create({
            fullName,
            username,
            email,
            password
        })

        const createdUser = await User.findById(newUser._id);

        if (!createdUser) {
            res.status(500).json(new ApiError(500, "Unable to create user"));
            return;
        } else {

            res.status(200).json(new ApiResponse(201, createdUser, "User Created Successfully"));
            return;
        }

    } catch (error) {
        console.log("Error while registering user", error);
        res.status(500).json(new ApiError(500, "Unable to register user", error))
    }
}

