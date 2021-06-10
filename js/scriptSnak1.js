
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// inserire due parole.
var parolaUno = prompt('inserisci una parola');
var parolaDue = prompt('inserisci un\'altra parola');


var risultato = prova(parolaUno, parolaDue);
console.log(risultato);

function prova(x,y){
    // Verificare tramite una funzione che le due parole abbiano la stessa lunghezza     
    var ris;
    if (x.length == y.length){
        ris = 'sono uguali';   // Se hanno la stessa lunghezza, stamparle entrambe      
    } else if (x.length > y.length) {
        ris = x;        //  oppure stampare la più lunga delle due.
    }  else{
        ris = y;                
    }
    return ris;
}
    

