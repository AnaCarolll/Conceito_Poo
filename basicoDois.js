//Aplicando o conceito de Herança
 
class Moto{
    constructor(ano,modelo,cor){
        this.ano = ano;
        this.modelo = modelo;
        this.cor = cor
    }
    mostrarVeiculo(){
        console.log(`Ano: ${this.ano}, Modelo: ${this.modelo}, Cor: ${this.cor}`)
    }
}

class NovaVersao extends Moto {
    constructor(ano, modelo, cor, voar){
        super(ano, modelo, cor)
        this.voar = voar
    }

    mostrarNovaMoto(){
        super.mostrarVeiculo();
        console.log(`Voar: ${this.voar}`);
    }

}

    const motoUm = new Moto(2024,"Fz-15","Vermelha Envernizada");
    const motoDois = new Moto( 2019, "Lander", "Vermelha com branco");
    const motoTres = new NovaVersao(2023, "Mt-09", "Preta", true)

   console.log("Moto 1:");
   motoUm.mostrarVeiculo()

   console.log("Moto 2:");
   motoDois.mostrarVeiculo()

   console.log("Moto 3:")
   motoTres.mostrarNovaMoto()   