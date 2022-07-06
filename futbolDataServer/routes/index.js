var express = require('express');
const { index } = require('../controllers/indexController');
var router = express.Router();
const indexController = require ('../controllers/indexController')
var multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../public/images/products/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
    })
    const upload = multer({ storage: storage })


/* GET home page. */

router.get('/',indexController.selectMatch);
router.get('/match',indexController.selectMatch);
router.post('/match', upload.any(),indexController.writeData);

module.exports = router;
