const { request } = require("express");
const express=require("express")
const app=express()
app.use(express.json());
const knex=require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"Muskan@123",
        database:"my_db"
    }
});
knex.schema.hasTable("employee").then(function(exits){
    if(!exits){
        return knex.schema.createTable("employee",function(details){
            details.increments("id").primary();
            details.string("full_name",100);
            details.string("salary");
            details.string("phone_number",100)
        })
    }
    }).catch((err)=>{
        console.log(err)
    })
app.post("/create",(req,res)=>{
    knex("employee").insert({
        // id:req.body.id,
        full_name:req.body.full_name,
        salary:req.body.salary,
        phone_number:req.body.phone_number
    }).then(()=>{
        res.send("created")
    }).catch((err)=>{
        console.log(err)
    })
})

app.get("/employee",(req,res)=>{
    knex.select("*").from("employee").then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get("/employee/:id", (req,res) => {
    knex()
    .select("*")
    .from ("employee")
    .where("id",req.params.id)
        .then((iddata)=>{
            console.log("hurrey")
            res.send(iddata)
        }).catch((err)=>{
            console.log(err)
        })
})
app.put("/update/:id",(req,res)=>{
    knex.update({
        full_name:req.body.full_name,
        salary:req.body.salary,
        phone_number:req.body.phone_number
    })
    .table("employee").where("id",req.params.id)
    .then(()=>{
        res.send("updated")
    }).catch((err)=>{
        console.log(err)
    })
})
app.delete("/delete/:id",(req,res)=>{
    knex("employee")
    .where("id",req.params.id).del()
    .then(()=>{
        res.send("deleted")
    }).catch((err)=>{
        console.log(err)
    })
})
app.listen(8000,()=>{
    console.log("yepp")
})