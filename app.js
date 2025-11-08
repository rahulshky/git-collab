const express=require ("express");
const app=express();
const ExpressError=require("./Error")

app.get("/admin",function(req,res){

    throw res.send(new ExpressError(403,"admin request is forbidden"))
   
})
app.listen(8080,function(){
    console.log("server is NOW start !");
    
});
