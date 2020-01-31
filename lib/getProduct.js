//Instanciando dependencias
const request = require('request');
const cheerio = require('cheerio');

// Instanciando modulo responsavel por executar o tratamento de alguns dados
const handle = require('./handle');

module.exports = function (uri) {
    // Efetua request no URI
    request(uri, function (error, response, html) {
        // Se request bem sucedido
        if (!error && response.statusCode === 200) {
            // Define objeto para armazenar os dados para output
            let data = {
                id: 0,
                breadcrumb: [],
                name: '',
                img: '',
                seller: '',
                price: 0
            }

            // Carrega fonte do url no CheerIO
            let $ = cheerio.load(html);

            /**
             * Toda recuperação de dados foi feita utilizando Expressão Regular
             * para recuperar devidamente os dados necessários de forma que 
             * funcione para qualquer URI do site americanas.com
             */

            // Atribui ao data.id utilizando o metodo idHandle para tratar a string recuperada
            data.id = handle.idHandle(
                $("div[class^=GridUI]")
                    .find('span[class^=TextUI]')
                    .text()
                );

            // Atribui ao data.breadcrumb cada categoria existente do produto
            $("div[class^=BreadcrumbContainer]").each(function() {
                data.breadcrumb.push($(this).text());
            });

            // Atribui ao data.name o nome do produto
            data.name = $("h1[class^=product-title]").text();

            // Atribui ao data.img o source da imagem do produto
            data.img = $("div[class^=image-gallery-slide][class*=center]")
                            .find('img')
                            .attr('src');

            // Atribui ao data.seller o vendedor do produto
            data.seller = $('div[class^="seller-name-container"]')
                            .find('span[class^="seller-"]')
                            .text();

            // Atribui ao data.price o valor do produto utilizando o metodo priceHandle para tratar a string recuperada
            data.price = handle.priceHandle(
                    $('div[class^=main-price]').find('span[class^=sales-price]')
                        .text()
                        .replace('.', '')
                        .replace(',', '.')
                );

            // Exibe os dados no console ao final do processamento
            console.log(data);
        }
    }); 
};
