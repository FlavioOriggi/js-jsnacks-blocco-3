// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


var items = ['filippo', 'luca', 'mattia', 'anna', 'sofia', 'marco'];

var a = parseInt(prompt('inserire un numero minimo 1 massimo '  + items.length));
var b = parseInt(prompt('inserire un numero masssimo ' + items.length));


console.log(getRangeArr(items, a, b)); 
function getRangeArr(array, min, max){
    var newItems = [];
    for(var i = min - 1; i < max; i++ ){
        newItems.push(array[i]);
    }

    return newItems;

}



