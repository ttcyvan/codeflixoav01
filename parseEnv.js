const path = require("path");
const fs = require("fs");

//module.exports = function parseInit(content) {

fs.readFile('./.env', 'utf-8', function(err, data) {

    if (err) {
        console.log("erreur de chargement du fichier", err)
        return;
    }
    let dataArray = data;
    let regex = /([\W] [A-Z]*)/gi;
    let txt = dataArray.replace(regex, '');
    let myJSON = JSON.stringify(txt);
    console.log(myJSON)

})