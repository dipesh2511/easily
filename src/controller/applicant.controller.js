import ApplicantModel from "../model/applicant.model.js";
import JobModel from "../model/Job.model.js";
export default class ApplicantController {
    addApplicantForm(req, res) {
        let applicantmodel = new ApplicantModel();
        let jobmodel = new JobModel();
        let {applicantid,pid} = applicantmodel.addApplicant(req.body,`${req.file.filename}`)
        jobmodel.addApplicant(applicantid,pid);
        res.redirect(req.url)
    }
    renderApplicantList(req,res){
        let jobmodel = new JobModel();
        let applicantmodel = new ApplicantModel();
        let applicantIds = jobmodel.sendApplicantIds(req.params.pid);
        let applicantDetails = applicantmodel.renderAppliantList(applicantIds); 
        res.render('viewList',{user:req.session.user,applicantDetails:applicantDetails});
    }
}