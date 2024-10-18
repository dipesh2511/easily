let applicantList = [];

export default class ApplicantModel {
    renderAppliantList(applicantIds) {
        console.log(applicantIds);
        let applicantDetails = [];
        for(let applicantId of applicantIds){
            let applicantPost = applicantList.find((applicant)=>{
                return applicant.applicantid == applicantId;
            })
            if(applicantPost){
                applicantDetails.push(applicantPost);
            }
        }
        return applicantDetails;
    }
    addApplicant(textbody, filelocation) {
        applicantList.push({
            applicantid: `applicant${applicantList.length + 1}`,
            uid: textbody.uid,
            pid: textbody.pid,
            applicantName: textbody.applicantName,
            applicantEmail: textbody.applicantEmail,
            applicantPhoneNo: textbody.applicantPhoneNo,
            applicantResume: `${filelocation}`
        })
        return applicantList[applicantList.length - 1];
    }
    
}