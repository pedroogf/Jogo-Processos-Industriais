// Telas
const telaInicial = document.getElementById('tela-inicial');
const escolhaNicknames = document.getElementById('personalizacao-jogadores')

// Seleciona todos os botões de quantidade de jogadores
const quantidadeDeJogadoresBtns = document.querySelectorAll('.quantidade-de-jogadores-btns button');
const inputsContainer = document.getElementById('inputs-container');

// Variável global para armazenar o número de jogadores selecionado
let jogadoresSelecionado = null;









// Adiciona evento de clique para cada botão
quantidadeDeJogadoresBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        quantidadeDeJogadoresBtns.forEach(button => button.classList.remove('active'));

        btn.classList.add('active');
        jogadoresSelecionado = parseInt(btn.dataset.value); // Converte para número
    });
});




document.getElementById('proximo-btn').addEventListener('click', () => {
    if (jogadoresSelecionado) {
        //substitui a tela inicial
        telaInicial.style.display = 'none'
        escolhaNicknames.style.display = 'flex'
        // Limpa inputs anteriores
        inputsContainer.innerHTML = '';

        // Cria os campos de texto conforme o número selecionado
        for (let i = 1; i <= jogadoresSelecionado; i++) {
            const label = document.createElement('label');
            label.setAttribute('for', `nickname${i}`);
            label.textContent = `Jogador ${i}:`;

            const input = document.createElement('input');
            input.type = 'text';
            input.id = `nickname${i}`;
            input.name = `nickname${i}`;
            input.placeholder = `Nome do Jogador ${i}`;
            input.maxLength = '8';

            // Agrupa para melhor layout (opcional)
            const wrapper = document.createElement('div');
            wrapper.classList.add('input-group'); // use isso para estilizar com CSS, se quiser

            wrapper.appendChild(label);
            wrapper.appendChild(input);
            inputsContainer.appendChild(wrapper);
        }
    } else {
        alert('Por favor, selecione uma quantidade de jogadores antes de iniciar.');
    }
});


const perguntas = [
  {
    pergunta: "Qual desses é um desperdício?",
    alternativas: ["Excesso de inventário", "Engarrafamento", "Controle de qualidade"],
    correta: 0,
    explicacao: "\"Excesso de inventário\" é a resposta correta por ser mais eficiente ou reduzir perdas no processo."
  },
  {
    pergunta: "Qual agrega valor?",
    alternativas: ["Moagem do malte", "Espera na fila", "Reprocesso"],
    correta: 0,
    explicacao: "\"Moagem do malte\" é a resposta correta por ser mais eficiente ou reduzir perdas no processo."
  },
  {
    pergunta: "Transporte interno é:",
    alternativas: ["Atividade que agrega valor", "Desperdício", "Etapa obrigatória"],
    correta: 1,
    explicacao: "\"Desperdício\" é um desperdício típico, pois não contribui diretamente para o valor final do produto."
  },
  {
    pergunta: "Qual das alternativas é uma atividade que agrega valor?",
    alternativas: ["Inspeção de produto", "Envase da cerveja", "Movimentação de barris"],
    correta: 1,
    explicacao: "\"Envase da cerveja\" é a resposta correta por ser mais eficiente ou reduzir perdas no processo."
  },
  {
    pergunta: "Qual é um exemplo de tempo de espera no processo?",
    alternativas: ["Fermentação controlada", "Falta de operador", "Envase automatizado"],
    correta: 1,
    explicacao: "\"Falta de operador\" é a resposta correta por ser mais eficiente ou reduzir perdas no processo."
  },
  {
    pergunta: "O que é considerado desperdício de superprodução?",
    alternativas: ["Produzir além da demanda", "Verificar a qualidade", "Planejar produção"],
    correta: 0,
    explicacao: "\"Produzir além da demanda\" é a resposta correta por ser mais eficiente ou reduzir perdas no processo."
  },
  {
    pergunta: "Qual é uma atividade necessária mas que não agrega valor?",
    alternativas: ["Transporte interno", "Moagem do malte", "Filtragem do mosto"],
    correta: 0,
    explicacao: "\"Transporte interno\" é um tipo de desperdício, pois não transforma o produto."
  },
  {
    pergunta: "Controle de qualidade é:",
    alternativas: ["Desnecessário", "Desperdício", "Necessário mas não agrega valor"],
    correta: 2,
    explicacao: "\"Necessário mas não agrega valor\" é uma etapa que garante a qualidade, mesmo sem transformar o produto."
  },
  {
    pergunta: "Reprocesso é um tipo de:",
    alternativas: ["Valor agregado", "Desperdício", "Melhoria contínua"],
    correta: 1,
    explicacao: "\"Desperdício\" é um desperdício típico, pois não contribui diretamente para o valor final do produto."
  },
  {
    pergunta: "O que é um exemplo de excesso de inventário?",
    alternativas: ["Estocar malte para um mês", "Ter garrafas suficientes para o dia", "Parar a produção"],
    correta: 0,
    explicacao: "\"Estocar malte para um mês\" representa excesso que gera custo sem valor."
  },
  {
    pergunta: "O gargalo no processo é causado por:",
    alternativas: ["Falta de demanda", "Etapa mais lenta que as outras", "Funcionários demais"],
    correta: 1,
    explicacao: "\"Etapa mais lenta que as outras\" limita o fluxo e gera atraso."
  },
  {
    pergunta: "Qual ação ajuda a eliminar desperdício?",
    alternativas: ["Aumentar o estoque", "Padronizar processos", "Reprocessar falhas"],
    correta: 1,
    explicacao: "\"Padronizar processos\" reduz variações e falhas."
  },
  {
    pergunta: "O que caracteriza movimentação desnecessária?",
    alternativas: ["Ajustar máquinas", "Operador busca ferramenta longe", "Inspeção final"],
    correta: 1,
    explicacao: "\"Operador busca ferramenta longe\" é movimentação sem valor."
  },
  {
    pergunta: "Transporte sem valor é considerado:",
    alternativas: ["Desperdício", "Padronização", "Agregação de valor"],
    correta: 0,
    explicacao: "\"Desperdício\" porque não transforma o produto."
  },
  {
    pergunta: "Qual das alternativas representa retrabalho?",
    alternativas: ["Refazer uma etapa", "Melhorar o layout", "Planejar a produção"],
    correta: 0,
    explicacao: "\"Refazer uma etapa\" é típico de retrabalho e desperdício."
  },
  {
    pergunta: "Qual é um exemplo de talento subutilizado?",
    alternativas: ["Funcionário sem treinamento", "Ferramenta quebrada", "Máquina parada"],
    correta: 0,
    explicacao: "\"Funcionário sem treinamento\" representa desperdício de potencial."
  },
  {
    pergunta: "A etapa de pasteurização agrega valor porque:",
    alternativas: ["Reduz o prazo de validade", "Elimina micro-organismos", "Usa energia"],
    correta: 1,
    explicacao: "\"Elimina micro-organismos\" garante segurança e qualidade do produto."
  },
  {
    pergunta: "Tempo de setup alto é um problema porque:",
    alternativas: ["Melhora a qualidade", "Causa ociosidade", "Agrega valor"],
    correta: 1,
    explicacao: "\"Causa ociosidade\" e impacta negativamente a produtividade."
  },
  {
    pergunta: "Inspeção manual frequente pode indicar:",
    alternativas: ["Baixa qualidade no processo", "Padrão elevado", "Velocidade ideal"],
    correta: 0,
    explicacao: "\"Baixa qualidade no processo\" requer checagens contínuas."
  },
  {
    pergunta: "Garrafa quebrada no transporte é exemplo de:",
    alternativas: ["Melhoria", "Desperdício", "Agregação de valor"],
    correta: 1,
    explicacao: "\"Desperdício\" porque gera perda de produto e custo."
  },
  {
    pergunta: "Qual é uma melhoria que reduz desperdício?",
    alternativas: ["Estoque maior", "Treinamento de equipe", "Mais inspeções"],
    correta: 1,
    explicacao: "\"Treinamento de equipe\" aumenta eficiência e reduz erros."
  },
  {
    pergunta: "Movimentar o produto várias vezes é:",
    alternativas: ["Organização", "Desperdício", "Controle de qualidade"],
    correta: 1,
    explicacao: "\"Desperdício\" por movimentação desnecessária e sem valor."
  },
  {
    pergunta: "Layout mal planejado gera:",
    alternativas: ["Valor agregado", "Desperdício por movimentação", "Fluxo otimizado"],
    correta: 1,
    explicacao: "\"Desperdício por movimentação\" causado por má organização física."
  }
];



const quizContainer = document.getElementById('quiz-container');
const jogadorNomeEl = document.getElementById('jogador-nome');
const perguntaEl = document.getElementById('pergunta');
const alternativasEl = document.getElementById('alternativas');
const timerEl = document.getElementById('timer');
const respostas = document.getElementById('respostas');
const barraProgresso = document.getElementById('barra');
const resultadoFinalEl = document.getElementById('resultado-final');

let explicacao = document.getElementById('explicacao');
let pontos = document.getElementById('pontuacao');
let nomesJogadores = [];
let pontuacao = [];
let rodadaAtual = 1;
let jogadorAtual = 0;
let perguntaAtual = 0;
let tempoRestante = 15;
let intervalo;



document.getElementById('iniciar-jogo-btn').addEventListener('click', () => {
    nomesJogadores = [];
    escolhaNicknames.style.display = 'none';
    quizContainer.style.display = 'flex';

    for (let i = 1; i <= jogadoresSelecionado; i++) {
        const input = document.getElementById(`nickname${i}`);
        let nome = input.value.trim();
        if (!nome) nome = `Jogador ${i}`;
        nomesJogadores.push(nome);
    }

    pontuacao = new Array(nomesJogadores.length).fill(0);
    iniciarQuiz();
});

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function iniciarQuiz() {
    embaralharArray(perguntas); 
    mostrarPergunta();
}

function mostrarPergunta() {
    clearInterval(intervalo);
    
    const barraProgresso = document.getElementById('barra');
    const progressoPercentual = ((rodadaAtual - 1) / 5) * 100;
    barraProgresso.style.width = `${progressoPercentual}%`;

    tempoRestante = 15;
    timerEl.textContent = tempoRestante;
    document.getElementById('progresso-pergunta').textContent = `Pergunta ${rodadaAtual} de 5`;
    const perguntaObj = perguntas[perguntaAtual];
    jogadorNomeEl.textContent = `${nomesJogadores[jogadorAtual]}`;
    pontos.textContent = `Pontuação: ${pontuacao[jogadorAtual]}`;
    perguntaEl.textContent = perguntaObj.pergunta;
    alternativasEl.innerHTML = '';
    perguntaObj.alternativas.forEach((alt, index) => {
        const btn = document.createElement('button');
        btn.textContent = alt;
        btn.classList.add('alternativa-btn');
        btn.addEventListener('click', () => verificarResposta(index, btn)); // passe o botão
        alternativasEl.appendChild(btn);
    });
    
    iniciarTimer();

}

function iniciarTimer() {
  intervalo = setInterval(() => {
    tempoRestante--;
    timerEl.textContent = tempoRestante;
    if (tempoRestante === 0) {
    clearInterval(intervalo);
    tempoEsgotado(); // ⏱ mostra resultado e bloqueia
    }

  }, 1000);
}

function tempoEsgotado() {
  const perguntaObj = perguntas[perguntaAtual];

  // Desabilita todas as alternativas
  document.querySelectorAll('.alternativa-btn').forEach(btn => {
    btn.disabled = true;
  });

  // Mostra que errou por tempo
  document.getElementById('resultado').textContent = '⏱ Tempo esgotado!';
  document.getElementById('explicacao').textContent = perguntaObj.explicacao;

  respostas.style.display = 'flex';
}


function verificarResposta(indiceEscolhido, botaoClicado) {
  clearInterval(intervalo);
  const perguntaObj = perguntas[perguntaAtual];
  const correta = indiceEscolhido === perguntaObj.correta;
  const explicacao = perguntaObj.explicacao;

  // Desabilita todas as alternativas
  document.querySelectorAll('.alternativa-btn').forEach(btn => {
    btn.disabled = true;
  });

  // Aplica cor ao botão clicado
  if (correta) {
    botaoClicado.classList.add('acerto');
    document.getElementById('resultado').textContent = '✅ Correta!';
    pontuacao[jogadorAtual]++;
  } else {
    botaoClicado.classList.add('erro');
    document.getElementById('resultado').textContent = '❌ Errada!';
  }

  document.getElementById('explicacao').textContent = explicacao;
  respostas.style.display = 'flex';
}



document.getElementById('proxima-pergunta').addEventListener('click', () => {
    proximoTurno()
})

function proximoTurno() {
  respostas.style.display = 'none'  
  jogadorAtual++;
  perguntaAtual ++;
  if (jogadorAtual >= nomesJogadores.length) {
    jogadorAtual = 0;
    rodadaAtual++;
  }

  if (rodadaAtual > 5 || perguntaAtual >= perguntas.length) {
    finalizarQuiz();
  } else {
    mostrarPergunta();
  }
}


function finalizarQuiz() {
  quizContainer.style.display = 'none';
  resultadoFinalEl.style.display = 'block';

  const tabelaResultados = document.getElementById('tabela-resultados');
  tabelaResultados.innerHTML = '';

  const ranking = nomesJogadores.map((nome, i) => ({
    nome,
    pontos: pontuacao[i]
  }));

  ranking.sort((a, b) => b.pontos - a.pontos);

  const medalhas = ['🥇', '🥈', '🥉'];
  const cores = ['ouro', 'prata', 'bronze'];

  ranking.forEach((jogador, i) => {
    const medalha = medalhas[i] || '😭';
    const corClasse = cores[i] || 'neutro';

    const linha = document.createElement('p');
    linha.classList.add(corClasse);
    linha.textContent = `${medalha} ${jogador.nome}: ${jogador.pontos} ponto(s)`;

    tabelaResultados.appendChild(linha);
  });
}

