const path = require("path");
const fs = require("fs");

/*const env = require("./parseEnv");
const ini = require("./parseInit");

const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log(" usage de node ")
    process.exit(0) // permet de gerer les retour 1 ou 0
}

const filename = args[0];

if (!fs.existsSync(filename)) {
    console.log(`${filename} le fichier filename d'existe pas`)
    process.exit(-1)
}

const content = fs.readFileSync(filename, "utf-8")

console.log(content)

ini(content)
env(content)


*/

fs.readFile('./php.ini','utf-8',function(err, data){

	if(err){
		console.log("erreur de chargement du fichier", err)
		return;
	}
	let dataArray = data.split();
	let datafin = dataArray.slice(1);
  	console.log(datafin);
  	//let obj = JSON.parse("les datas du fichier :"+ dataArray);
  	//console.log(obj);
})