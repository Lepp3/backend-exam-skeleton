import { Router } from "express";

const authController = Router();


authController.get('/register', (req,res)=>{
    res.render('register');
});

authController.post('/register', async (req,res)=>{
    //todo implement auth service
})


export default authController;