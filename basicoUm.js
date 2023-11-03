class Moto{
    constructor(ano,modelo,cor){
        this.ano = ano;
        this.modelo = modelo;
        this.cor = cor
    }
    mostrarInformações(){
        console.log(`ano: ${this.ano}, modelo: ${this.modelo}, cor: ${this.cor}` )
    }

}
const moto1 = new Moto(2024,"Fz-15","Vermelha Envernizada")
const moto2 = new Moto(2019,"Lande 250","Vermelha com Branco")


console.log("Moto 1: ");
moto1.mostrarInformações();

console.log("Moto 2:");
moto2.mostrarInformações()