import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import {readFile} from 'fs/promises';

const app = express();
const port = process.env.PORT || 3000;
const json = JSON.parse(
    await readFile(
      new URL('./mecha23.json', import.meta.url)
    )
);

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended:true }));

app.get("/", (req,res) => {
    res.render("index.ejs")
});

app.post("/submit", (req,res) => {
    let id = parseInt(req.body.id);
    if( id > 2310000 && id < 2310181){
        let result = json.find( o => o.id === id )
        res.render("./index.ejs", { 
            id: result.id,
            name: result.name,
            merit: result.merit,
            email: result.email
        })
    }else{ 
        res.render("./index.ejs",{
            name: "ID Not Found"
        });
    }
});

app.listen(port, () => {
    console.log("Running on port " + port);
});

