let nivel = 38;

console.log("Exercicio 8");
if(nivel >= 50){
    console.log("Você pode atacar os chefões, entrar em eventos especiais e participar de combates normais");
}else if(nivel >= 40) {
    console.log("Você pode entrar em eventos especiais e participar de combates normais");
}else if(nivel >= 20){
    console.log("Você pode parcitipar de combates normais");
}else{
    console.log("Você ainda está começando, jogue em modos iniciais");
}