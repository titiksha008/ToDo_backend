import express frome 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("DB Connected"))
.catch(()=>console.log(err))

const Todo=mongoose.model("Todo", new mongoose.Schema({
    text:String
}));

app.get('/todos', async(req,res)=>{
    res.json(await Todo.find());
})

app.post('todos', async(req,res)=>{
    const todo=await todo.create({
        text:req.body.text;
    })
    res.json(todo);
})

app.delete('/todos/:id',async (req,res)=>{
    await Todo.findByIdAndDelete(req.params.id)
    res.json({
        message: "Deleted"
    })
})

app.listen(process.env.PORT()=>
console.log("Server is running on port", process.ENV.PORT);
)