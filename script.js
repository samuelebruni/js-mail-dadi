// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//eseguo l'operazione che mi permette di ottenere i due numeri casuali
let playerPc = Math.floor((Math.random() * 7));
let playerUser = Math.floor((Math.random() * 7));


//stabilisco le condizioni per decretare l'esito della giocata
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



//Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//creo la lista delle persone autorizzate ad accedere

document.querySelector("button").addEventListener("click", function() {


const accessList = ['samueleskywalker@hotmail.com', 'davidekenobi@hotmail.com', 'andrearen@hotmail.com', 'diegopalpatine@hotmail.com'];

//metodo per pushare successivamente in Array
accessList.push('marcogrevious@hotmail.com');
console.log(accessList);

const userAccess = document.querySelector("input").value;
console.log(userAccess);

//creo le condizioni affinchè il portale risponda in modo positivo o negativo


    if ((accessList.includes(userAccess))){
        console.log("EMAIL CORRETTA");
        const trueElement = document.getElementById("true");
        trueElement.style.display = "block";
    } else {
        console.log("EMAIL NON CORRETTA");
        const trueElement = document.getElementById("false");
        trueElement.style.display = "block";
        document.querySelector('input').value = " ";
    }    
})
