const List = require('../models/list');

module.exports.homepage = function(req,res){
    return res.render('home',{
       title : "TO_DO_LIST" 
    });
}


//cresting list and storing it in database
module.exports.create = function(req,res){
    // console.log(req.body);
    //return res.redirect("back");
    List.create(req.body,function(err,list){
        if(err){console.log('error in creating the list');return;}
        console.log(list);
        return res.redirect('back');
    });
}