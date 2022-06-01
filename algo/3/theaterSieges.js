/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice 
où chaque sous-tableau liste les positions des sieges d'une rangée.

exemple :

[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/

/* 
1- je crée mon tableau colonnes, je le boucle pour qu'il s'incrémente de  à 26
2- idem pour le tableau rangées
3- une boucle qui s'incrémente de i+1 et de j+1 à chaque tour et là, c'est le drame ... 
    
*/


function theaterSieges() {
  const columnArray = [];
  for (let i = 0; i <= 26; i++) {
      columnArray.push(i);
  }
  console.log(columnArray);

  const lineArray = [];
  for (let j = 0; j <= 100; j++) {
      lineArray.push(j);
  }
  console.log(lineArray);

}

console.log(theaterSieges());


module.exports = theaterSieges;
