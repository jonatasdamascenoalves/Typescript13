class Carro {
    marca: string;
    anodefabricacao: number;
    velocidademaxima: number;
    velocidadeatual: number;
    constructor(_marca: string, _anodefabricao: number, _velocidademaxima: number, _velocidadeatual: number) {
        this.marca = _marca
        this.anodefabricacao = _anodefabricao
        this.velocidademaxima = _velocidademaxima
        this.velocidadeatual = _velocidadeatual
    }
    acelerar() {
        if (this.velocidadeatual < this.velocidademaxima) {
            this.velocidadeatual++
            console.log(`A ${this.marca}e do ${this.anodefabricacao}e a ${this.velocidadeatual}`)
        }
        else {
            console.log(`Ele esta na velocidade atingida`)
        }


    }
    desacelerar() {
        if (this.velocidadeatual > 0) {
            this.velocidadeatual--
            console.log(`A ${this.marca}e do ${this.anodefabricacao}e a ${this.velocidadeatual}`)
        }
        else {
            console.log(`O Carro esta Parado`)
        }
    }
}
    // mostrarmarcaanovelocidademaximaevelocidadeatual(marca:string,anodefabricacao:number,velocidademaxima:number,velocidadeatual:number){
        let ferrari= new Carro("ferrari",2020,3,1)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()