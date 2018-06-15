/**
 * BlogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  read:function(req, res) {
      Blog.find({}).exec(function(err, posts) {
        if(err) {
            res.send(500, {"error": 'Database error'});
        }

        res.view("read", {posts: posts});
      })
  },

  delete:function(req, res) {
    Blog.find({}).exec(function(err, posts) {
      if(err) {
          res.send(500, {"error": 'Database error'});
      }

      res.view("posts", {posts: posts});
    })
},
  update:function(req, res) {
    Blog.find({}).exec(function(err, posts) {
      if(err) {
          res.send(500, {"error": 'Database error'});
      }

      res.view("posts", {posts: posts});
    })
},

  create:function(req, res) {
      var title = req.title;
      var body  = req.body;
}

};

