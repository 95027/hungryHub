import {Request, Response} from "express";
import User from "../models/user";

const crateUser = async (req: Request, res: Response) => {

    try {
        const {auth0Id} = req.body;
        const existingUser = await User.find(auth0Id);

        if(existingUser){
            return res.status(200).send();
        }

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json(newUser.toObject());
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'error creating user'});
    }
}

export default {
    crateUser
}