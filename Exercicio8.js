let alturaCriança = 1.35;

let podeMontanhaRussa = false;
let podeRodaGigante = false;
let podeBateBate = false;

if(alturaCriança > 1.5){
    podeMontanhaRussa = true;
}

if(alturaCriança >= 1.2){
    podeRodaGigante = true;
}

if(alturaCriança >= 1.1){
    podeBateBate = true;
}

console.log("Pode brincar na Montanha Russa?" + (podeMontanhaRussa ? 'sim' : 'não'));
console.log("Pode brincar na Roda Gigante?" + (podeRodaGigante? 'sim' : 'não'));
console.log("Pode brincar no Bate Bate?" + (podeBateBate? 'sim' : 'não'));