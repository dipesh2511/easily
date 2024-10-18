let jobPosts = [
    {
        pid: 'post1',
        uid: "user5",
        u_name: 'dipesh',
        jobCompany: "Tech Mahindra",
        jobCategory: "tech",
        jobDesignation: "SDE",
        jobLocation: "Bangalore",
        jobSalary: '1200000',
        jobPosition: 5,
        jobSkills: ["React", "Node", "Express", "MongoDb"],
        jobApplyBy: "2024-10-15",
        jobApplicants: []
    },
    {
        pid: 'post2',
        uid: "user5",
        u_name: 'dipesh',
        jobCompany: "Coding Ninjas",
        jobCategory: "nontech",
        jobDesignation: "HR",
        jobLocation: "Mumbai",
        jobSalary: '900000',
        jobPosition: 7,
        jobSkills: ["C++", "Data Structure & Algo"],
        jobApplyBy: "2024-09-30",
        jobApplicants: []
    },
    {
        pid: 'post3',
        uid: "user4",
        u_name: 'Himanshu',
        jobCompany: "TCs",
        jobCategory: "tech",
        jobDesignation: "Full-Stack Developer",
        jobLocation: "Delhi",
        jobSalary: '1800000',
        jobPosition: 4,
        jobSkills: ["JavaScript", "React", "Node", "MongoDb"],
        jobApplyBy: "2024-10-25",
        jobApplicants: []
    },
    {
        pid: 'post4',
        uid: "user5",
        u_name: 'dipesh',
        jobCompany: "Amazon",
        jobCategory: "tech",
        jobDesignation: "HR",
        jobLocation: "Pune",
        jobSalary: '13432432',
        jobPosition: 12,
        jobSkills: ["Angular", "MongoDb", "Java", "Spring Boot"],
        jobApplyBy: "2024-10-31",
        jobApplicants: []
    }
]
export default class JobModel {
    addJobPost(jobFormObject) {
        let { uid, u_name, jobCompany, jobCategory, jobDesignation, jobLocation, jobSalary, jobPosition, jobSkills, jobApplyBy } = jobFormObject;
        jobPosts.push({
            pid: `post${jobPosts.length + 1}`,
            uid: uid,
            u_name: u_name,
            jobCompany: jobCompany,
            jobCategory: jobCategory,
            jobDesignation: jobDesignation,
            jobLocation: jobLocation,
            jobSalary: `${jobSalary}`,
            jobPosition: jobPosition,
            jobSkills: jobSkills,
            jobApplyBy: jobApplyBy,
            jobApplicants: []
        })
        return;
    }
    // sending array of job post
    renderJobList() {
        return jobPosts;
    }

    // sending array of searched item basis of tech non tech
    searchJobPost(criteria) {
          let searched_jobs = jobPosts.filter((post)=>{
            if(post.jobCompany.toLowerCase() == criteria.toLowerCase() || post.jobCategory.toLowerCase() == criteria.toLowerCase() || post.jobDesignation.toLowerCase() == criteria.toLowerCase()){
                return post;
            }else{
               let Skills = post.jobSkills;
               for(let skill of Skills){
                 if(skill.toLowerCase() == criteria.toLowerCase()){
                    return post;
                 }
               }
            }
          })
          return searched_jobs;
    }

    // sending array of job post posted by a user using uid
    renderUserJobList(uid) {
        let result = jobPosts.filter((user) => {
            return user.uid == uid;
        })
        return result;
    }

    // sending a particular job post searching it by the pid 
    viewJobPost(pid) {
        return jobPosts.find((user) => {
            return user.pid == pid;
        })
    }

    // serching the job post using post id and adding the applicant which applied to the particular post
    addApplicant(applicantid, pid) {
        let index = jobPosts.findIndex((post) => {
            return post.pid == pid;
        })
        //   adding applicant here
        jobPosts[index].jobApplicants.push(applicantid);
        return;
    }

    //checking the posted post belongs to a user before givinf permission to update or Delete
    permissionAccess(uid, pid) {
        let post = jobPosts.find((user) => {
            return user.pid == pid && user.uid == uid;
        });
        if (post) {
            return true;
        } else {
            return false;
        }
    }

    //updating post here after checking the above function permission
    updatePost(jobFormObject) {
        let { pid, uid, u_name, jobCompany, jobCategory, jobDesignation, jobLocation, jobSalary, jobPosition, jobSkills, jobApplyBy } = jobFormObject;
        let updating_post = jobPosts.find((post) => {
            return post.pid == pid;
        })
        if (updating_post) {
            updating_post.jobCompany = jobCompany;
            updating_post.jobCategory = jobCategory;
            updating_post.jobDesignation = jobDesignation;
            updating_post.jobLocation = jobLocation;
            updating_post.jobSalary = jobSalary;
            updating_post.jobPosition = jobPosition;
            updating_post.jobSkills = jobSkills;
            updating_post.jobApplyBy = jobApplyBy;
            updating_post.jobApplyBy = jobApplyBy;
            let jobmodel = new JobModel();
            return jobmodel.renderUserJobList(uid);
        } else {
            return false;
        }
    }

    // deleting the job post form list 
    deletePost(pid) {
        let post_index = jobPosts.findIndex((post) => {
            return post.pid == pid;
        });
        console.log(post_index)
        if (post_index >= 0) {
            jobPosts.splice(post_index, 1);
            return true;
        } else {
            return false;
        }
    }

    // returning array of applicants those who have applied for a particular jobpost using pid
    sendApplicantIds(pid) {
        let applicantIds = jobPosts.find((user) => {
            return user.pid == pid;
        })
        if (applicantIds) {
            return applicantIds.jobApplicants;
        } else {
            return false;
        }
    }
}