import JobModel from "../model/Job.model.js";
export default class JobController {
    // rendering new job post
    newJobForm(req, res) {
        res.render('newjob-form', { user: req.session.user });
    }

    // post request to submit the new job post
    submitJobForm(req, res) {
        let jobmodel = new JobModel();
        let jobPosts = jobmodel.addJobPost(req.body);
        res.redirect('/jobs');
    }

    // it render all the posted jobs
    renderJobList(req, res) {
        let jobmodel = new JobModel();
        let jobPosts = jobmodel.renderJobList();
        res.render('joblist', { user: req.session.user, postLists: jobPosts, postHeading: "All Posted Jobs" });
    }

    // it render jobs on only posted by loged in user
    renderUserPostedJobList(req, res) {
        let jobmodel = new JobModel();
        let jobPosts = jobmodel.renderUserJobList(req.params.uid);
        if (jobPosts) {
            res.render('joblist', { user: req.session.user, postLists: jobPosts, postHeading: "Your Posted Jobs" });
        } else {
            res.render('joblist', { user: req.session.user, postLists: jobPosts, postHeading: "You've Not Posted Jobs Yet" });
        }
    }


    // rendered searched jobs
    renderSearchedJobs(req, res) {
        let { search } = req.body;
        let jobmodel = new JobModel();
        let searched_jobs = jobmodel.searchJobPost(search);
        if (searched_jobs.length == 0) {
            res.render('joblist', { user: req.session.user, postLists: searched_jobs, postHeading: "No relevent searched posts" });
        } else {
            res.render('joblist', { user: req.session.user, postLists: searched_jobs, postHeading: "Relevent Searched jobs" });
        }
    }
}