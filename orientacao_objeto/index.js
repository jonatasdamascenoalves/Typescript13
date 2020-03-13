// Inicio da definicao da classe
var Cumprimento = /** @class */ (function () {
    function Cumprimento(_nome, _idade) {
        if (_nome === void 0) { _nome = ""; }
        if (_idade === void 0) { _idade = ""; }
        this.nome = _nome;
        this.idade = _idade;
    }
    Cumprimento.prototype.mostrarNomeIdade = function (idade, nome) {
        return "A pessoa " + nome + "tem " + idade + "anos";
    };
    return Cumprimento;
}());
// fim da definicao da classe
// Invocando a funcao
var resposta = new Cumprimento("", "");
console.log(resposta.mostrarNomeIdade("25 ", "Daniel "));
