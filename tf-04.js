// tf-04.js

// 1. Uso básico de funções
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log("Uso básico de função:", saudacao("Danielle"));

// 2. Função como valor em constante
const soma = function(a, b) {
    return a + b;
};
console.log("Função em constante:", soma(5, 7));

// 3. Função em objeto como método
const calculadora = {
    multiplicar: function(x, y) {
        return x * y;
    }
};
console.log("Função em objeto (método):", calculadora.multiplicar(3, 4));

// 4. Exemplo de callback
function processarUsuario(nome, callback) {
    console.log("Processando usuário:", nome);
    callback(nome);
}

function mostrarMensagem(nome) {
    console.log(`Callback executado: Bem-vindo(a), ${nome}!`);
}

processarUsuario("Danielle", mostrarMensagem);