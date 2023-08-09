const express = require("express")
const bodyParser = require("body-parser");
const getDate = require("./date");
const date = require(__dirname+"/date.js")

const app = express();
let items=["Eat","Sleep","Repeat"];
let workitems=[]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    let day = date.getDate();
    res.render('list', { listTitle: day ,newListItems:items})
})

app.get("/work",function(req,res){
    res.render('list', { listTitle: "Work" ,newListItems:workitems})
})

app.get("/about",function(req,res){
    res.render("about");
})

app.post("/",function(req,res){
    let item = req.body.newItem;
    if(req.body.list==="Work"){
        workitems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }
})

app.listen(3000, function () {
    console.log("Server is listening to 3000");
})

