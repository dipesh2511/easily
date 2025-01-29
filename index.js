// all imports
import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from 'path';
import session from 'express-session';
import UserLoginController from "./src/controller/userlogin.controller.js";
import UserRegisterController from "./src/controller/register.controller.js";
import JobController from "./src/controller/jobs.controller.js";
import JobPostController from "./src/controller/jobposts.controller.js";
import ApplicantController from "./src/controller/applicant.controller.js";
// middlewares
import loginAuth from "./src/middleware/loginauth.middleware.js"
import { upload } from "./src/middleware/multer.middleware.js"
import updateAuth from "./src/middleware/restrictupdate/delete.middleware.js"
// all variables
let server = express();

let userlogincontroller = new UserLoginController();
let userregistercontroller = new UserRegisterController();
let jobcontroller = new JobController();
let jobpostcontroller = new JobPostController();
let applicantcontroller = new ApplicantController();

// all middle ware and dependence
// for static file serve directly
server.use(express.static(path.join(path.resolve(), 'public')));
// for the resume 
server.use('/resume',express.static(path.join(path.resolve(),'public','resume')));

server.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));
server.use(express.urlencoded({ extended: false }));
server.use(expressLayouts);

// first page of website
server.get('/', (req, res) => {
    res.render('firstpage', { user: req.session.user });
})

//job serch on main page
server.post('/search',jobcontroller.renderSearchedJobs);

//  rendering seprate login page
server.get('/login-page', userlogincontroller.displayLoginForm);

// posting login request checkign credentails
server.post('/login', userlogincontroller.loginRequest);

// logout reqest and destroying session
server.get('/logout', userlogincontroller.logoutRequest);

// register route
server.post('/register', userregistercontroller.registerUser);

// middleware to check login or not and rendering job form 
server.get('/newjob', loginAuth, jobcontroller.newJobForm);

// submitting job form to server 
server.post('/newjob', loginAuth, jobcontroller.submitJobForm);

// for rendering all the job posts
server.get('/jobs', jobcontroller.renderJobList);

//for rendering job post of a particular user using uid
server.get('/jobs/:uid', loginAuth,jobcontroller.renderUserPostedJobList);

// job posts and its views
server.get('/jobpost/:pid',jobpostcontroller.getJobPost);


// get request for update jobpost
server.get('/jobpost/:pid/update',loginAuth,updateAuth,jobpostcontroller.renderUpdateJobPost);

//post request for update jobpost
server.post('/jobpost/:pid/update',loginAuth,jobpostcontroller.updatingJobPost);

//deleting a job post
server.delete('/jobpost/:pid/delete',updateAuth,jobpostcontroller.deletingJobPost);

// posting new job applicant
server.post('/jobpost/:pid',upload.single('applicantResume'), applicantcontroller.addApplicantForm);

// render the applicant list for a particular post 
server.get('/jobpost/:pid/applicant',updateAuth,applicantcontroller.renderApplicantList);


export default server;

