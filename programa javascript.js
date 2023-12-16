function tipagemDeVariavel(){
    camelCase = "estadias";
    let camelCase1 = "na";
    let camelCase2 = " venesuela";
    let camelCase3 = "são desconfortaveis";
    
    console.log(camelCase,camelCase1,camelCase2,camelCase3)
    const imt = "não muda";
    
    const grupamento = {
        camelCase:'estadias',
        camelCase1:'na',
        camelCase2:'venesuela',
        camelCase3:'são desconfortaveis',
    
    }
    console.log(grupamento)
} 
function funçõesDeAlteração(){
    let divisão = 5
    let fort = 1
    divisão += fort
    
    function aprendendoAMesma(divisor,dividendo){
    
        divisão = dividendo / divisor;
    
    };
    
    aprendendoAMesma(2,15)
    console.log(divisão);
    
}
function comparadoresDeIgualdade(){
    
        console.log(1 == 1) //comparações de == são bastate amplas
        console.log('1' == 1)//e tambem são baste imprecizas
        console.log(1 === 1)// comparações de === são bastante precizas
        console.log('1'=== 1)// e tambem dão resultados muito masi esperados que a de ==
}
function confirmadoresBoleanos_funçãoTernaria(){
        const angulação = 150;
        let tipagem  =  angulação > 90 ? 'obituzangulo' : 'acutangulo';
        console.log( tipagem)
}   
function aprederVerificadoresTernarios () {
    const PSG = 200
    let posti = PSG > 100 ? 'classificado' : 'não classificado';
    console.log(posti);
}
function operadoresLogicosTeste () {
const bola = true;

const dePingpong = true;
 
let possoJogarPingpong = bola && dePingpong ? 'posso jogar' : 'não posso jogar';

console.log(possoJogarPingpong);

const sanduicheDeAtum = [false,'sanduiche de atum'];

const sanduicheDePeitoDePerú = [true, 'sanduiche de peito de perú']

let sãoSanduiches = sanduicheDeAtum[0] || sanduicheDePeitoDePerú[0] ? 'pelomenos um deles é sanduiche' : 'nem um dele é sanduiche';

console.log(sãoSanduiches);

let eleÉsanduiche = !sanduicheDePeitoDePerú[0] ? 'ele é' : 'ele não é';

console.log('depois da verificação o dito' + ' ' + sanduicheDePeitoDePerú[1] + '' + eleÉsanduiche + ' ' + 'um sanduiche legitimo' )


}
function comparaçãoComNãoBoleanos(){
    // comparadores não boleanos podem retornar por padrão um resultado expessifico, na falta do resultado padrão entra o segundo resultado
    let exs;
    const respostaPadrão = 'banana';
    const resopstaAlternativa = 'laranja';
    
    let resposta = respostaPadrão || resopstaAlternativa;
    console.log(resposta)

}
function usando_If_E_Else(){
    let numeros = 31
    if (numeros <= 10 && numeros > 0 ) {
        console.log('está proximo de 0')
        
    }else if (numeros > 10 && numeros <= 30){
        console.log('está longe de 0')
    }else if (numeros > 30 && numeros <= 50){
        console.log('está muito longe de 0')

    }
}
function testandoSwitch (){
    
    // serve para fazer sistema de login e verificação de diversas coisa
    let nome = 'marcelo';

    switch (nome){
        case 'renato': 
        console.log('essa pessoa está resgistrada pos1');
        break;
        
        case 'marcelo':
        console.log('essa pessoa está resgistrada pos2');
        break;

        case 'renan' :
        console.log('essa pessoa está resgistrada pos3');
        break;

        case 'mauricio': 
        console.log('essa pessoa está resgistrada pos3');
        break;
    }

}
function testandoVariaçoesDeLoop () {
// loop for verifica variavel interna depois execulta
// "variavel interna" variavel que está dentro das condiçoes de loop for "não cabe em todos os loops" ede tabela só exite nas condiçoes do proprio loop for
for (let repetir = 1; repetir <= 10; repetir++){ //primero vem o valor incial do indice, depois vem as coin dições para o funcionamento do loop, deposi vem o incremento ou decremento 

    console.log('quantidade de loops for' + ' ' + repetir )

}

//loop while verifica variavel externa e depois execulta 
let rep = 1;
let cont = 1;

while (rep <= 30) {
    cont *=2;
    
    if (rep < 100){
        console.log('quantidade de loops while'+ ' ' + rep+ ' e ' + cont)

    }
    rep *= 2;
   
   
}
//loop do while "execulta o bloco e depois verifica"
let i = 1
do{
        console.log("execução do loop 'do while'"+ ' ' + i);
        i++;
} while (i <= 3)

//loop for in
const dadosPessoal = {
    name:'legolas',
    age: 239,
}

for (let infor in dadosPessoal ){
    console.log(dadosPessoal,infor['name'])
}
let characters = ['eliso','dronos','frodite','asterios'];

for (let news in characters){
    console.log(news,characters[news]) // esse método de inscrição
}

//for of é mais apropriado do que o codigo que se encontra acima, porem aparentemente não suporta o método de incrição do codigo acima
for (let news of characters){
    console.log(news)
}

}
function funçãoDeContrução(){
        //funções de construção de conjuntos, diferente de um array
        // estregue os parametros e receba a construção com os parametros passados
        function call(assunto,argumento,chamar){
            return{
                assunto,
                argumento,
                chamar,
                corvir(){
                console.log(feito)
            }
            }
        }

        //as duas fuções de construções fazem as mesmas coisas, porem com escritas diferentes
        function call(conversa, discução, argumentação){
            //use o this para referenciar o objeto, se precizar procure um tutorial para aprender melhor, conto com você eu do futuro
            
            this.argumentação = argumentação;
            this.conversa = conversa;
            this.discução = discução;
            this.aé = function (){
                console.log('as duas fazem a mesma coisa')
            }
        }
}
function manipulaçãoDeElementos(){
        const tiraEColoca = {
            tirolesa :  'aeee',
            diverção : 'nunca',

        }
        tiraEColoca.velocidade = 1000

        tiraEColoca.retirado = function(){
            console.log('essa parte existe aqui')
        }
        console.log(tiraEColoca)
        delete tiraEColoca.retirado;
        console.log(tiraEColoca)
        /* METODOS DE CLONAGEM DE UM OBJETO*/
        const adicionadorEClonador = Object.assign({parametroColocadoPeloClonador : 500},tiraEColoca)
        console.log(adicionadorEClonador)
        /* para usar um metodo de clnagem masi rapido e simples é só usaar o dito cujo spreed "..." */
        const clonagemFlash = {...tiraEColoca}
        console.log(clonagemFlash)

}
function math(){
    /*math tem 1001 utulidades, para saber todas pesquise POR :    javascript math */
}
function tiposDeString (){
    /* strings normais*/
    let reticula = 'reticula'
    /* strings ibridas de objeto */
    let hibtido = new String('reticula hibrida')
    /* se quiser conferir use a tag typeof -nome do que você quer conferir- */
    /* para mais informações pesquise por javascript string */
}
function manipulaObjetos(){
    /* 
        oque voce quiser.lengt = conta o numero de elementos
        oque voce quiser.includes('') = esta se o que foi passado esta incluido 
        oque voce quiser.startsWith('') = testa se a palvavra inserida está de acordo com a palarva do inicio da string array
        oque voce quiser.endsWith('') = verifica se termina com a palavra inserida 
        oque voce quiser.indexOf('') = verifica a onde a palavra indicada começa dentro do array/string 
        oque voce quiser.replace ('','') = subistitui o primeiro elemento pelo segundo elemento dentro do array/string
        oque voce quiser.trim() = remove os espaços que não são necessarios, reduz 10 espaços a 1
        oque voce quiser.split('')= quebra a string em varios pedaços de acordo com os parametros passados na aspas

    */
}  
function sequenciaDeEscape (){
    //pesquise na internet  javascript scape sequence para obter a informação completa
} 
function comoColocarASpasDentroDeUmaString (){
    `basta usar as crases, assim você pode coloca tnato '' "" que não vai entrar em conflito e 
    ele tambem vai respeitar a quebra de linha e tudo que venha aqui será considerado uma string 
    e se você quise inseir algum codigo basta colocar ${OQueVocêQiser} que será inserido`
    
} 
function trabalhandoComDatas(){
    let data = new Date();
    //fornece data e hora necessaria, e usa diversos tipos de metodos com date
    data.getDate();
}   



let escopoDeIndereço = {
    rua : 'rua',
    cidade : 'cidade',
    cep: 'cep',
}  
let escopoDeIndereço2 = {
    rua : 'rua',
    cidade : 'cidade',
    cep: 'cep',
} 





function randomizar (retorna){
    
    
    let numero = 0;
    let resultado =''
    while(retorna >= numero){
        numero++
        let numeroRandom = Math.floor(Math.random() * 10)
        resultado +=String(numeroRandom)   
    }
    console.log(resultado)
}


    




function exerciciosDoCurso(){
    function exer1TrocadorDeVar(){
        function executar1(){
            let a = 'vermelho'
            let b = 'azul'
            let c = ''
            c = a;
            a = b
            b = c
        }
        
        console.log('o valor de a é: ' + a)
        console.log('o valor de b é: ' + b)
        
        executar1()
        
        console.log('o valor de a é: ' + a)
        console.log('o valor de b é: ' + b)
    }
    function exer2ComparadorDeValor(){
        let valor1 = 50;
        let valor2 = 100;
        let verificar = true;

        function checador_de_valores (verificar = true){
        const texto = valor1 > valor2 ? 'essa é a maior quantia do valor 1 com relação ao dois':'essa é a maior quantia do valor 2 em relação ao 1';
            if(valor1 > valor2){
                console.log(valor1 + ' ' + texto)
            }else{
                console.log(valor2+ ' ' + texto)
            }

        }
        checador_de_valores()  
    }
    function exe3fizzBuzz(){
        let n1 = 10;
        Number(n1)
        function fizzBuzz (testando){
                
                if(typeof testando === "number" ){
                    if(testando % 5 === 0 && testando % 3 === 0)
                    return console.log('fizzBuzz');
                
                        else if(testando % 5 === 0)
                        return console.log('Buzz');
                        

                            else if(testando % 3 === 0)
                            return console.log('fizz');
                        
                                else 
                                return console.log(testando);             
                } else{
                    console.log('não é um numero');
                }

        }
        fizzBuzz('33')

    }
    function exe3Velocimetro(){
                        
                function  MDV (velocidade){
                    if(velocidade > 70){
                        velocidade -= 70;
                        velocidade /= 5; 
                        let inteiro = Math.floor(velocidade);
                        if (inteiro <= 12){
                            console.log('você passou do limite de velocidade e ganhou'+ ' ' + inteiro)
                        }else{
                            console.log('você levou' +' '+ inteiro + ' ' + 'e por isso sua carteirea foi suspensa')
                        }
                    }else {
                        console.log('você está dentro do limite')
                    }
                } 


                let velocidade = 70 ; 
                velocidade /= 60
    }
    function exe4ImparOuPar (){
        function imparOuPar (numero){
        let contagem = 0
        do{

            let verificador =  contagem % 2 !== 0 ? contagem + ' impar' : contagem + ' par';
            console.log(verificador)

            contagem ++
        } while(numero >= contagem )
            
}

imparOuPar(12)

    }
    function exe5LeituraDeStringsPorObjetos(){
        const numeroso = {
            nome : 'vanderson',
            idade : 12,
            cor_preferida: 'verde limão',
            'passiencia 1 a 10': 2,  
        }
        
        function filtroDeString (numero){
           function soluçãoDoCurso(numerosso){
            for (prop in obj) 
                if(typeof obj[prop] === 'string')
                console.log(prop,obj[prop])
        
           }
           
            //minha solução 
            for (let news in numero){
                let rex = typeof (news,numero[news])
                let comp = rex === 'string'? news : null; 
                if(rex === 'string'){
                    console.log(comp,numero[comp])
                }
            }
        }
        filtroDeString(numeroso)
        
    } 
    function exe6SomaDeMultiplos3E5(){
        function soma(limite){
            let multiploDe3 = 0;
            let multiploDe5 = 0;
            for (i = 0; i <= limite; i++){ // cria um indice, aloca o limite de valor com o indice e faz um incremento de mais um com o indice
                if (i % 3 === 0)//indice não pode ser maior que limite e cada vez que o loop rodar ele incrementa mais um no indice
                multiploDe3 += i;
                if(i % 5 === 0)//os ifs só vão ativar se as divisões de 3 e ou 5 forem perfeitamente proprias caso contrario o loop continua a incrementar
                multiploDe5 += i;// e quando ultrapassadoo limite 
            }
            console.log(multiploDe3 + multiploDe5)
        }
        soma(10);
        
        function minhaManeira(){
            let nun = 10;
            let multiploDe3 = 0 ;
            let multiploDe5 = 0;
            let armDe3 = [];
            let armDe5 = [];
            let somaDe3 = 0; 
            let somaDe5 = 0;
            while(multiploDe3 <= nun){
                multiploDe3 += 3;
                armDe3.push(multiploDe3)
            }
            if (multiploDe3 > nun){
                multiploDe3 -= 3;
                armDe3.pop()

            }
            while(multiploDe5 <= nun){
                multiploDe5 += 5;
                armDe5.push(multiploDe5)

            }
            if (multiploDe5 > nun){
                multiploDe3 -= 5;
                armDe5.pop()  
            }
            for (let i = 0; i <armDe3.length; i++) {
                somaDe3 += armDe3[i];
            }
            for (let i = 0; i <armDe5.length; i++) {
                somaDe5 += armDe5[i];
            }

            console.log(somaDe5 + somaDe3)
        }
    }
    function exe7MediaDeNotas(){
        const array = [90, 90, 90]
        // media de 3 semestres
        function soluçãoDoCurso(){
            function sol(){
           const media = calcularMediaNota(notas);
            if (media < 59) return 'f';
            if (media < 59) return 'D';
            if (media < 59) return 'C';
            if (media < 59) return 'B';
            return 'A';
        }
        function calcularMediaNota(array){
            let soma = 0;
            for (let valor of array){
                soma += valor;
            }
            return soma/(array.length);
        }
        }
        
        // nota media de cada aluno
        // 0-59: f
        // 60-69: d
        // 70-79: c
        // 80-89: b
        // 90-100: a

        
        function somaDeNotas (notas){
            
            let mediaTotal = 0;
            
            for(i = 0; notas[i] !== undefined; i++){
                mediaTotal += notas[i]
            }
            let saida = mediaTotal / 3
            if(saida >= 0 && saida <= 59)
            console.log('F')
            else if(saida >= 60 && saida <= 69)
            console.log('D')
            else if (saida >= 70 && saida <= 79)
            console.log('C')
            else if(saida >= 80 && saida <= 89)
            console.log('B')
            else
            console.log('A')
        }
        somaDeNotas(array)
    }
    function exe8repetiçãoDeAsteristico(){
        //TE VIAR PÁ FAZER ARROMBADO
        // kkk feito em menos de 5 minutos burrão kkkkkkkk
        let i = 0;
        let aste = '*'
        while(i <= 10){
            ++i
            aste += '*'
            console.log(aste)



        }
    }
    function exe9ContadorDePrimos(){
        function numeroPrimo(num){
        let numero = num;

        let issoé = 0;
        let i = 1;
        while (i <= numero){
                let div = numero % i
                let divis = numero % numero 

                    if (i > 1 &&  i < numero && div === 0) {
                        issoé++
                    }; 
       
                i++  
        }
        if (issoé === 0){
                console.log(numero)
        }
    } 
    function contador(limite){
        for (let numero = 2; limite >= numero; ++numero){
            if (confirmador(numero)){
                console.log(numero)
            }
        }
    }
    function confirmador(numero){
        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                return false;
            }

        }
        return true

        

    }

    contador(9)   
    }
    function exe10LeitorDeIndereso(){
        let escopoDeIndereço = {
            rua : 'rua',
            cidade : 'cidade',
            cep: 'cep',
        }  
        function geradoDeEndereço (endereço){
            for(let ret in endereço){
                declarar(ret,endereço[ret])
            }
            
        
        }
        
        function declarar(conteudo){
            console.log(conteudo)
        }
    }



}
//clicar em uma variavel repetida de apertar f2 faz mudança na variavel em massa
//typeof verifica o tipo da varavel e retotna uma 'string' com 'nunber' 'boolean' e etc
/* comente textos celecionados com a ordem ctrl + k + c
//shift + tab retrocede os tabs de textos selecionados

 --Módulo (%)	Operador binário. Retorna o inteiro restante da divisão dos dois operandos.
 	12 % 5 retorna 2.

--Incremento (++)	Operador unário. Adiciona um ao seu operando. Se usado como 
operador prefixado (++x), retorna o valor de seu operando após a adição. Se usado como 
operador pósfixado (x++), retorna o valor de seu operando antes da adição.	
Se x é 3, então ++x define x como 4 e retorna 4, enquanto x++ retorna 3 e, somente então, 
define x como 4.

 --Decremento (--)	Operador unário. Subtrai um de seu operando. 
 O valor de retorno é análogo àquele do operador de incremento.	
 Se x é 3, então --x define x como 2 e retorna 2, enquanto x-- retorna 3 e, 
 somente então, define x como 2.

-- Negação (-)	Operador unário. Retorna a negação de seu operando.	

-- Se x é 3, então -x retorna -3.

 --Adição (+)	Operador unário. Tenta converter o operando em um número, sempre que possível.	

 +"3" retorna 3.

 +true retorna 1.

 --Operador de exponenciação (**) Experimental	
 --Calcula a base elevada á potência do expoente, que é, baseexpoente	

 2 ** 3 retorna 8.

 10 ** -1 retorna 0.1*/