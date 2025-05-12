const express = require("express");
const app = express();
const port = 3000;

// cartella public contenente gli asset statici
app.use(express.static('public'));

// * ARRAY CONTENENTE I POST
const posts = require("./posts");
// * ROTTA PRINCIPALE
app.get("/", (req, res)=>{
    res.send("Server del mio blog");
});
// * ROTTA /bacheca
app.get('/bacheca', (req, res) => {
  res.json({ posts });
});

// * AVVIO SERVER
app.listen(port, ()=>{
    console.log("il server è in ascolto sulla porta:" + port); 
});