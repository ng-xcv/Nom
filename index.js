const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//Utilisation du middleware body-parser our traiter les données en POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000;

let PRODUITS = [
   { produit: "pommes", quantite: 10, prix: 1.5 },
   { produit: "poires", quantite: 5, prix: 2.0 },
   { produit: "oranges", quantite: 8, prix: 1.0 },
   { produit: "pommes", quantite: 15, prix: 1.5 },
   { produit: "poires", quantite: 10, prix: 2.5 },
];

app.get("/", (req, res) => {
   res.send("Hello World");
});

// Récuperer un produit a partir du nom
app.get("/produits/:nom", (req, res) => {
   const nom = req.params.nom;

   const result = PRODUITS.filter((p) => p.produit === nom);

   res.json(result);
});

// Ajouter un nouveau produit
app.post("/produits", (req, res) => {
   // Récupération de la saisie de l'utilisateur
   const produit = req.body;

   console.log(`Contenu du body : ${JSON.stringify(req.body)}`);

   // Ajout du produit dans le tableau de produits
   PRODUITS.push(produit);

   res.send(PRODUITS);
});

app.listen(PORT, () => console.log(`\nListening on port ${PORT}...`));
