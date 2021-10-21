"use strict"
const BlogPost = require('../models/blogmodel.js');

exports.publishPost = (req, res) => {
    const NewBlogPost = new BlogPost(req.body);
    NewBlogPost.save((err, blogPost) => {
        if(err) {
            return res.status(422).json({
                msg: 'server encountered problem',
                error: err
            });
        }
        else {
            return res.status(200).json({
                msg: 'success',
                blogPost: blogPost
            });
        }
    });
};