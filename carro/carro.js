var Carro = /** @class */ (function () {
    function Carro(_marca, _anodefabricao, _velocidademaxima, _velocidadeatual) {
        this.marca = _marca;
        this.anodefabricacao = _anodefabricao;
        this.velocidademaxima = _velocidademaxima;
        this.velocidadeatual = _velocidadeatual;
    }
    Carro.prototype.acelerar = function () {
        if (this.velocidadeatual < this.velocidademaxima) {
            this.velocidadeatual++;
            console.log("A " + this.marca + "e do " + this.anodefabricacao + "e a " + this.velocidadeatual);
        }
        else {
            console.log("Ele esta na velocidade atingida");
        }
    };
    Carro.prototype.desacelerar = function () {
        if (this.velocidadeatual > 0) {
            this.velocidadeatual--;
            console.log("A " + this.marca + "e do " + this.anodefabricacao + "e a " + this.velocidadeatual);
        }
        else {
            console.log("O Carro esta Parado");
        }
    };
    return Carro;
}());
// mostrarmarcaanovelocidademaximaevelocidadeatual(marca:string,anodefabricacao:number,velocidademaxima:number,velocidadeatual:number){
var ferrari = new Carro("ferrari", 2020, 3, 1);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
