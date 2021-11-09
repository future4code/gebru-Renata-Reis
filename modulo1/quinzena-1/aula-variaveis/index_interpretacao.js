// questão 1

let a = 10 // cria a variável a e atribui valor 10 a ela
let b = 10 // cria a variável b e atribui valor 10 a ela

console.log(b) //imprime o valor atribuído à variável b no console (10)

b = 5 // atribui novo valor à variável b
console.log(a, b) // imprime os valores atribuídos às variàveis a e b no console (10 e 5)

// questão 2
// SUPONDO QUE O QUE VEM ABAIXO É UM NOVO CÓDIGO


let a = 10 // cria a variável a e atribui o valor 10 a ela
let b = 20 // cria a variável b e atribui o valor 20 a ela
c = a // cria a varável c e atribui valor de alocado em a a ela (10)
b = c // atribui novo valor a b, que é o mesmo valor alocado em c (10)
a = b // atribui novo valor a a, que é o mesmo valor alocado em b (10)

console.log(a, b, c) // imprime os últimos valores atribuídos às variáveis a, b e c no console (10,10,10)


// questão 3

let p = prompt("Quantas horas você trabalha por dia?") //janela de pop-up com mensagem entre aspas e espaço para input do usuário. guarda input na variável p
let t = prompt("Quanto você recebe por dia?") //janela de pop-up com mensagem entre aspas e espaço para input do usuário. guarda input na variável t
alert('Você recebe ${t/p} por hora') // janela pops-up com mensagem entre aspas. no lugar de $(t/p) aparece o resultado do cálculo feito utilizando-se os valores armazenados nas variáveis p e t.
