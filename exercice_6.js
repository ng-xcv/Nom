const fs = require("fs");

// ChiffreAffaire = {
//    pomme: 37.5,
//    poires: 27.5,
//    oranges: 8,
// };
// [
//    { produit: "pommes", quantite: 10, prix: 1.5 },
//    { produit: "poires", quantite: 5, prix: 2.0 },
//    { produit: "oranges", quantite: 8, prix: 1.0 },
//    { produit: "pommes", quantite: 15, prix: 1.5 },
//    { produit: "poires", quantite: 10, prix: 2.5 },
// ];

// Lecture du fichier donnees.json
fs.readFile("donnees.json", "utf8", (err, data) => {
   if (err) throw err;
   const ventes = JSON.parse(data);

   // Calcul du chiffre d'affaires total pour chaque produit
   const chiffresAffaires = {};
   ventes.forEach(({ produit, quantite, prix }) => {
      if (!chiffresAffaires[produit]) {
         chiffresAffaires[produit] = quantite * prix;
      } else {
         chiffresAffaires[produit] += quantite * prix;
      }
   });

   // Écriture des résultats dans le fichier resultats.json
   const resultats = [];
   Object.entries(chiffresAffaires).forEach(([produit, chiffreAffaires]) => {
      resultats.push({ produit, chiffreAffaires });
   });
   fs.writeFile("resultats.json", JSON.stringify(resultats), (err) => {
      if (err) throw err;
      console.log("Le fichier resultats.json a été créé avec succès!");
   });
});
