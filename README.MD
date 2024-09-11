## React

- É uma biblioteca e não um framework. React permite a criação de interfaces de usuário de forma declarativa e eficiente, utilizando componentes reutilizáveis. É mantido pelo Facebook e uma grande comunidade de desenvolvedores.

### SPA (Single Page Application)

- Aplicações de página única carregam uma única página HTML e atualizam dinamicamente o conteúdo conforme a interação do usuário, sem recarregar a página inteira. Isso proporciona uma experiência mais rápida e similar a aplicativos nativos.

### SSR (Server Side Rendering)

- Renderização no lado do servidor significa que o conteúdo é gerado no servidor e enviado ao cliente como HTML completo, melhorando o desempenho e a SEO. SSR é útil para aplicativos que requerem renderização inicial rápida e melhor indexação pelos motores de busca.

## Componetes.

- São partes de codigos que podem ser reutilizados.
- São funções que retornam html e de formato jsx

## Propiedades

- São informações que podemos passar para os componentes.

## Css Modules

- Geralmente trabalhamos o css com base no escopo do componente.

## Css

Quando se tem display flex e no elemento interno voce coloca flex 1 você deseja que esse elemento ocupe o max possivel de espaço

## Use state

O estado = variáveis que eu quero que o componente monitore

## Sintaxe:

setComments([...comments, newComment]);: Esta linha está atualizando o estado dos comentários. O operador de espalhamento (...) é usado para criar uma nova matriz que contém todos os comentários existentes (comments) e adiciona o novo comentário (newComment) ao final da matriz.

## Key no React, por que unica?

A três momentos em que um componente é renderizado novamente no React

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente;

### Por que não utilizar o indice do array?

- Caso você mude apenas a posição do item tudo sera recarregado novamente.

## Como fazer a comunição entre componentes?

- As props dos componentes podem ser passadas entre componentes e nessas props não são somente strings, int mas também funções que podem ser executadas.

## Closures em React

Closures em React referem-se à capacidade de uma função acessar o escopo em que foi criada, mesmo após esse escopo ter sido finalizado. Isso é comum em componentes funcionais, onde funções de callback dentro do componente podem "lembrar" do estado ou variáveis que estavam presentes no momento em que foram criadas. Isso pode causar problemas se a função referenciar valores antigos, não refletindo o estado mais recente. Para evitar esses problemas, pode-se usar funções de atualização que recebem o estado anterior como argumento, garantindo que sempre trabalhem com os dados mais atuais.

## Styled-components

O `styled-components` é uma biblioteca para React que permite escrever estilos CSS diretamente dentro de componentes JavaScript usando a técnica CSS-in-JS. Ele isola os estilos por componente, evitando conflitos globais, e suporta temas para estilização consistente. Além disso, integra bem com editores para autocompletar CSS, suporta renderização no servidor (SSR) e facilita a manutenção e organização do código.

Quando utlizamos styled-components podemos fazer a mudança de temas de maneira dinamica usando `ThemeProvider` (lembre-se de tipar os themas)

Podemos criar stylos globais usando `createGlobalStyle`

## Context Provider

São elementos que não causam interferencia visual mas são componenetes que criam um contexto para componenetes dentro deles.

## React-router-dom

Usando a tag Outlet podemos definir em qual local iremos injetar o elemento.
#D0044
