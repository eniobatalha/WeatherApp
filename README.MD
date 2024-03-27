# WeatherApp

Um aplicativo simples para verificar a previsão do tempo de diferentes cidades.

## Instalação

Certifique-se de ter o Node.js e o npm instalados globalmente em sua máquina.

1. Clone este repositório:
(`git clone https://github.com/eniobatalha/WeatherApp.git`)

2. Navegue até o diretório do projeto:
(`cd WeatherApp`)

3. Instale as dependências do projeto:
(`npm install`)


## Uso

1. Após a instalação, inicie o aplicativo.
(`npx expo start`)

2. O aplicativo DEVERÁ ser testado em um dispositivo móvel ou emulador de celular pois não foi desenvolvido para ser testado via navegador. Se for testar do seu celular, será preciso baixar o app (`Expo Go`) na loja de apps do seu aparelho.

3. Se você instalou todas dependências corretamente, no terminal será exibido um QR CODE para que o meu app possa ser lido no Expo Go do seu aparelho.

4. As informações são consumidas da API https://api.hgbrasil.com/weather portanto, se tiver algum problema para carregar as informações, recomendo criar uma conta em https://console.hgbrasil.com/ e cadastar uma nova chave de API com opção de plano gratuito, depois basta substituir a chave da linha 28 do index.tsx por sua chave gerada no console. A chave tem um limite de consultas, após bloqueado basta excluir a chave e criar uma nova chave gratuita.

5. Insira o nome de uma cidade na barra de pesquisa para ver a previsão do tempo para essa cidade.

## Recursos utilizados

- [React Native](https://reactnative.dev/) - Framework para construção de aplicativos móveis multiplataforma.
- [Expo](https://expo.dev/) - Plataforma e conjunto de ferramentas para construção de aplicativos React Native.
- [Phosphor Icons](https://phosphoricons.com/) - Conjunto de ícones para interfaces de usuário.
- [HG Brasil Weather API](https://hgbrasil.com/status/weather/) - API de previsão do tempo.

## Contribuindo

Contribuições são bem-vindas! Se você quiser melhorar este projeto, siga estas etapas:

1. Fork o projeto.
2. Crie uma nova branch (`git checkout -b feature/awesome-feature`).
3. Faça commit de suas alterações (`git commit -am 'Adicionar uma funcionalidade incrível'`).
4. Faça push para a branch (`git push origin feature/awesome-feature`).
5. Abra um pull request.

## Prints

<div style="display: flex; gap: 10px;">
    <img src="/screenshots/print1.png" alt="Print 1" width="300" height="600">
    <img src="/screenshots/print2.png" alt="Print 2" width="300" height="600">
</div>


