var express = require('express');
var router = express.Router();
const multer = require('multer')


const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'public/images')
  },

  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})

let upload=multer({storage:storage})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.single('multi-files'), (req, res) => {
  console.log(req.body.multi-files)
  res.redirect('/')
})

module.exports = router;
