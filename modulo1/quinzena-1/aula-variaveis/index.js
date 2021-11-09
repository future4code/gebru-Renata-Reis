let nome
let idade

console.log(typeof nome) 
console.log(typeof idade)

/* o tipo undefined foi retornado porque as variáveis estão vazias, 
sem valores atribuídos. Sem valores, sem tipo de valores.
*/

nome = prompt("Qual o seu primeiro nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome) 
console.log(typeof idade)

/* o tipo string foi retornado pois tudo que é input do usuário é entendido como string, 
isto é, uma sequência de caracteres que pode conter espaços e números e é entendida como 
texto pelo interpretador
*/

console.log("Olá", nome, "você tem", idade, "anos.")
