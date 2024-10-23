const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './temp/uploads')
    },
    filename: (req, file, cb) => {
        // console.log(`this is file from server :${file}`)
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({
    storage, fileFilter: (req, file, cb) => {
        console.log('file filter')
        console.log(`this is file type ${file.mimetype}`)
        if (file.mimetype === 'application/pdf') {
            cb(null, true)
        } else {
            cb(null, false);
            return new Error('bad file input')
        }
    }
})


module.exports = upload