/*
 * Instanciando dependencias
 */
var request = require('request');
var cheerio = require('cheerio');

// Instanciando modulo responsavel por executar o tratamento de alguns dados
var handle = require('./handle');

/**
 * @url URL do produto para efetuar o request
 */
module.exports = function (uri) {
    request(url, function (error, response, html) {
        if (!error && response.statusCode === 200) {
            let data = {
                id: 0,
                breadcrumb: [],
                name: '',
                img: '',
                seller: '',
                price: 0
            }

            let $ = cheerio.load(html);

            // 
            data.id = handle.idHandle($("div[class^=GridUI]").find('span[class^=TextUI]').text());

            $("div[class^=BreadcrumbContainer]").each(function() {
                data.breadcrumb.push($(this).text());
            });

            data.name = $("h1[class^=product-title]").text();

            data.img = $("div[class^=image-gallery-slide][class*=center]").find('img').attr('src');

            data.seller = $('div[class^="seller-name-container"]').find('span[class^="seller-"]').text();

            data.price = handle.priceHandle($('div[class^=main-price]').find('span[class^=sales-price]').text().replace('.', '').replace(',', '.'));

            console.log(data);
        }
    }); 
};