# get-product
Projeto para cumprir desafio técnico proposto pela B2W
Consiste em um modulo que faça o scraping de dados de uma página web de um produto do site 'americanas.com' trazendo os dados pertinentes

## Pacotes
Utilizado o [Request](https://github.com/request/request) para fazer as requisições HTTP 
e o [CheerIO](https://github.com/cheeriojs/cheerio) para separar e tratar os dados

## Instalação
`git clone https://github.com/harv3n/get-product.git`  
`npm install`

## Usabilidade
```js
const getProduct = require('./get-product');

getProduct('URI-ALVO');
```

### Estrutura de arquivos
> /                   -> Contém um index que exporta o modulo getProduct.js  
> /lib/getProduct.js  -> Principal chamada do modulo, onde efetua-se o  request e a separação dos dados com o CheerIO  
> /lib/handle.js      -> Handle para tratamento dos dados para melhor organização 

### Considerações
Toda recuperação de dados foi feita utilizando expressão regular nos seletores no objeto CheerIO para que a recupere traga devidamente os dados necessários e de forma que execute para qualquer URI de produto do site 'americanas.com'
> ie.: https://www.americanas.com.br/produto/133718358
  
Todo o código segue comentado de cada ação executada.

#### Obrigado ####