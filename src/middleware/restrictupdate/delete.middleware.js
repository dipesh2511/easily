import JobModel from "../../model/Job.model.js";
export default (req, res, next) => {
    let jobmodel = new JobModel();
    let result = jobmodel.permissionAccess(req.session.user.uid, req.params.pid);
    if (result) {
        next();
    } else {
        res.render('errorView',{user:req.session.user,errorMsg:"Not your post can't update or delete"})
    }
            
}