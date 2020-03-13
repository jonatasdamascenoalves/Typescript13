// Inicio da definicao da classe
class Cumprimento{
    nome:string;
    idade: string;
    constructor(_nome:string ="",_idade:string=""){
        this.nome = _nome;
        this.idade = _idade;
    }
    mostrarNomeIdade(idade:string,nome:string){
        return`A pessoa ${nome}tem ${idade}anos`
    }
}
// fim da definicao da classe
// Invocando a funcao
let resposta = new Cumprimento("","")
console.log(resposta.mostrarNomeIdade("25 ","Daniel "))
