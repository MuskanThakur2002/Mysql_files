const express=require("express")
const app=express()
app.use(express.json())
require('dotenv').config()

const knex=require("knex")({
    client:process.env.client,
    connection:{
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    }
})

knex.schema.hasTable("phone_t").then((exits)=>{
    if(!exits){ 
        return knex.schema.createTable("phone_t",(t)=>{
            t.increments("id").primary()
            t.string("phone_name",100),
            t.string("price",100),
            t.string("model",100)
        })
    }
})

app.post(("/create"),(req,res)=>{
    knex("phone_t").insert({
        "phone_name":req.body.phone_name,
        "price":req.body.price,
        "model":req.body.model
    }).then(()=>{
        res.send("created")
    }).catch((err)=>{
        res.send(err)
    })
})

app.get("/phone_t",(req,res)=>{
    knex.select("*").from("phone_t").then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

app.get("/phone_t/:id",(req,res)=>{
knex()
.select("*")
.from("phone_t")
.where("id",req.params.id)
.then((data1)=>{
    res.send(data1)
}).catch((err)=>{
    res.send(err)
})
})

app.put("/update/:id",(req,res)=>{
    knex.update({
        "phone_name":req.body.phone_name,
        "price":req.body.price,
        "model":req.body.model
    }).table("phone_t").where("id",req.params.id)
    .then(()=>{
        res.send("updated")
    }).catch((err)=>{
        res.send(err)
    })
})

app.delete("/delete/:id",(req,res)=>{
    console.log(req.params)
    knex("phone_t")
    .where("id",req.params.id).del()
    .then(()=>{
    res.send("deleted")
}).catch((err)=>{
    res.send(err)
})
})

app.listen(7000,()=>{
    console.log("I am here")
})