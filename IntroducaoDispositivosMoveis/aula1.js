var number = 5;
var floatNumber = 6.9;
var name = "João 2";
var name2 = 'My name';
var canShow = false;

// Criar arrays
var array = [1, 2, 3, 4, 5];
var array2 = ["A", "B", "C"];
var array3 = [1, "B", 5.6, false];

var arrayMulti = [
    [1, 2],
    [3, 4, 3],
    [5, 6]
];


// Imprimindo variáveis
console.log("Hello 'world'");

console.log(number);
console.log('"Number" = ' + number);
console.log('Name', name);
console.log(number, floatNumber, name, canShow);

console.log(array);
console.log(array2);
console.log(array3);
console.log(arrayMulti);

console.log(array.length);
console.log(arrayMulti[0].length);

// Operações aritméticas
var n1 = 5;
var n2 = 10;
var r1 = n1 + n2;
var r2 = n2 - n1;
var r3 = n1 * n2;
var r4 = n2 / n1;
var r5 = n2 % n1; // Resto
var resultado = "10" - 5;

console.log(r1, r2, r3, r4, r5);
console.log("Resultado = " + resultado);

// Condições
var age = 15;
if (age == 15) {
    console.log("Idade é 15");
}

var id = "10";
// Com === verifica se a tipagem é igual e se os valores são iguais
if (id === 10) {
    console.log("Id é 10");
}

// Com !== vrifica se a tipagem é difernt e se os valores também são diferentes
if (id !== 10) {
    console.log("Idade é diferente de 10");
}

// Id maior ou igual a 10 E Id menor ou igual a 20 OU idade igual a 1
if (id >= 10 && id <= 20 || age === 1) {
    console.log("Id entre 10 e 20");
}

//
var myVar = false;
var potato; // undefined
var var2 = null;
var var3 = false;
var pudim = 0;
console.log(potato);
console.log(var2);
if (pudim && potato) {
    console.log("Verdade");
} else if (!var3) { // var3 === false
    console.log("Falso");
} else {
    console.log("Outro caso");
}

//
var name = "João";
var text = (name === "João") ? "João & Maria" : "Não tem João";

if (name === "João") {
    text = "João & Maria";
} else {
    text = "Não tem João";
}

console.log(text);

var n1 = 5;
var result = (n1 >= 10) ? 10 : 0;
console.log(result);

// Objeto
var person = {
    nome: "Maria",
    sexo: "feminino",
    idade: 20,
    endereco: {
        rua: "Rua Vinte e Quatro",
        numero: 123,
        referencias: ["Perto da antena", "Do lado da loja X"]
    },
    display: function ()  {
        console.log("Oi");
    }
};

person.display();

person.nome = "Maria da Silva Ferreira Cunha Alguma Coisa";

console.log(person.idade);
console.log(person.endereco.rua);
console.log(person);

var nome = person["nome"]; // person.nome
var propriedade = "endereco";
var rua = person[propriedade]["rua"]; // person.endereco.rua
console.log(nome + "\n " + rua);
console.log(person.endereco.referencias[1]);
console.log(person["endereco"].referencias[1]);

// Funções
// Função que não retorna um valor (procedure/procedimento)
function printMessage() {
    console.log("Minha mensagem");
}

// Função que retorna um valor
function calculate(n1, n2) {
    return n1 * n2;
}

printMessage();
var resultado = calculate(5, 10);
console.log(resultado);

// Criando funções como variáveis
var printMessage2 = function (message) {
    console.log("Texto: " + message);
};

var calculate2 = function (n1, n2) {
    printMessage2("olá, tudo bem?");
    var color = "azul";
    return n1 / n2;
};

console.log(calculate2(5, 10));

/* Cria uma função que recebe um valor (mensagem) como parâmetro,
    e uma função responsável por imprimir uma mensagem
*/
var print = function (value, printFunction, user) {
    printFunction(value);
    console.log(user);
    user.display();
}

print("Alohomora", printMessage2, person);

/*
    count++; // count = count + 1;
    count--; // count = count - 1;
    count += 5; // count = count + 5;
    count -= 10; // count = count - 10;
    count *= 100; // count = count * 100;
    count /= 5; // count = count / 5;
*/

var array = [1, 2, 3, 47, 90, -1];
var count = 0;
while(count <= 2) {
    console.log(count);
    count++; // count = count + 1;
}

var count2 = 0;
// Vai executar pelo menos uma vez se a condição de parada for false
do {
    console.log("Count2 = " + count2);
    count2++; // count = count + 1;
} while (count2 <= 2);

/*
var i = 0;
while (i < 4) {
    console.log("i = " + i);
    i++;
}
*/
for (var i = 0; i < 4; i++) {
    console.log("i = " + i);
}

console.log("For decrescente");
for (var i = 50; i >= 20; i -= 10) { // i = i - 10
    console.log("i = " + i);
}

var linha = 1;
// variavel++ -> primeiro usa o valor da variável e só depois faz o acrescimo
console.log("Linha = ", linha++);
console.log("Linha após = ", linha);

// ++variavel -> primeiro faz o acréscimo e só depois usa a variável
var coluna = 1;
console.log("Coluna = ", ++coluna);
console.log("Coluna após = ", coluna);