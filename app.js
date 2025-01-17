//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
const amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);

    // Atualiza a exibição da lista
    atualizarLista();

    // Limpa o campo de texto
    input.value = "";
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada nome da lista de amigos
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    // Clonar a lista para embaralhar
    const sorteados = [...amigos];
    sorteados.sort(() => Math.random() - 0.5); // Embaralha a lista

    // Garante que ninguém se auto-sorteie
    let tentativas = 0;
    while (tentativas < 1000 && sorteados.some((amigo, index) => amigo === amigos[index])) {
        sorteados.sort(() => Math.random() - 0.5); // Reembaralha
        tentativas++;
    }

    if (tentativas === 1000) {
        alert("Erro no sorteio. Tente novamente.");
        return;
    }

    // Exibe o resultado do sorteio
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa a exibição atual

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} tirou ${sorteados[index]}`;
        resultado.appendChild(li);
    });
}
