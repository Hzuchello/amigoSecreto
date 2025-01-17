
const amigos = [];


function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);

    atualizarLista();

    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    const sorteados = [...amigos];
    sorteados.sort(() => Math.random() - 0.5); 
    let tentativas = 0;
    while (tentativas < 1000 && sorteados.some((amigo, index) => amigo === amigos[index])) {
        sorteados.sort(() => Math.random() - 0.5); 
        tentativas++;
    }

    if (tentativas === 1000) {
        alert("Erro no sorteio. Tente novamente.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} tirou ${sorteados[index]}`;
        resultado.appendChild(li);
    });
}
