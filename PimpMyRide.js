let trip = "Perdita 8 10 8"
let trips= [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

function parseTrip(trip){
    let array = trip.split(" ");
    for (let i = 1; i < array.length; i++){
    array[i] = parseInt(array[i]);
    }
  return array;
}

function parseTrips(trips){
    let voyages = [];
    for (let i = 0; i < trips.length; i++){
        voyages[i] = parseTrip(trips[i])
    }
    return voyages;
}
console.log(parseTrips(trips))

let voyages = parseTrips(trips)

function getTripsPrice(voyages){
    let prixTotal = 0 
    for (let i = 0 ; i < voyages.length ; i++)  {
       prixTotal += +voyages[i][3]
    }
    return prixTotal
}
console.log(getTripsPrice(voyages))

function checkCompatibility(tripA,tripB){
    let arriveeA = tripA[1]+tripA[2]
    if (arriveeA < tripB[1]) {
        return true
    } else return false
}

console.log(checkCompatibility(voyages[0],voyages[2]))

function findCompatibilities(voyages) {
    let possibilities = [];
    for (let i=0; i < voyages.length; i++) {
        for (let j=0; j < voyages.length; j++) {
            if (i===j) {
                possibilities.push(voyages[i]);
            } else if (checkCompatibility(voyages[i], voyages[j])) {
                possibilities.push([voyages[i], voyages[j]]);
            } 
        }
     } return possibilities;
}

let possibilities = findCompatibilities(voyages)

console.log(possibilities)

function findBestPrice(possibilities) {
    let bestPrice = 0;
    for (let i = 0; i < possibilities.length; i++) {
        if (getTripsPrice(possibilities[i]) > bestPrice ) {
            bestPrice = getTripsPrice(possibilities[i])
        }      
    }
    return bestPrice;
}

let bestPrice = findBestPrice(possibilities);

console.log(bestPrice)

// function inArray(array1, array2) {
//     let resultat = [];
//     let r = [];
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (a2[j].includes(array1[i])) {
//                 resultat.push(array2[j]);
//                 break;
//             }
//         }
//     }
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < resultat.length; j++) {
//             if (resultat[j].includes(array1[i])) {
//                 r.push(array1[i]);
//                 break;
//             }
//         }
//     }
//     return r;
// }

function trierSousChaines(a1, a2) {
    let resultat = [];
    let r = [];
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            if (a2[j].includes(a1[i])) {
                resultat.push(a2[j]);
                break;
            }
        }
    }
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < resultat.length; j++) {
            if (resultat[j].includes(a1[i])) {
                r.push(a1[i]);
                break;
            }
        }
    }
    return r;
}