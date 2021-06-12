const express=require("express")
var app=express()
app.use(express.json());

const knex=require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"Muskan@123",
        database:"details"
    }
});
knex.schema.hasTable("login").then((exits)=>{
  if(!exits){
      return knex.schema.createTable("login",(t)=>{
          t.increments("id").primary()
          t.string("full_name",100)
          t.string("password",100)
          t.string("password2",100)
      })
  }
})

app.post("/create",(req,res)=>{
  knex("login").insert({
      "full_name":req.body.full_name,
      "password":req.body.password,
      "password2":req.body.password2
  }).then(()=>{
  res.send("created")
  })
})
app.get("/login",(req,res)=>{
  knex.select("*").from("login").then((data)=>{
      res.send(data)
      var name=data
      console.log(name)
  }).catch((err)=>{
      console.log(err)
  })
})
app.listen(4000,()=>{
  console.log("hello in the world of coding")
})