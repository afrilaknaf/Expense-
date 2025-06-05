let express = require("express")
let body=require("body-parser")
let app=express();
let port=2005;
let title="Expense Tracker"
let total =[]
app.use(body.urlencoded({extended:true}));
app.post("/login",(req,res)=>{
    let combine ={
        expense:req.body.tracker,
        value:req.body.values
    };
    total.push(combine);
    res.redirect("/login")
})
app.get("/login",(req,res)=>{
    res.render("index.ejs",{title,total})
})
app.get("/",(req,res)=>{
    res.send(`<h1>Welcome to the Home Page</h1>
        <button><a href="/login"</a>Login</button>`)
});
app.post("/remove",(req,res)=>{
    total.splice(0,1)
    res.redirect("/login")
})
app.listen(port,console.log("Server is Working",port))
