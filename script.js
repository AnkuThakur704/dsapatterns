import express from "express"
import cors from "cors"
import pattersnmodel from "./model.js"
const app = express()
app.use(cors({
    origin:["http://localhost:5173","https://dsapatternsfrontend.vercel.app"]
}))
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Server Live")
})
app.post("/",async(req,res)=>{
    console.log("hit")
    console.log(req.body)
    const dt =new Date()
    const pdate = dt.toDateString()
    console.log("this is pdate: ",pdate)
    const ins = await pattersnmodel.insertOne({...req.body,pdate:pdate})
    if(ins){
        res.json({success:true})
    }
    else{
        res.json({success:false})
    }
})

app.get("/getpatterns",async(req,res)=>{
    const allpatterns = await pattersnmodel.find()
    console.log(allpatterns)
    res.json(allpatterns)
})

app.listen(process.env.PORT||8080,()=>{
    console.log("server live")
})