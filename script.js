
//EXERCÍCIO - ESCREVENDO STRINGS
//console.log('EXERCÍCIO - ESCREVENDO STRINGS');

//const nome =prompt('Qual é o seu nome?')
//const cor =prompt('Qual é a sua cor favorita?')

//console.log('A cor favorita de', nome, 'é', cor);

//concatenação
//let mensagem1 = 'A cor favorita de ' + nome + ' é ' + cor
//console.log(mensagem1);

//template string (preferencialmente para frases maiores)
//let mensagem2 = `A cor favorita de ${nome} é ${cor}`
//console.log(mensagem2);

//EXERCÍCIO - ALTERANDO A EXIBIÇÃO DE STRINGS
//Podemos escrever dessa forma, com template string, que é mais prática:
//const citação = prompt('Qual é a sua citação favorita?')
//mensagem1 = `${mensagem1} e a sua citação favorita é ${citação}`
//console.log(mensagem1);

//Ou dessa forma, concatenando:
/*mensagem1 = mensagem1 + ' e a sua citação favorita é\ '+ citação + '\ '
console.log(mensagem1);*/

//Concatenação
/*mensagem2 = 'Nome: ' + nome + '\nCor favorita: ' + cor
console.log(mensagem2);*/

//Template String
/*mensagem2 = `Nome: ${nome}
Cor favorita: ${cor}`
console.log(mensagem2);

//EXERCÍCIO - MANIPULANDO A STRING
//Exemplos de Método e Propriedade:
//Método => toUpperCase()
//Propriedade => length

console.log(`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres`);

//console.log(`O nome possui a letra A: ${nome.includes('A')}`);

console.log(`O nome possui a letra A: ${nome.includes('A')}`); //Nesse caso, nomes que contenham a letra A dará false pq ele diferencia maiúscula de minúscula.

console.log('Ana'.length);
console.log('Ana'.length);/*

// EXERCÍCIO DE FIXAÇÃO - 001

// Parte 1

/*const nomeUsuario = prompt('Qual é o seu nome?')
const emailUsuario = prompt('Digite seu e-mail')
const imprimirM1 = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}!`

// Parte 2 

const imprimirM2 = `\nSeu nome possui: ${nomeUsuario.length} letras!`

// Parte 3

const imprimirM3 = `\nSe substituirmos todos os R por L no seu nome ele ficará: ${nomeUsuario.replaceAll('R','L')}`
const imprimirM4 = `\nSeu e-mail possui '@'?: ${emailUsuario.includes('@')}`

console.log(imprimirM1, imprimirM2, imprimirM3, imprimirM4)

//EXEMPLO ADICIONAL

const fraseExemplo = `O rato roeu a roupa do rei de roma`

const trocandoLetras = `\nSe trocarmos o r pelo l na seguinte frase: 'O rato roeu a roupa do rei de roma, ela ficará: ${fraseExemplo.replaceAll('r', 'l')}`
console.log(trocandoLetras);*/

// TAMBÉM EXISTE ESSA OUTRA FORMA DE FAZER O MESMO EXERCÍCIO:

const nome = prompt('Qual o seu nome?')
const email = prompt('Qual o seu e-mail?')

mensagem1 = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo, ${nome}!`
console.log(mensagem1);

console.log(`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres`)

const novoNome = nome.replaceAll('L', 'D');
console.log("Substituir 'L' por 'D'=", novoNome);
console.log(`O e-mail possui @: ${email.includes('@')}`);