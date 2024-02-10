//array -  variavel
const perguntas = [
    //objeto (pode ser qualquer tipo de valor)
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        " var x;",
        " let x;",
        " const x;",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de uma única linha em JavaScript?",
      respostas: [
        " // Este é um comentário",
        " /* Este é um comentário */",
        " -- Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        " Igualdade solta (apenas valor)",
        " Atribuição",
        " Igualdade estrita (valor e tipo)",
      ],
      correta: 2
    },
    {
      pergunta: "Como você chama uma função em JavaScript?",
      respostas: [
        " call minhaFuncao();",
        " minhaFuncao();",
        " invoke minhaFuncao();",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        " Um tipo de dado que representa uma string",
        " Um tipo de dado que representa uma coleção ordenada de elementos",
        " Um operador de comparação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '+=' em JavaScript?",
      respostas: [
        " Concatenação de strings",
        " Subtração",
        " Adição e atribuição",
      ],
      correta: 2
    },
    {
      pergunta: "Como você realiza um loop 'for' em JavaScript?",
      respostas: [
        " for (i = 0; i < 10; i++)",
        " loop (i = 0; i < 10; i++)",
        " while (i < 10) { i++ }",
      ],
      correta: 0
    },
    {
      pergunta: "O que significa 'NaN' em JavaScript?",
      respostas: [
        " Not a Number",
        " Nova and Null",
        " Nada de Nulo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'map()' em arrays?",
      respostas: [
        " Filtrar elementos do array",
        " Mapear cada elemento do array para uma nova função",
        " Ordenar o array",
      ],
      correta: 1
    },
    {
      pergunta: "O que é 'hoisting' em JavaScript?",
      respostas: [
        " Uma técnica de otimização de código",
        " A elevação de declarações de variáveis e funções durante a fase de compilação",
        " Um tipo de loop",
      ],
      correta: 1
    },
  ];
  
  //querySelector para buscar um elemento no html
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repeticao 
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    //esta fazendo com que as perguntas sejam independentes 
    dt.querySelector('input').setAttribute('name' , 'pergunta-' + perguntas.indexOf(item))
    //faz com que as alternativas sejam 0,1 e 2
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    //aqui a função é mostrar quais perguntas foram acertadas, a cada pergunta respondida
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
    }
  
    quizItem.querySelector('dl').appendChild(dt) 
    }
  
    //para apagar o exemplo que esta escrito no html
    quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }