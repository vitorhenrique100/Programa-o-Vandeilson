class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
    valueOf() {
        return this.nota;
    }
}

const aluno1 = new Aluno ("Renan", 5);
const aluno2 = new Aluno ("Roberto", 8);

const resultado = aluno1 + aluno2;

console.log("resultado da soma as notas: " + resultado);
