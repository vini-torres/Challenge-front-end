Challenge Front-end Engineer:

## Layout 
- Para esse desafio, eu decidir trabalhar com o React no ambiente desktop. O layout é composto por header, menu-lateral e o main (conteúdo principal);
- No menu, é disponibilizado 4 opções de navegações para o usuário: Calender; Volume; Comment; File;
- O Header possui logo, a indicação da página atual e o menu-side-bar;
- Já o main, em uma aplicação maior, ele pode variar de conteúdo, mas primordialmente ele tem como padrão a section calender.

## Date/Calender 
- Eu estou utilizando a lib Dayjs() para pegar os dias de forma mais objetiva, trazendo mais praticidade e vida ao projeto;
- Eu simulei uma api fake feita em array para pegar os nomes dos dias da semana;
- Já para pegar os dias exatos de cada mês, eu estou pegando da lib Dayjs();
- O dia padrão eu não deixei ele fixo (23 - como no figma), eu prefiri deixar o dia fixo como o dia atual que o usuário está usando aquela aplicação.
- Adicionei uma animação de hover nos dias, por questão de boas práticas;

##Falta concluir 
- Clicar e selecionar os dias;
- A descrição dos eventos mudar a cada dia selecionado;
- Adicionar meses a mais para o usuário poder selecionar
