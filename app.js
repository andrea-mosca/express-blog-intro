const express = require("express");
const app = express();
const port = 3000;

// cartella public contenente gli asset statici
app.use(express.static('public'));

// * ARRAY CONTENENTE I POST
const posts = [
  {
    titolo: "post 1",
    contenuto: "ciambellone",
    immagine: "/images/ciambellone.jpeg",
    tags: ["dolce", "colazione"]
  },
  {
    titolo: "post 2",
    contenuto: "Cracker alla barbabietola",
    immagine: "/images/cracker-barbabietola.jpeg",
    tags: ["salato", "merenda", "barbabietola", "snack"]
  },
  {
    titolo: "post 3",
    contenuto: "pane fritto dolce",
    immagine: "/images/pane-fritto-dolce.jpeg",
    tags: ["dolce", "fritto", "pane", "dessert"]
  },
  {
    titolo: "post 4",
    contenuto: "pasta alla barbabietola",
    immagine: "/images/pasta-barbabietola.jpeg",
    tags: ["primo", "barbabietola", "salato"]
  },
  {
    titolo: "post 5",
    contenuto: "torta paesana",
    immagine: "/images/torta-paesana.jpeg",
    tags: ["dolce", "dessert"]
  }
];
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