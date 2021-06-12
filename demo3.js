const express=require("express")
const app=express()
app.use(express.json())
const knex=require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"Muskan@123",
        database:"company"
    }
})
knex.schema.hasTable("company_t").then((exits)=>{
    if(!exits){
        return knex.schema.createTable("company_t",(t)=>{
            t.increments("id").primary()
            t.string("company_name",100),
            t.string("profit",100)
            t.string("works",100)
        })
    }
})
app.post("/create",(req,res)=>{
    knex("company_t").insert({
        company_name:req.body.company_name,
        profit:req.body.profit,
        works:req.body.works
    }).then(()=>{
        res.send("created")
    }).catch((err)=>{
        console.log(err)
    })
})
app.get("/company_t",(err,res)=>{
    knex.select("*").from("company_t").then((data)=>{
        res.send(data)
}).catch((err)=>{
        console.log(err)
    })
})
app.get("/company_t/:id",(req,res)=>{
    knex()
    .select("*")
    .from("company_t")
    .where("id",req.params.id)
    .then((data1)=>{
        res.send(data1)
    }).catch((err)=>{
        console.log(err)
    })
})

app.put("/update/:id",(req,res)=>{
    knex.update({
        company_name:req.body.company_name,
        profit:req.body.profit,
        works:req.body.works
    })
    .table("company_t").where("id",req.params.id)
    .then(()=>{
        res.send("updated")
    }).catch((err)=>{
        console.log(err)
    })
})

app.delete("/delete/:id",(req,res)=>{
    knex("company_t")
    .where("id",req.params.id).del()
    .then(()=>{
        res.send("delete")
    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log("hello welcome")
})