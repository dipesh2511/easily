export default (req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        res.render('login',{ loginMsg: "First Login as Recruiter",user:null })
    }
}