import multer, { diskStorage } from "multer";
import path from 'path';
const fileupload=multer.diskStorage({


    destination:(req,file,cb)=>{
        cb(null,"./uploads/")
    },
    filename:(req,file,cb)=>{
       const ext= path.extname(file.originalname)
        const basename=new Date().toISOString().replace(/:/g,'_');
        
        cb(null,`${basename}${ext}`);
    }

})

export const upload=multer({storage:fileupload});