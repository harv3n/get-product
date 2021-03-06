# get-product
Projeto para cumprir desafio técnico proposto pela B2W
Consiste em um modulo que faça o scraping de dados de uma página web de um produto do site 'americanas.com' trazendo os dados pertinentes

## Pacotes
Utilizado o [Request](https://github.com/request/request) para fazer as requisições HTTP 
e o [CheerIO](https://github.com/cheeriojs/cheerio) para separar e tratar os dados

## Instalação
```
git clone https://github.com/harv3n/get-product.git
npm install
```

## Usabilidade
```js
const getProduct = require('./get-product');

getProduct('https://www.americanas.com.br/produto/133718358');

/**
 * Saída esperada:
 * {
 *  id: 133718358,
 *  breadcrumb: [ 'página inicial', 'tv e home theater', 'tv', 'tv 4k' ],
 *  name: 'Smart TV LED 50" LG 50UK6510 Ultra HD 4k com Conversor Digital 4 HDMI ' +
 *   '2 USB Wi-Fi ThinQ AI WebOS 4.0 60Hz  Inteligencia Artificial  - Prata',
 *  img: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133718/3/133718358_1GG.png',
 *  seller: 'Americanas.com',
 *  price: 2199
 * }
 */
```

### Estrutura de arquivos
> /                   -> Contém um index que exporta o modulo getProduct.js  
> /lib/getProduct.js  -> Principal chamada do modulo, onde efetua-se o  request e a separação dos dados com o CheerIO  
> /lib/handle.js      -> Usado para tratamento de alguns dados

### Considerações
Toda recuperação de dados foi feita utilizando expressão regular nos seletores no objeto CheerIO para que traga devidamente os dados necessários e de forma que execute para qualquer URI de produto do site 'americanas.com'
> ie.: https://www.americanas.com.br/produto/133718358
  
Todo o código segue comentado de cada ação executada.

#### Obrigado ####
