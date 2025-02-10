import User from '../models/User.js'





export const authService = {
    async register(userData){
        //check if email is in use
        const totalUsersWithSameEmail = User.findOne({email: userData.email});

        if(totalUsersWithSameEmail > 0){
            console.log('Email already used');
            return 
        };

        //check if password and repassword match
        if(userData.password !== userData.rePasssowrd){
            console.log('Password missmatch! ');
            return;
        }

        User.create(userData);
    }
}