import { AUTH_COOKIE_NAME, JWT_SECRET } from "../config.js";
import jwt from 'jsonwebtoken';


export const auth = (req,res,next)=>{
    const token = req.cookies;
    if(!token){
        return next();
    }

    try{
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.user = decodedToken;
        res.locals.user = decodedToken;
        next();
    }catch(err){
        res.clearCookie(AUTH_COOKIE_NAME);
        res.redirect('/auth/login');
    }
    
}