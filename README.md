# Makanda App

## Descrição
Este projeto é uma aplicação web frontend que permite aos usuários pesquisar e visualizar informações sobre filmes. A aplicação foi desenvolvida utilizando React, styled-components e Material para a estilização e a API OMDb para buscar os dados dos filmes.

## Funcionalidades
1. **Interface de Usuário**:
   - Campo de entrada (input) onde o usuário pode digitar o título de um filme.
   - Botão de “Pesquisar” para iniciar a busca.
   - Área para exibir os resultados da busca, incluindo informações como título do filme, ano de lançamento, sinopse e um pôster.

2. **Funcionalidade de Pesquisa**:
   - Ao clicar no botão “Pesquisar”, a aplicação faz uma chamada à API de filmes (OMDb API) para obter os dados dos filmes que correspondem ao título pesquisado.
   - Os resultados são exibidos de forma clara e organizada.

3. **Detalhes do Filme**:
   - Ao clicar em um filme nos resultados da pesquisa, o usuário é redirecionado para uma página de detalhes do filme, onde informações adicionais sobre o filme são exibidas (por exemplo, elenco, classificação, gênero etc.).

4. **Responsividade**:
   - A aplicação é responsiva e funciona bem em dispositivos de diferentes tamanhos de tela (desktop, tablet e mobile).

5. **Acessibilidade**:
   - Segue as melhores práticas de acessibilidade, garantindo que a aplicação possa ser usada por pessoas com diferentes necessidades (uso de etiquetas adequadas, navegação por teclado etc.).

## Tecnologias Utilizadas
- React
- TypeScript 
- Material UI
- styled-components
- OMDb API
- Git

## Pré-requisitos
Antes de começar, certifique-se de ter o Node.js e o npm (ou yarn) instalados na sua máquina.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/Aristidescosta/makanda-app.git
   cd makanda-app
