let listaAmigoSecreto = [];

function adicionarAmigo(){
    let nomeAmigoSecreto = document.getElementById('amigo').value;
    
    if (nomeAmigoSecreto === ''){
        alert('Por favor, insira um nome.');
        return;
    } 
    listaAmigoSecreto.push(nomeAmigoSecreto);
    limparCampo();
    exibirNomeListaTela('listaAmigos',nomeAmigoSecreto);
}

function limparCampo(){
    nomeAmigoSecreto = document.getElementById('amigo');
    nomeAmigoSecreto.value = '';
}

function exibirNomeListaTela(id,texto){
    let campo = document.getElementById(id);
    campo.innerHTML += `<li>${texto}<li>`; 
}

function exibirAmigoSorteado(id,texto){
    let campo = document.getElementById(id);
    campo.innerHTML += `<li>${texto}<li>`;
}

function sortearAmigo(){
    if (listaAmigoSecreto.length === 0){
        alert('Lista vazia, adicione pelo menos um nome para sortear !');
        return;
    }
    let amigoSorteado = Math.floor(Math.random() * listaAmigoSecreto.length);
    let amigoSortudo = listaAmigoSecreto[amigoSorteado];
    document.getElementById('listaAmigos').innerHTML = '';
    exibirAmigoSorteado('listaAmigos',amigoSortudo);
}

function recomecarSorteio(){
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('sorteado').innerHTML = '';
    document.getElementById('amigo').innerHTML = '';
    
    listaAmigoSecreto = [];
}