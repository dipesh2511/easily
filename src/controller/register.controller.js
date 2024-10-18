import UserModel from "../model/user.model.js";
export default class UserRegisterController {
    registerUser(req, res) {
        let { name, email, password } = req.body;
        let result = UserModel.addUser(name, email, password);
        if (result) {
            res.render('login', { loginMsg: "Successfull Registered, Now login", user: null });
        } else {
            console.log("user not registered")
        }
    }
}
