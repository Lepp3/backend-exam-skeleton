import User from '../models/User.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';




export const authService = {
    async register(userData){
        //check if email is in use
        const user = await User.findOne({email: userData.email});
       
        if(user){
            throw new Error('User already exists!');
        };

        //check if password and repassword match
        if(userData.password !== userData.rePassword){
           throw new Error('Password mismatch!');
        }

        return User.create(userData);
    },

    async login(userData){
        const user = await User.findOne({email: userData.email});

        if(!user){
            throw new Error('Invalid username or password!');
        };

        const isValid = await bcrypt.compare(userData.password, user.password);

        if(!isValid){
            throw new Error('peerasi');
        };

        const payload = {
            id: user.id,
            username: user.username,
            email: user.email
        };

        const token = jwt.sign(payload,JWT_SECRET);

        return token;

        
    }
}