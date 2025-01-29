let listaAmigoSecreto = [];

function adicionarAmigo(){
    let nomeAmigoSecreto = document.getElementById('amigo').value;
    
    if (nomeAmigoSecreto === ''){
        alert('Erro: O campo não pode estar vazio !');
        return;
    } 
    listaAmigoSecreto.push(nomeAmigoSecreto);
    console.log('Nome adicionado a lista');    
    console.log(listaAmigoSecreto);
    limparCampo();
}

function limparCampo(){
    nomeAmigoSecreto = document.getElementById('amigo');
    nomeAmigoSecreto.value = '';
}