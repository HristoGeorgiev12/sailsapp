/**
 * BlogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list:function(req, res){
        Blog.find({}).exec(function(err, post){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('list', {posts:post});
        });
    },

    add:function(req, res) {
        res.view('add');
    },

    create:function(req, res){
        var title = req.body.title;
        var body = req.body.body;
    
        Blog.create({post:title, text:body}).exec(function(err){
        if(err){
            res.send(200, {error: 'Database Error'});
        }
    
        res.redirect('/blog/list');
        });
    },

    delete: function(req, res){
        Blog.destroy({id:req.body.val}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
        
            res.redirect('/blog/list');
        });
    return false;
    },

    edit:function(req, res){
        Blog.findOne({id:req.body.val}).exec(function(err, post){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('edit', {posts:post});
        });
    },
    

    update: function(req, res){
        var title = req.body.title;
        var body = req.body.body;
    
        Blog.update({id: req.body.val},{post:title, text:body}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
    
            res.redirect('/blog/list');
        });
    
        return false;
    }

};

