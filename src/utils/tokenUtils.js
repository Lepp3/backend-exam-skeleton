import jwt from 'jsonwebtoken';


export const generateToken = (user)=>{
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email
    };

    const token = jwt.sign(payload,JWT_SECRET, {expiresIn: '2h'});

    return token;
}