import { Router } from "express";
import { authService } from "../services/authService.js";

const authController = Router();


authController.get('/register', (req,res)=>{
    res.render('auth/register');
});

authController.post('/register', async (req,res)=>{
   const userData = req.body;

  
   await authService.register(userData);

   res.redirect('/auth/register');
});


authController.get('/login', (req,res)=>{
    res.render('auth/login');
});


authController.post('/login', async (req,res)=>{
    const userData = req.body;

    const token = await authService.login(userData);

    res.cookie('auth', token);

    res.redirect('/');
})


export default authController;