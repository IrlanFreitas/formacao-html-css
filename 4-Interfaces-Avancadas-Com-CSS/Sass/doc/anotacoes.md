O que são pré-processadores ?

    Pré-processadores são programas que permitem gerar CSS a partir de determinada sintaxe.
    Existem diversos pré-processadores, sendo que a maioria deles permite adicionar funções
    que não são possíveis em CSS puro, como mixins, nesting, seletores, herança, etc.
    É possível usar a própria sintaxe CSS mas também podemos escrever a folha de estilo
    com algumas particularidades, como não usar chaves e colocar elementos dentro um do outro,
    criando o nesting. Essas funções facilitam a manutenção e aumentam a legibilidade do CSS.

    Os principais pré-processadores são Sass, Less e Stylus, mas existem outros menores também.
    Todos eles fazem coisas similares, com algumas particularidades e uma sintaxe própria.
    Neste curso estamos usando o Sass, um dos mais populares e também o mais antigo, criado em 2006.
    Sass significa Syntactically Awesome Style Sheets, e foi escrito em Ruby.
    O segundo pré-processador mencionado é o LESS, que foi criado 3 anos depois do Sass, em 2009,
    inspirado pelo mesmo, e foi escrito em JavaScript. E o último pré-processador
    mencionado é o Stylus, que foi lançado logo após o Less, em 2010, influenciado pelos dois anteriores,
    foi escrito em Node.js e combina características do Sass e do Less.

O que é o Sass ?

    Sass é um pré-processador CSS, que permite adicionar funções que não são possíveis no CSS puro.
    As principais vantagens de usar o Sass são a facilidade na escrita e sintaxe, e a possibilidade
    de adicionar funções, mixins, nestings, seletores e herança.

Nesting (Agrupamento) e Parent Selector (&).

    Exemplificando:

    Com o agrupamento do Sass, colocar um seletor dentro do outro é como aumentar a especificidade do css.
    O Parent Selector(&) serve para utilizar o nome mais a cima sem precisar ficar reescrevendo tudo.

    ```scss
        .header {
        font-family: Arial, Helvetica, sans-serif;

            &__logo {
                text-align: center;
            }

        }
    ```

    ```css
        .header {
            font-family: Arial, Helvetica, sans-serif;
        }
                
        .header__logo {
            text-align: center;
        }
    ```

Placeholder Selector (%) e Extend: 

Arquitetura de CSS - BEM:

    CSS é simples de se aprender e complexo de ser mantido. Conforme um projeto cresce, a manutenção do CSS vai ficando cada vez mais difícil, e para isso foram surgindo soluções, e o BEM é uma delas. BEM é um padrão de nomenclatura para manter o projeto simples e organizado. Ele foi criado pela Yandex e tenta resolver o problema de nomenclatura e estrutura do CSS permitindo facilitar e escalar o código, de forma que qualquer desenvolvedor tenha autonomia para mexer em qualquer projeto. A sigla BEM significa Block Element Modifier, em português, Bloco, Elemento, Modificador. Esses três pilares são a base dessa metodologia, e também as categorias em que os elementos são divididos.

    Vamos supor que você queira construir um componente de card. Nesse caso, o bloco seria o .card. E qualquer outra seção dentro do card seriam elementos. No exemplo, temos uma imagem, uma descrição e um botão. A convenção da nomenclatura do BEM conecta o bloco ao elemento com dois underlines, por exemplo .card__image. Ainda na nossa imagem, nós temos dois tipos de botões, eles seriam os modificadores, e nesse caso para a nomenclatura nós conectamos ao elemento com dois hífens, por exemplo .card__button--success e .card__button--back.

<img src="./imgs/BEM-example.png" width="500px" height="500px" style="margin: auto; " /> 

    Mas como saber o que é um elemento e o que é um modificador?

    Um elemento sempre será uma parte da estrutura do bloco, já os modificadores são estados que os nossos blocos ou elementos poderão ter, como botões com diferentes aparências ou uma situação de destaque.

    Prós e contras:

    BEM deixa o nosso CSS com uma estrutura modular. Por conta dos nomes únicos, não acontecerão conflitos entre as classes, o que facilita a manutenção. Porém, às vezes, os nomes das classes ficam muito compridos ao se usar a metodologia, mas com o uso de um pré-processador (como estamos usando no curso), isso não será um grande problema (pois usaremos o nesting).

Comando para compilar e transformar o scss em css:

    sass ./assets/styles/scss/style.scss:./assets/styles/css/style.css

    Pra não ficar toda hora tendo que rodar esse comando podemos usar o parâmetro --watch
    para que seja detectada toda alteração

    sass --watch ./assets/styles/scss/style.scss:./assets/styles/css/style.css
