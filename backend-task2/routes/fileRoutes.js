const express = require("express")
const router = express.Router()
const upload = require("../middleware/fileHandler")

router.post("/upload-file", upload.single("file") ,(req,res)=>{
    res.send("File Uploaded")
})


router.post("/download-file", (req,res)=>{
    try{
        res.download(`D:/Innovature/training/backend-task2/uploads/${req.user.uid}-${req.body.filename}`)
    }
    catch(err){
        return res.send("Ensure correct name of the file (PS - You can only access your own uploaded files)")
    }
       
})

module.exports = router