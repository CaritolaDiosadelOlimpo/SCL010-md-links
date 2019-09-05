const mdLinks  =  require('./md-links.js');
const mdlink = require('markdown-link');
const path = require('path');
const nodeFetch = require('node-fetch');
const FileHound = require('filehound'); //encuentra los archivos md
const file = require('file-system'); //lee los archivos md
const fs = require('fs'); 
const program = require('commander');
const commander = require('commander');
const argv = require('yargs').argv;

const chalk = require('chalk');

//importo funcion mdLinks
// let mdLinks = require('./md-links.js');
export const startUser = (args) => {

//variable global
let path =args[2];
let options = {
  stats: false,
  validate: false,
}

//dandole valores falso a otions.state options.validate
args.forEach(elementUser =>{
 if( elementUser == "--stats" || elementUser == "-s"){
   options.stats = true
 }
if(elementUser == "--validate" || elementUser == "-v"){
  options.validate = true
}
})

mdLinks.mdLinks(path,options).then(res=>{
  if(options.validate && options.stats){
    return console.log(chalk.magenta("Total Links: "+ res.total)+"\n"+chalk.green("Uniques: "+res.ok)+"\n"+chalk.red("Broken Links: "+res.broken))
  }
  if(options.validate){
    if(res.length === 0){
      return console.log(chalk.red("No se encontraron links"))
    }
    let validateLinks = res.map(x=>x.file+"  "+ chalk.blue(x.href) +"  "+ chalk.magenta(x.status) +"  "+ chalk.green(x.statusCode)+"  "+chalk.yellow(x.text.substr(0,40)))
    return console.log(validateLinks.join("\n "))
  }
  if(options.stats){
    return console.log(chalk.magenta("Total Links: "+ res.total)+"\n"+chalk.yellow("Unique Links: "+res.unique))
  }else{
    if(res.length === 0){
      return console.log(chalk.red("No se encontraron links"))
    } 
    const resLinks = res.map(x=>x.file+"  "+chalk.blue(x.href)+"  "+chalk.magenta(x.text.substr(0,40)))
    return console.log(resLinks.join("\n "))
  }
}).catch(err=>{
  console.log(chalk.red(err.message))
});
};