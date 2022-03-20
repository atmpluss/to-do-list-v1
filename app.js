const express = require("express");
const bodyParser = require("body-parser")
const {getDate, getDay} = require(__dirname + "/date.js")



const app = express();
app.set('view engine', 'ejs'); //ejs.co documentation
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

var items = ["Buy Food", "Make Food", "Eat Food"];
let WorkItems = [];

app.get("/", (req, res)=>{
    

    res.render('index', {kindOfTitle: getDate(), newItemLists:items});
    
})
app.post("/", (req, res)=>{
    console.log(req.body) // to see what we are getting back from the submit button
    let listName = req.body.list;
    if(listName === "Work"){
        WorkItems.push(req.body.newItem);
        res.redirect("/work");
    }else{
        items.push(req.body.newItem);
        res.redirect("/");
    }
    
})

app.get("/work", (req, res)=>{
    res.render("index", {kindOfTitle: "Work List", newItemLists:WorkItems})
})

app.post("/work", (req, res)=>{
    WorkItems.push(req.body.newItem);
    res.redirect("/work");
})

app.get("/about", (req, res)=>{
    res.render("about")
})

app.listen(3000, ()=>{  
    console.log("the server is working on port 3000");
});