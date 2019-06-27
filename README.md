# get-product
Projeto para cumprir desafio técnico proposto pela B2W
Consiste em um modulo que faça o scraping de dados de uma página web de um produto do site 'americanas.com' trazendo os dados pertinentes

## Pacotes
Utilizado o [Request](https://github.com/request/request) para fazer as requisições HTTP 
e o [CheerIO](https://github.com/cheeriojs/cheerio) para separar e tratar os dados

## Usabilidade
```js
const getProduct = require('./getProduct');

getProduct('URI-ALVO');

```

### Estrutura de arquivos
> /                   -> Contém um index que exporta o modulo getProduct.js
> /lib/getProduct.js  -> Principal chamada do modulo, onde efetua-se o request e a separação dos dados com o CheerIO
> /lib/handle.js      -> Handle para tratamento dos dados para melhor organização 

#### Obrigado ####