// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


var listaUno = ['a', 'b','c'];
var listaDue = [1, 2, 3, 4];

var lunghezzaLista; 

function unisciArray(listaUno, listaDue){

    var nuovaLista = [];
    if (listaUno.length == listaDue.length) {
        var lunghezzaLista = listaUno.length;  
        
        for (var i = 0; i < lunghezzaLista; i++){
            nuovaLista.push(listaUno[i]);
            nuovaLista.push(listaDue[i]);
        }
    } else {
        // console.log('I due array non sono uguali');
        return 'I due array non sono uguali';
    }
    return nuovaLista;
}

// unisciArray(listaUno, listaDue);
console.log(unisciArray(listaUno, listaDue)); 





