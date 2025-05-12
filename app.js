const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

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



app.get("/", (req, res)=>{
    res.send("Server del mio blog");
});

app.listen(port, ()=>{
    console.log("il server è in ascolto sulla porta:" + port); 
});