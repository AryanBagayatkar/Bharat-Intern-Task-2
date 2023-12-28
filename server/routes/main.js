const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

 router.get('', async (req, res) => {
   const locals = {
     title: "NodeJs Blog",
     description: "Simple Blog created with NodeJs, Express & MongoDb."
   }

   try {
     const data = await Post.find();
     res.render('index', { locals, data });
   } catch (error) {
     console.log(error);
   }
 });

// post
router.get('/post/:id',async(req,res)=>{
   
    try {
        const locals ={
            title: "Nodde js",
            description: "simple Blog"
        }

        let slug = req.params.id;

        const data = await Post.findById( { _id: slug } );
         res.render('post',{locals,data});
    } catch (error) {
        console.log(error);
    }

   
});


//form
router.get('/create',  async (req, res) => {
  try {
    const locals = {
      title: 'Add Post',
      description: 'Simple Blog created with NodeJs, Express & MongoDb.'
    }

    const data = await Post.find();
    res.render('create', {
      locals,
    
    });

  } catch (error) {
    console.log(error);
  }

});

router.post('/create',  (req, res) => {
  const post = new Post({
    title:req.body.title,
    body:req.body.body,
  })
  post.save().then(()=>{
    res.redirect(`/`);
  })
});

//create
router.get('/create',(req,res)=>{
  res.render('create');
});



module.exports = router;