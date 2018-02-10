# Desafio Frontend (idexoteam)

## Preview

https://starkdex-2e3b2.firebaseapp.com/

## Desenvolvimento

Este aplicativo de página única (Single Page Application) foi feito utilizando [create-react-app](https://github.com/facebook/create-react-app) com algumas modificações.

Desenvolvi por pura curiosidade, dado que estou à procura de oportunidades. Demorei além do tempo estimado, porém não desenvolvi ininterruptamente. Também não espero ser selecionado.

Para estilos, optei por css-in-js (inline + utilizando [Radium](https://github.com/FormidableLabs/radium)). Possui alguns bugs e não possui testes automatizados. Também não me preocupei muito em relação a tratamento de erros, fazendo o "caminho feliz". Claro que há muita coisa a melhorar, e fiz o layout por conta própria enquanto desenvolvia (sem muito estudo).

## Comandos

Após clonar, rodar `npm install` para baixar todas as dependëncias.

**Obs** é recomendável copiar o arquivo `.env.example` para `.env.local` e preencher o campo referente ao Public Key.

### npm start

Roda em modo de desenvolvimento

### npm run build

Cria recursos e artefatos para produção

### npm test (ignorar)

Roda o Jest. Não foi adicionado nenhum teste.

### npm run coverage (ignorar)

Roda o Jest, para verificar o `code coverage`

### npm run eslint

Roda o eslint. Para o desenvolvimento, foi adotado o `eslint-config-airbnb`, com algumas alterações.

### npm run storybook

Roda o ambiente `react-storybook`. Não possui todos os componentes visuais (como os detalhes de uma edição).

### npm run analyze

Roda o `webpack-bundle-analyzer`.

### npm run deploy

Publica os arquivos no servidor do Google ([Firebase](https://firebase.google.com/?hl=pt-br)).

## README original

Crie uma aplicação utilizando as Api's do portal Developers da Marvel. As tarefas são as seguintes:

##### Lista dos quadrinhos do Homem de Ferro ###
Crie uma lista de todas as edições de quadrinhos que o Homem de Ferro aparece ordenado por data. Cada item da lista deve conter imagem, titulo, descrição e data da edição.
Utilize Scroll infinito para carregar novos itens e LazyLoad para o carregamento das imagens.

##### Detalhe da Edição ###
Ao clicar em um item da lista, apresente os detalhes da edição. O detalhe deve conter a maior quantidade possível de informações a respeito.

#### Requisitos:
 - Utilize HTML5 + CSS3 com Flex.
 - Utilize Angular, React ou VueJS no desenvolvimento.
 - Utilize JQuery.
 - Não utilize Bootstrap ou outros frameworks do tipo.
 - O Layout precisa ser responsivo.
 - Descreva no README os passos para execução do seu projeto.
 - Deixe seu repositório público para analise do Pull Request.

#### Ganha mais pontos:
 -  Criação de testes instrumentados.
 -  Automação com Grunt ou Gulp.
 -  Otimizações para aumentar a velocidade de renderização.

#### Submissão
 - Criar um fork desse projeto e entregar via Pull Request.

#### Prazo de Entrega
 - 4 Dias.

#### Dados de acesso a api da Marvel
 - Portal: https://developer.marvel.com/
 - Documentação: https://developer.marvel.com/docs

# Boa Sorte
