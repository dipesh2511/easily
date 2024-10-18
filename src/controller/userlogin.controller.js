import UserModel from "../model/user.model.js";
export default class UserLoginController {
    displayLoginForm(req, res) {
        res.render('login', { loginMsg: null, user: null });
    }
    loginRequest(req, res) {
        let { email, password } = req.body;
        let result = UserModel.checkCredential(email, password);
        if (result) {
            req.session.user = {
                uid: result.uid,
                name: result.name,
                email: result.email,
            };
            res.render('firstpage', { user: req.session.user });
        } else {
            res.render('login', { loginMsg: "Invalid Credentials! Try Again", user: null })
        }
    }

    logoutRequest(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                res.render('login', { loginMsg: "Successfully Logout", user: null });
            }
        })
    }
}