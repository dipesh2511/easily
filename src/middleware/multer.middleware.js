import multer  from "multer";
let storageConfiguration = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/resume')
    },
    filename:(req,file,cb)=>{
        let date = Date.now();
        cb(null,`${date}_${file.originalname}`);
    }
});
let upload = multer({storage:storageConfiguration});
export {upload};