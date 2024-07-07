import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import {readFile} from 'fs/promises';

const app = express();
const port = 3000;
const json = JSON.parse(
    await readFile(
      new URL('./mecha23.json', import.meta.url)
    )
);

app.get("/", (req,res) => {
    res.render("index.ejs", { 
        data 
    })
});

app.listen(port, () => {
    console.log("Running on port " + port);
} )