const path = require("path");
const fs = require("fs");

fs.readFile('./php.ini', 'utf-8', function(err, data) {

    if (err) {
        console.log("erreur de chargement du fichier", err)
        return;
    }
    let dataArray = data;

    let txt = dataArray.replace(";", '');
    let regex = /([\W][\s][\w]*)/gi;
    let teste = txt.replace(regex, '');

    let myJSON = JSON.stringify(teste);
    console.log(myJSON)



})