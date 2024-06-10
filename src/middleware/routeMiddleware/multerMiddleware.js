/******** MULTER Configuracion ************/
const multer = require('multer'); //multer
const path = require('path');

const storage = multer.diskStorage({
    //destino del archivo
    destination: (req, res, cb) => {
        const pathFolder = path.join(__dirname, '..', '..', 'public', 'img', 'imgUsers');
        cb(null, pathFolder);
    },
    // le reasignamos un nombre a ese archivo
    filename: (req, file, cb) => {
        const newName = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, newName)
    }
})
const upload = multer({ storage }) // storage:storage

module.exports = upload;