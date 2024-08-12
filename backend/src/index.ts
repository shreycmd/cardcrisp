import express,{Request,Response} from 'express'
 const app =express();
 import { PrismaClient } from "@prisma/client";
 import cors from 'cors';
app.use(express.json())
app.use(cors())
 const prisma = new PrismaClient();
 interface flash {
    type:string,
    question:string,
    answer:string
 }
 app.get("/admin/card",async(req:Request,res:Response)=>{
    try {
        const cards=await prisma.card.findMany();
       
        res.status(201).json(cards);
    } catch (error) {
        console.log(error);
        res.status(501).json({"msg":"server error"})
    }
})

 app.post("/admin/card",async (req:Request,res:Response)=>{
    const {type,question,answer}:flash=req.body;
    try {
        const response=await prisma.card.create({
            data:{question,answer,type},
        })
      //  res.send("response")
        res.status(201).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"server error"})
    }

 })
app.get('/user',async(req:Request,res:Response)=>{
    try {
        const cards=await prisma.card.findMany();
       // res.send("response sent")
        res.status(201).json(cards);
    } catch (error) {
        console.log(error);
        res.status(501).json({"msg":"server error"})
    }
})
app.put("/admin/card/:id",async( req:Request,res:Response)=>{
    const {id}:any=req.params
    const {type ,question,answer}:flash=req.body;
    try {
        const result=await prisma.card.update({
            where:{
                id:Number(id)
            },data:{
              type,question,answer
            }
            
        }
    )
    res.status(200).send("editted")
    } catch (error) {
        console.log(error);
        res.status(501).json({"msg":"server error"})
    }
})
app.delete("/admin/card/:id",async(req:Request,res:Response)=>{
    const {id}=req.params
    try {
        await prisma.card.delete({
            where:{id:Number(id)}
        })
        res.status(201).send({"msg":"deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).send("server error");
    }
})
app.listen(3000,()=>{
    console.log("server is running")
})