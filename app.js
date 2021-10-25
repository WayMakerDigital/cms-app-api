const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const sequelize = require('./utils/database');
const Blogs = require('./Models/blogmodel');
const router = require('./router.js');


const app = express();

app.use(cors());

sequelize.sync({ force: true });

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/create', async (req, res) => {
  // console.log(req.body);
  const post = await Blogs.create({
    author: req.body.author,
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    date: Date.now(),
  })
  res.json(post);
})

app.get('/test', async (req, res) => {
  const info = await Blogs.findAll({})
  res.json(info);
  console.log(info);
})

app.get('/blog/:blogid', async (req, res) => {
  const blogid = req.params.blogid;
  const singlepost = await Blogs.findOne({where: {id: blogid}});
  console.log(req.params);
  res.json({singlepost});
})


app.listen(8000, err => {
  if(err) console.error(err);
  console.log('Server listening on port 8000');
})

router(app);