// Arquivo JavaScript principal
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada!');
});

// Array de mensagens por tópico
const mensagens = {
    amor: {
        1: [
            "Você é incrível e merece todo o amor do mundo! ❤️",
            "Seu sorriso ilumina o dia de qualquer pessoa! ✨",
            "Você é mais especial do que palavras podem expressar! 💖",
            "Você é a razão do meu sorriso todos os dias! 🌟",
            "Seu amor é como uma estrela que brilha no céu! ⭐"
        ],
        2: [
            "Você tem um coração de ouro! 💝",
            "Sua bondade é inspiradora! 🌟",
            "Você é uma pessoa incrível! 💫",
            "Sua beleza interior é única! 🌺",
            "Você é um presente para o mundo! 🎁"
        ],
        3: [
            "Você é mais fofo que um filhote de cachorro! 🐶",
            "Seu jeito é tão adorável! 💕",
            "Você é uma pessoa maravilhosa! 🌈",
            "Seu carinho é um tesouro! 💎",
            "Você é pura doçura! 🍯"
        ],
        4: [
            "Um abraço virtual cheio de amor! 🤗",
            "Enviando abraços e beijos virtuais! 💋",
            "Um abraço apertado para você! 💝",
            "Beijos e abraços infinitos! 💕",
            "Um abraço que cura qualquer tristeza! 🌟"
        ]
    },
    conforto: {
        1: [
            "Estou aqui para você, não está sozinho(a)! 🤗",
            "Tudo vai ficar bem, confie no processo! 🌱",
            "Você é mais forte do que imagina! 💪",
            "Cada dia é uma nova oportunidade! 🌅",
            "Seu coração é forte e vai superar! ❤️"
        ],
        2: [
            "Permita-se sentir, mas não desista! 🌟",
            "Você é capaz de vencer qualquer desafio! ⭐",
            "Acredite em si mesmo(a), você consegue! 💫",
            "O sol sempre nasce depois da tempestade! 🌤️",
            "Você é mais resiliente do que pensa! 🌈"
        ],
        3: [
            "Respire fundo, você está no controle! 🌬️",
            "Cada momento difícil é um degrau para o sucesso! 🎯",
            "Você tem um coração valente! 💝",
            "Acredite no seu potencial! ✨",
            "Você é mais forte que qualquer obstáculo! 🏔️"
        ],
        4: [
            "Um abraço apertado para te confortar! 🤗",
            "Estou aqui para te apoiar! 💪",
            "Você não está sozinho(a) nessa jornada! 🌟",
            "Um abraço cheio de força e amor! 💖",
            "Juntos somos mais fortes! 🤝"
        ]
    },
    motivacao: {
        1: [
            "Você é capaz de alcançar seus sonhos! ⭐",
            "Acredite no seu potencial infinito! 🌟",
            "Cada dia é uma nova chance de brilhar! ✨",
            "Seu futuro é promissor! 🎯",
            "Você tem o poder de transformar vidas! 💫"
        ],
        2: [
            "Nada pode deter alguém determinado! 💪",
            "Seus objetivos estão mais próximos do que imagina! 🎯",
            "Acredite em si mesmo(a), você é incrível! 🌈",
            "Cada passo conta, continue avançando! 👣",
            "Seu sucesso é inevitável! ⭐"
        ],
        3: [
            "Você tem o poder de mudar o mundo! 🌍",
            "Seus sonhos são possíveis! 💫",
            "Acredite no seu potencial criativo! 🎨",
            "Você é uma fonte de inspiração! ✨",
            "Seu caminho está cheio de possibilidades! 🌟"
        ],
        4: [
            "Um abraço cheio de energia positiva! ⚡",
            "Você tem força para vencer! 💪",
            "Um abraço motivador para você! 🌟",
            "Continue brilhando! ✨",
            "Seu potencial é infinito! ⭐"
        ]
    },
    amizade: {
        1: [
            "Você é um amigo(a) incrível! 🤝",
            "Sua amizade é um presente! 🎁",
            "Você faz a diferença na vida das pessoas! 🌟",
            "Sua lealdade é admirável! 💫",
            "Você é um tesouro para seus amigos! 💎"
        ],
        2: [
            "Sua amizade é puro amor! 💖",
            "Você é um raio de sol na vida dos outros! ☀️",
            "Sua bondade é contagiante! 🌈",
            "Você é um amigo(a) de verdade! 🤗",
            "Sua presença é um presente! 🎁"
        ],
        3: [
            "Você é um amigo(a) especial! ⭐",
            "Sua amizade é um tesouro! 💝",
            "Você faz o mundo melhor! 🌍",
            "Sua generosidade é inspiradora! ✨",
            "Você é um amigo(a) de ouro! 💫"
        ],
        4: [
            "Um abraço de amizade verdadeira! 🤗",
            "Amigos como você são tesouros! 💎",
            "Um abraço cheio de carinho! 💖",
            "Sua amizade é um presente! 🎁",
            "Um abraço de amigo(a) de verdade! 🤝"
        ]
    },
    gratidao: {
        1: [
            "Gratidão por sua existência! 🙏",
            "Você é uma bênção! ✨",
            "Sua presença é um presente! 🎁",
            "Gratidão por compartilhar sua luz! 🌟",
            "Você é uma dádiva! 💫"
        ],
        2: [
            "Gratidão por sua bondade! 💝",
            "Sua generosidade é inspiradora! 🌈",
            "Gratidão por sua amizade! 🤝",
            "Você é uma bênção na vida dos outros! ⭐",
            "Gratidão por seu amor! 💖"
        ],
        3: [
            "Gratidão por sua presença! 🌟",
            "Sua existência é um presente! 🎁",
            "Gratidão por sua luz! ✨",
            "Você é uma dádiva divina! 💫",
            "Gratidão por seu carinho! 💝"
        ],
        4: [
            "Um abraço cheio de gratidão! 🙏",
            "Gratidão por você existir! 💖",
            "Um abraço de agradecimento! 🤗",
            "Gratidão por sua amizade! 🤝",
            "Um abraço de gratidão infinita! 💫"
        ]
    }
};

let topicoAtual = 'amor';

// Array de músicas românticas
const musicas = [
    "https://www.youtube.com/embed/your-romantic-song-1",
    "https://www.youtube.com/embed/your-romantic-song-2",
    "https://www.youtube.com/embed/your-romantic-song-3"
];

// Função para criar corações
function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.className = 'heart';
    coracao.innerHTML = '❤️';
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = Math.random() * 3 + 2 + 's';
    coracao.style.opacity = Math.random() * 0.5 + 0.5;
    document.querySelector('.hearts-container').appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

// Criar corações periodicamente
setInterval(criarCoracao, 300);

// Função para criar efeito de brilho
function criarBrilho(x, y) {
    const brilho = document.createElement('div');
    brilho.className = 'brilho';
    brilho.style.left = x + 'px';
    brilho.style.top = y + 'px';
    document.body.appendChild(brilho);

    setTimeout(() => {
        brilho.remove();
    }, 1000);
}

// Função para criar efeito de confete
function criarConfete() {
    const cores = ['#ff6b6b', '#ffd700', '#ff69b4', '#ff8e8e', '#ffb6c1'];
    for (let i = 0; i < 50; i++) {
        const confete = document.createElement('div');
        confete.className = 'confete';
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        confete.style.left = Math.random() * 100 + 'vw';
        confete.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confete);

        setTimeout(() => {
            confete.remove();
        }, 5000);
    }
}

// Função para criar efeito de chuva de estrelas
function criarEstrela() {
    const estrela = document.createElement('div');
    estrela.className = 'estrela';
    estrela.innerHTML = '✨';
    estrela.style.left = Math.random() * 100 + 'vw';
    estrela.style.animationDuration = Math.random() * 2 + 1 + 's';
    document.querySelector('.hearts-container').appendChild(estrela);

    setTimeout(() => {
        estrela.remove();
    }, 3000);
}

// Criar estrelas periodicamente
setInterval(criarEstrela, 500);

// Função para mostrar mensagem aleatória
function mostrarMensagemAleatoria(tipo) {
    const mensagensTipo = mensagens[topicoAtual][tipo];
    const mensagemAleatoria = mensagensTipo[Math.floor(Math.random() * mensagensTipo.length)];
    return mensagemAleatoria;
}

// Adicionar eventos aos botões quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade do menu lateral
    const menuBtn = document.querySelector('.menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    function openMenu() {
        sidebar.classList.add('active');
        body.style.overflow = 'hidden';
    }

    function closeMenu() {
        sidebar.classList.remove('active');
        body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            closeMenu();
        }
    });

    // Adicionar eventos aos botões de tópicos
    document.querySelectorAll('.topico-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            document.querySelectorAll('.topico-btn').forEach(b => b.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            // Atualizar tópico atual
            topicoAtual = this.dataset.tipo;
            // Esconder todas as mensagens
            document.querySelectorAll('.mensagem-escondida').forEach(msg => {
                msg.classList.remove('visible');
            });
            // Fechar o menu após selecionar um tópico
            closeMenu();
        });
    });

    // Adicionar eventos aos botões de mensagens
    document.querySelectorAll('.btn-mensagem').forEach(btn => {
        btn.addEventListener('click', function() {
            const mensagemEscondida = this.nextElementSibling;
            const tipoMensagem = this.dataset.mensagem;
            
            // Esconder todas as outras mensagens
            document.querySelectorAll('.mensagem-escondida').forEach(msg => {
                if (msg !== mensagemEscondida) {
                    msg.classList.remove('visible');
                }
            });

            // Mostrar mensagem aleatória do tópico atual
            mensagemEscondida.textContent = mostrarMensagemAleatoria(tipoMensagem);
            mensagemEscondida.classList.add('visible');

            // Efeitos visuais
            criarConfete();
            for (let i = 0; i < 5; i++) {
                setTimeout(criarCoracao, i * 200);
            }
        });
    });

    // Adicionar efeito de brilho ao mover o mouse
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) {
            criarBrilho(e.clientX, e.clientY);
        }
    });

    // Função para compartilhar o site
    document.querySelector('.btn-compartilhar').addEventListener('click', async () => {
        try {
            await navigator.share({
                title: 'Mensagens de Amor',
                text: 'Compartilhe amor e carinho com mensagens especiais! ❤️',
                url: window.location.href
            });
        } catch (err) {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copiado para a área de transferência!');
        }
    });

    // Efeito de digitação no título
    const titulo = document.querySelector('h1');
    const textoOriginal = titulo.textContent;
    titulo.textContent = '';
    let i = 0;
    function digitar() {
        if (i < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(digitar, 150);
        }
    }
    digitar();
}); 