const multer = require("multer")

//FILE UPLOAD MIDDLEWARE

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "uploads/")
    },
    filename: function (req, file, callback) {
        callback(null, `${req.user.uid}-${file.originalname}`)
    }
})

//FILE TYPE & FILE SIZE RESTRICTIONS APPLIED

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg"||file.mimetype == "image/jpeg") {
            callback(null, true)

        } else {
            console.log("invalid file type")
            callback && callback(null, false)
        }
    },
    limits: { fileSize: 1024 * 1024 * 2 }
})

module.exports = upload