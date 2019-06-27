module.exports.idHandle = function (text) {
    return parseInt(text.substring(text.indexOf("(") + 5, text.length - 1)); 
}

module.exports.priceHandle = function(text) {
    return parseFloat(text.slice(2, text.length));
}