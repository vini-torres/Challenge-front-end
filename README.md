Challenge Front-end Engineer:


## Desafio 
- Contruir um layout disponibilizado pela Delta Code;
- Tornar o componente de calendário interativo;

## Layout 
- Para esse desafio, eu decidir trabalhar com o React no ambiente desktop. O layout é composto por header, menu-lateral e o main (conteúdo principal);
- No menu, é disponibilizado 4 opções de navegações para o usuário: Calender; Volume; Comment; File;
- O Header possui logo, a indicação da página atual e o menu-side-bar;
- Já o main, em uma aplicação maior, ele pode variar de conteúdo, mas primordialmente ele tem como padrão a section calender.

## Date/Calender
- Todo o desginer foi criado do zero. 
- Eu estou utilizando a lib Dayjs() para pegar os dias de forma mais objetiva, trazendo mais praticidade e vida ao projeto;
- Eu simulei uma api fake feita em array para pegar os nomes dos dias da semana, os meses e os anos definidos;
- Já para pegar os dias exatos de cada mês, eu estou pegando da lib Dayjs();
- O dia padrão eu não deixei ele fixo (23 - como no figma), eu prefiri deixar o dia fixo como o dia atual que o usuário está usando a aplicação.
- Adicionei uma animação de hover nos dias, por questão de boas práticas;
- Adicionei uma dinamicidade aos dias, dependendo do dia clicado, ele exibe a data, o mês atual e um conteúdo;
- Usei renderização condicional para o layout padrão que aparece ao carregar a página. Ele só aparece se de fato o dia clicado for o dia atual.

## Ferramentas/Techs utilizadas :
- Styled-components - para estilização; 
- React;
- JavaScript - Optei por trabalhar com JS
- date (Arquivo jsx - simulando uma api para as datas e o card de receitas);
- DayJs (Para trabalhar com as datas de forma mais pratica);
- as imagens e os ícones foram selecionados do figma, não usei lib para os ícones;

##  Instruções 
- O calendário tem algumas funcionalidades: 
    - Ao recarregar a página, exibe o dia atual com algumas informações a respeito de como usar o calendário;
    - Ao clicar em um dia que tenha eventos, será exibido os eventos daquele dia e a quantidade de eventos que tem;
    - Caso não tenha um evento definido para um determinado dia, será exibido uma mensagem informando;
    - O calendário pega as datas do dia/mês/ano atuais;
    - O calendário exibe os 12 meses do ano definido;
    - O Calendário exibe os anos entre 2020-2030;
    - Os dias do claendário tem duas cores: 
      - Cor tradicional - Aplicada aos dias daquele mês escolhido;
      - Cor mais clarinha - Aplicada aos dias do outro mês que aparece no final do calendário
    - O calendário tem um filtro (Hoje, Esta semana, Este mês) - Ao clicar em qualquer um deles, o calendário exibe o mês atual com a data atual

## Adicionais 
- Adicionei um favicon para deixar a página mais real (Logo da Delta-code);
- Adicionei a opção de escolher o mês de cada ano;
- Adicionei a opção de escolher um ano entre 2020-2030;
- Tornei o filtro de (Hoje, Esta Semana, Este mês) dinâmico. Ao clicar em qualquer um deles, o calendário exibe o mês atual com a data atual;
- Se não tiver nenhum evento ou não for o dia atual selecionado, eu definir uma mensagem para o usuário ("Não tem nenhuma movimentação para esse dia.");
- Adicionei duas cores ao calendário (por uma questão de usabilidade/experiência) - A cor mais forte está exibindo os dias do mês atual e a cor mais clarinha exibe a do próximo mês;
