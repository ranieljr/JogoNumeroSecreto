alert('Boas vindas ao jogo do número secreto');
let numeromaximo = 5000;
let numerosecreto = parseInt(Math.random()*numeromaximo+1);
console.log(numerosecreto);
let chute;
let tentativas = 1;

//Enquanto chute não for igual ao n.s.
while (chute != numerosecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeromaximo}`);
    // se  chute for igual ao número secreto
    if(chute == numerosecreto) {
        break;
       
    }  else {
        // IF = SE
        if (chute > numerosecreto) {
            alert(`O numero secreto e menor que ${chute}`);
        // ELSE = OU
        } else {
            alert(`O numero secreto e maior que ${chute}`);
        }
        tentativas++;
    }
}
let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Voçê acertou o número secreto ${numerosecreto}, Parabens!! com ${tentativas} ${palavratentativa}`);