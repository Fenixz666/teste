function changeBackground(button) {
    // Extrai o número do ID do botão
    var buttonId = button.id;
    var buttonNumber = buttonId.split('-')[2];

    // Define o URL da imagem de fundo com base no número do botão
    var imageUrl = '';
    switch(buttonNumber) {
        case '1':
            imageUrl = 'https://static.wikia.nocookie.net/leagueoflegends/images/4/43/Fiddlesticks_OriginalCircle.png';
            break;
        case '2':
            imageUrl = 'https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Fiddlesticks_SpectralCircle.png';
            break;
        // Adicione mais casos conforme necessário
    }

    // Altera o plano de fundo do corpo da página
    document.body.style.backgroundImage = 'url("' + imageUrl + '")';
}
