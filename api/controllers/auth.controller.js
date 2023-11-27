import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res , next) => {

    const { username, password, email } = req.body

    const hashedPassword = bcryptjs.hashSync(password, 10)
    const nerUser = new User({ username, email, password: hashedPassword })


    try {
        await nerUser.save()

        res.status(200).json("user created successfuly")
    } catch (error) {

next(errorHandler(500 , 'error  from the function'))
    }
}

