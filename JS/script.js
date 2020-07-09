// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// Creo array vuota per memorizzare i numeri creati dalla CPU
arr = [];
for (var i = 1; arr.length != 5; i++) {
  var cpuNum = randomIntInclusiveF(1, 100);
  if (inArray(arr, cpuNum) != true) {
    arr.push(cpuNum);
  }
}

// Stampo un'alert per permettere all'utente di memorizzarli
alert("Numbers to remeber:\n" + arr.toString());
console.log("DO NOT FORGET THEM!");

// Dopo 30sec/3sec chiedo all'utente di reinserire i numeri e stampo il risultato
setTimeout(function () {
  var correct = [];
  for (var i = 0; i < 5; i++) {
    var userNum = parseInt(prompt("Re-inserire i numeri"));
    if (arr.includes(userNum)) {
      correct.push(userNum);
    } }
  console.log("Erano " + arr);
  console.log("Ne hai beccate " + (correct.length) + "/5" + " e sono " + correct);
}, 3000);


// funzione alternatica a includes
function inArray (array, elemento) {
  var i = 0;
  var trovato = false;
  // questo ciclo si deve interompere se raggiungo la lunghezza dell'array oppure se trovo coorispondenza
  while (i < array.length && trovato == false) {
    if(array[i] == elemento) {
      trovato = true;
    }
    i++
  }
  return trovato;
}

// Random num
function randomIntInclusiveF(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
