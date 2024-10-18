import JobModel from "../model/Job.model.js";
export default class JobPostController {
    // render posted job detailed view
    getJobPost(req, res) {
        let jobmodel = new JobModel();
        let jobPost = jobmodel.viewJobPost(req.params.pid);
        res.render('jobpostdetailview', { user: req.session.user, jobPost: jobPost })
    }

    // get method render update form for the posted job
    renderUpdateJobPost(req, res) {
        let jobmodel = new JobModel();
        let jobPost = jobmodel.viewJobPost(req.params.pid);
        res.render('updatePostedForm', { user: req.session.user, formUpdate: jobPost });
    }

    // post method for update form view
    updatingJobPost(req, res) {
        let jobmodel = new JobModel();
        let jobPost = jobmodel.updatePost(req.body);
        if (jobPost) {
            res.render('joblist', { user: req.session.user, postLists: jobPost, postHeading: "Your Posted Jobs" });

        } else {
            res.render('errorView', { errorMsg: "Enable to find the job post" })
        }
    }
    // delete a particular job view
    deletingJobPost(req, res) {
        console.log("delete post hit")
        let jobmodel = new JobModel();
        let result = jobmodel.deletePost(req.params.pid);
        if (result) {
            res.status(200).send("Post deleted successfully.");
        } else {
            res.render('errorView', { user: req.session.user, errorMsg: "Can't find this post" })
        }
    }
};