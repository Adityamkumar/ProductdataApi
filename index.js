const express=require("express")
const cors=require("cors")
const artData=require("./artData.json")
const app=express()
const PORT=8000;

app.use(cors())

app.get("/api/artData",(req,res)=>{
    return res.json(artData);
})
app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`))