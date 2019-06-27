module.exports.idHandle = function (string) {
    return parseInt(string.substring(string.indexOf("(") + 5, string.length - 1)); 
}

module.exports.priceHandle = function(string) {
    return parseFloat(string.slice(2, string.length));
}