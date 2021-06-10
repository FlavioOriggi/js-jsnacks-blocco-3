// Scrivi una funzione capitalize che prenda una stringa e la trasformi
// con l'iniziale maiuscola e tutto il resto in minuscolo

var parola = prompt('inserisci una parola');


function capitalize(stringa) {    
    var lettera = stringa[0];
    lettera = lettera.toUpperCase()
    stringa = stringa.substring(1).toLowerCase();
    stringa = lettera + stringa;
    return stringa;
}

console.log(capitalize(parola));