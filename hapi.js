// const express=require("express")
// var app=express()
// app.use(express.json());
const hapi=require("hapi")
const app=new hapi.server({
    port:9000,
    host:"localhost"
})


const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user :'root',
      password : 'Muskan@123',
      database : 'test'
    }
});

knex.schema.hasTable('test_ser').then((exists)=> {
  if (!exists) {
    return knex.schema.createTable('test_ser',(t)=> {
      t.increments('id').primary();
      t.string('first_name', 100);
      t.string('last_name', 100);
      t.string('hobby',100);
      t.string('age',100)
    });
  }
});

app.route([
    {
        method:"POST",
        path:"/create",
        handler:(req,res)=>{
            // return req.body.first_name
            knex('users').insert({
                first_nresturame: req.body.first_name,
                last_name: req.body.last_name,
                hobby: req.body.hobby,
                age:req.body.age
            }).then(()=>{
                console.log(data)
                return "get"
              }).catch((err)=>{
                console.log(err)
              })
        }
    }
]
)
// app.post("/create",(req,res) => {
//   knex('users').insert({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     bio: req.body.bio
//   }).then(()=>{
//     console.log(data)
//     res.send("get")
//   }).catch((err)=>{
//     console.log(err)
//   })
// })

// app.get("/users", (req,res) => {
//   knex.select("*").from ("users").then((data)=>{
//     knex().select("*").from ("users").where("id",req.params.id)
//       .then((data)=>{
//           console.log("hurrey")
//           res.send(data)
//       })
// }).catch((err)=>{
//     console.log(err)
// })
// })


// app.get("/users/:id", (req,res) => {
//   knex()
//   .select("*")
//   .from ("users")
//   .where("id",req.params.id)
//     .then((data)=>{
//         console.log("hurrey")
//         res.send(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })


// //for update

// app.put("/update/:id",(req,res)=>{
//   knex.update({
//     "first_name":req.body.first_name,
//     "last_name": req.body.last_name,
//     "bio":req.body.bio
//   })
//     .table("users").where("id",req.params.id)
//         .then(()=>{
//           res.send("hurrey")
//         })
//         .catch((err)=>{
//           console.log(err)
//         })
// })

// //for delete

// app.delete("/delete/:id",(req,res)=>{
//   knex('users')
//     .where({"id":req.params.id}).del()
//     .then(()=>{
//       res.send("deleted")
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
// })

// app.listen(9000,()=>{
//   console.log("welcome to express")

// })
app.start()
console.log("started")