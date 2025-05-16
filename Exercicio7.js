let pedido = 3;
let nomeCombo = "";
let preco = 0;

switch (pedido){
    case 1:
        nomeCombo = "batata + Suco";
        preco = 12;
    case 2:
        nomeCombo = "Hamburguer";
        preco = 15;
    case 3:
        nomeCombo = "Pizza Broto"
        preco = 20
        break;
    default:
        console.log("opção invalida");
        break
}
if(nomeCombo != ""){
console.log("Combo escolhido:", nomeCombo);
console.log("Preço: R$", preco)
}