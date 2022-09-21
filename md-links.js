const path = require('node:path');
const fs = require("fs");
const route = './README.md';
// const axios = require('axios');
const mdPruebaAbsoluta = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md';
const mdPruebaRelative = 'LIM018-md-links/prueba_1/primero.md';
// const pruebasinLink = 'C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\prueba_1\\prueba_2.md';
//const mdpruebadirectory = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links';
// const  carpetaPrueba = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1';
// const falla = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/package.json'
// console.log(process.argv[2])
// console.log(__dirname)
// console.log(path);

// 1.-  Validando que la ruta EXISTA--------------------------------------------------
// const pathExits = (router) => fs.existsSync(router);
const pathExits = (router) =>{ // return TRUE or FALSE
  if(typeof router !== 'string'){
    console.log("la ruta esta vacia")
    return false
  }
  return fs.existsSync(router)
  };
pathExits(route);

// 2.- Validando si es absoluta o realtiva - The path no existsa----------------------
// const aBsolute = path.isAbsolute(route); devuelve un booleano
const convertToAbsolut = (router)=>{
  if(path.isAbsolute(router)){
    return router;
    // return console.log(router);
  }
  else {
    return path.resolve(router);
    // return console.log(path.resolve(router));
  }
};
convertToAbsolut(mdPruebaRelative);

// 3.- Comprueba si es un archivo o no // return true or false-------------------------
const fileRead = (archivo) => fs.statSync(archivo).isFile();
console.log(fileRead(route))

// 4.-  Me indica el extencion que tiene la ruta// return la extensión del archivo-----
const readMd = (router) => path.extname(router);
  // console.log(path.extname(router));
readMd(route);

// 5.- lee el archivo  // return todo el interior del archivo--------------------------------
const readPath = (archivo) => fs.readFileSync(archivo,'utf-8');
readPath(mdPruebaAbsoluta);
// 6.-
const readFiles = (router) =>{
  if(readMd(router) === '.md'){
    return fs.readFileSync(router,'utf-8')
  }
  return  'Error, este archivo no es archivo .md'
}
readFiles('C:/Users/STEFANI/desktop/md-links/LIM018-md-links/index.js');

// 9.- Función para leer los links
const getLinks = (router) => {
  const expresionreglar = /(\[(.*?)\])?\(http(.*?)\)/gm  // para leer links
  const linksArray = [];
  const comproReadFiles = readFiles(router);
  const readlinks = comproReadFiles.match(expresionreglar)
  if (!readlinks){
    console.log('No se encontraron link');
    return [];
  }
  for(let i=0; i < readlinks.length; i++){
    // const firstPosition = readlinks[i].indexOf('(')+1;
    // const lastPosition = readlinks[i].indexOf(')')-1;
    const extrasionLinks = readlinks[i].substring(readlinks[i].indexOf('(')+1,readlinks[i].indexOf(')')-1);
    const texts = readlinks[i].slice(1, readlinks[i].indexOf("]"));

    const obj= {
      href: extrasionLinks,
      text: texts.substring(0, 50),
      file: router
    }
    linksArray.push(obj);
  }
return linksArray;
}
// console.log(getLinks(mdPruebaAbsoluta))
getLinks(mdPruebaAbsoluta);
// 6.- Para conprobar si es o no un directorio - retorna un true or false---------------------
// const verifiesPathIsDirectory = (router) => {
//   verificadeDirectory = fs.statSync(router)
//   return verificadeDirectory.isDirectory() // true or false
//  };
//  console.log(verifiesPathIsDirectory(route))

//  7.- funciion leer un directorio------------------------------------------------------------
// const readDirectorys = fs.readdirSync(mdpruebadirectory);
// console.log(readDirectorys)

// 8.- función para abrir un directorio y leer los archivos----------------------------------
// const openByDirectory = (router) =>{
//   const readingDirectory = fs.readdirSync(router);
//   let newArray = [];
//   readingDirectory.forEach((file) => {
//     const pathChild = path.resolve(router, file)
//     if (fs.statSync(pathChild).isFile()) {
//       newArray.push(pathChild);
//     }
//     return newArray
// })
// }
// console.log(openByDirectory(mdPruebaAbsoluta))




module.exports = {
  pathExits,
  convertToAbsolut,
  fileRead ,
  readMd,
  readPath,
}

//--------------------------------------------------
// Validando que la ruta existe sin SYNC
// const routerValidatory = ( path) => {
//   fs.exists(path,(e) =>{
//     console.log(e ? 'it exists' : 'no passwd!');
//   })
// }
// routerValidatory(route, console.log)

//leer data sin el SYNC
// const reedData = (path, callBack) =>{
//   fs.readFile(path,(err,data)=>{
//     callBack(data.toString());
//   })
// }
// reedData(route,console.log);
