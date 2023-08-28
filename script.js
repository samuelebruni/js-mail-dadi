// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


let playerPc = Math.floor((Math.random() * 7));
let playerUser = Math.floor((Math.random() * 7));

if (playerPc > playerUser){
    console.log("Il tuo numero è il:", playerUser);
    console.log("Il numero del tuo avversario è il:", playerPc);
    console.log("il tuo avversario ha avuto la meglio, HAI PERSO!");
} else if (playerPc < playerUser){
    console.log("Il tuo numero è il:", playerUser);
    console.log("Il numero del tuo avversario è il:", playerPc);
    console.log("COMPLIMENTI, HAI VINTO!");
} else {
    console.log("Il tuo numero è il:", playerUser);
    console.log("Il numero del tuo avversario è il:", playerPc);
    console.log("Si tratta chiaramente di un PAREGGIO!");
}

