const List = require('../models/list');

module.exports.homepage = function(req,res){

    //fetching data from database
    List.find({},function(err,list){
        if(err){
            console.log('Error in fetching list from db');
            return;
        }
        return res.render('home',{
            title : "TO_DO_LIST", 
            TODO_List : list
         });
    });
}


//cresting list and storing it in database
module.exports.create = function(req,res){
    // console.log(req.body);
    // return res.redirect("back");
    List.create(req.body,function(err,list){
        if(err){console.log('error in creating the list');return;}
        console.log(list);
        return res.redirect('/');
    });
}

//delete item from database

module.exports.delete = function(req,res){

    //getting the id of selected boxes
    let id = req.query;
    console.log(id);

    //gives the length of the selected checkboxes
    let chechboxs=Object.keys(id).length;

    //iterating over each selected boxes
    for(let i=0;i<chechboxs;i++)
    {
        List.findByIdAndDelete(Object.keys(id)[i],function(err)
        {
            if(err)
            {
                console.log("error in deleteing the item");
                return;
            }
            
        })
    }
    return res.redirect('back');
    //find the item in the database using id and delte it
    // List.findByIdAndDelete(id,function(err){
    //     if(err){console.log('Error while deleting the item from database');return;}

    //     return res.redirect('back');

    // });

}