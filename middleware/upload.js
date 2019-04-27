const multer  = require('multer');
const path = require('path');
const crypto = require('crypto'); 

const publicDir = require('path').join(__dirname, '/../public/upload');
const storage = multer.diskStorage({
  destination: publicDir,
  filename: (req, file, cb) => {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)  
      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
});

const upload = multer({ storage: storage, dest: publicDir });

module.exports = upload;