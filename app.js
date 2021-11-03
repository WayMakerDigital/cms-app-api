const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const sequelize = require('./utils/database');
const Blogs = require('./Models/blogmodel');
const router = require('./router.js');


const app = express();

app.use(cors());

sequelize.sync({ force: true });

app.use(express.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))

app.post('/create', async (req, res) => {
  const post = await Blogs.create({
    author: req.body.author,
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    imageURL: req.body.imageURL,
    date: Date.now(),
  })
  console.log(post.imageType);
  res.json(post);
})

app.get('/allposts', async (req, res) => {
  const info = await Blogs.findAll({ 
    order: [['createdAt', 'DESC']],
    attributes: ['id', 'title', 'summary', 'content', 'imageURL']
  });
  res.json(info);
})

app.get('/blog/:blogid', async (req, res) => {
  const blogid = req.params.blogid;
  const singlePost = await Blogs.findOne({where: {id: blogid}});
  console.log(req.params);
  res.json({singlePost});
})

app.patch('/blog/:blogid', async (req, res) => {
  const blogid = req.params.blogid;
  const updatedPost = await Blogs.update({
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
  }, {
    where: {id: blogid}
  });
  res.json({message: 'Update Successful!'});
})

app.delete('/blog/:blogid', async (req, res) => {
  const blogid = req.params.blogid;
  await Blogs.destroy({where: {id: blogid}});
  res.json({message: 'Delete Successful'});
})

app.listen('8000', err => {
  if(err) console.error(err);
  console.log('Server listening on port 8000');
})

router(app);