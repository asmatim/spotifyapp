const path = require('path');
const multer = require('multer');

module.exports = (folderName) => {

    let filePath;

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `public/images/${folderName}/`,);
        },
        filename: (req, file, cb) => {
            cb(null, filePath);
        }
    });

    return multer({
        fileFilter: (req, file, cb) => {
            const ext = path.extname(file.originalname);

            filePath = Date.now() + path.extname(file.originalname);
            req.body.url = filePath;

            if (
                ext !== ".png" &&
                ext !== ".gif" &&
                ext !== ".jpg" &&
                ext !== ".jpeg"
            ) {
                return cb(new Error('Only images are allowed'));
            }
            cb(null, true);
        },
        storage: storage
    });
};

