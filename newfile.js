const fs=require("fs")
// const { resolve } = require("path")
// fs.writeFileSync("my_bio.txt","my name is muskan ")
// const name=fs.readFileSync("my_bio.txt","utf-8")
// console.log(name)
// fs.readFile("my_bio.txt",(err,data)=>{
//     console.log(data.toString())
// })

const promiseobj=new Promise((resolve,reject)=>{
    const name2=fs.readFileSync("my_bo.txt","utf-8")
    resolve(name2)
    reject("reject")
}).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})