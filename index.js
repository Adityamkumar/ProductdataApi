const express=require("express")
const cors=require("cors")
const fs=require("fs")
const artData=require("./artData.json")
const app=express()
const PORT=8000;
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/api/artData",(req,res)=>{
    return res.json(artData);
})
app.post("/api/artData",(req,res)=>{
    const body=req.body;
    artData.push({...body,id:artData.length+1});
    fs.writeFile('./artData.json',JSON.stringify(artData),(err,data)=>{
        return res.json({status:"success",id:artData.length})
    })
})
app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`))