var année = 2020; // DEFINIR UNE ANNEE

var reponse;

function bisextile() {
    var bisextile = true;
    var nonbisextile = false;
    if (année % 4 == 0) {
        if (année % 100 == 0) {
            if (année % 400 == 0) {
                reponse = bisextile;
            } else {
                reponse = nonbisextile;
            }
        } else {
            reponse = bisextile;
        }
    } else {
        reponse = nonbisextile;
    }
    return reponse;
}

console.log(bisextile(année));