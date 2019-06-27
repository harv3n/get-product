/**
 * Modulo de scraping de dados de produtos do site 'americadas.com'
 * Desenvolvido em proposta do desafio técnico da B2W
 * 
 * ./lib/getProduct -> Executa a ação principal do modulo
 * ./lib/handle -> Criado com o intuito de efetuar o tratamento dos dados existentes e de quaisquer dados posteriores
 */

exports = module.exports = require('./lib/getProduct');

exports.version = require('./package.json').version;
