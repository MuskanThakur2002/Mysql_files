const express=require("express")
var app=express()
app.use(express.json());

const knex=require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"Muskan@123",
        database:"stud_det"
    }
});

knex.schema.hasTable("students").then((exits)=>{
    if(!exits){
        return knex.schema.createTable("students",(t)=>{
            t.increments("id").primary()
            t.string("name",100)
            t.string("class",100)
            t.string("subject",100)
        })
    }
})

app.post("/create",(req,res)=>{
    knex("students").insert({
        "name":req.body.name,
        "class":req.body.class,
        "subject":req.body.subject
    }).then(()=>{
    res.send("created")
    })
})

app.get("/students",(req,res)=>{
    knex.select("*").from("students").then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get("/students/:id",(req,res)=>{
    knex()
    .select("*")
    .from("students")
    .where("id",req.params.id)
    .then((tddata)=>{
        res.send(tddata)
    }).catch((err)=>{
        console.log(err)
    })
})

app.put("/update/:id",(req,res)=>{
    knex.update({
        "name":req.body.name,
        "class":req.body.class,
        "subject":req.body.subject
    })
    .table("students").where("id",req.params.id)
    .then(()=>{
        res.send("hurrey")
    }).catch((err)=>{
        res.send(err)
    })
})

app.delete("/delete/:id",(req,res)=>{
    knex("students")
    .where("id",req.params.id).del()
    .then(()=>{
        res.send("deleted")
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.listen(6000,()=>{
    console.log("hello in the world of coding")
})