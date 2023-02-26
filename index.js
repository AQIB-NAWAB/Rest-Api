const router=require("./router")
const express=require("express");
require("./Conncetion")
const app=express();
const StudentData=require("./model")
app.use(express.json())
app.use(router)





app.listen(3000,()=>{
    console.log("Server is listening on port 3000...")
})