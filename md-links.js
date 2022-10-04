const path = require("node:path");
const fs = require("fs");
// const { default: axios } = require('axios');
const route = "./README.md";
const axios = require("axios");
const mdPruebaAbsoluta = "C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md";
const mdPruebaRelative = "LIM018-md-links/prueba_1/primero.md";
const textt = "C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/pruebatext.txt";
const directorys = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1'
// const pruebasinLink = 'C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\prueba_1\\prueba_2.md';

// const  carpetaPrueba = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1';
// const falla = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/package.json'
// console.log(process.argv[2])
// console.log(__dirname)
// console.log(path);

// 1.-  Validando que la ruta EXISTA--------------------------------------------------
const pathExits = (router) => fs.existsSync(router);
// const pathExits = (router) => {
//   // return TRUE or FALSE
//   if (typeof router !== "string") {
//     console.log("la ruta esta vacia");
//     return false;
//   }
//   return fs.existsSync(router);
// };
// console.log(pathExits(route));

// 2.- Validando si es absoluta o relativa , si es relativa la convierte en absoluta----------------------
// const aBsolute = path.isAbsolute(route); devuelve un booleano
const convertToAbsolut = (router) =>(path.isAbsolute(router)? router : path.resolve(router));

// 3.- Comprueba si es un archivo o no // return true or false-------------------------
const pahtIsFile = (archivo) => fs.statSync(archivo).isFile();

// 4.-  Me indica el extencion que tiene la ruta// return la extensión del archivo-----
const readMd = (router) => path.extname(router);

// 5.- lee el archivo  // return todo el interior del archivo--------------------------------
const readFile = (archivo) => fs.readFileSync(archivo, "utf-8");

// 6.-FUNCION PARA LEER SOLO ARCHIVOS MD
const readFilesMd = (router) => (readMd(router) === ".md" ?  fs.readFileSync(router, "utf-8") : "Error, este archivo no es archivo .md");

// 6.- Para conprobar si es o no un directorio - retorna un true or false---------------------
const checkPathIsDirectory = (router) => {
  const verificadeDirectory = fs.statSync(router)
  return verificadeDirectory.isDirectory() // true or false
};
//  7.- funciion leer un directorio------------------------------------------------------------
const readDirectorys = (dir) => fs.readdirSync(dir);

// 8.- función para abrir un directorio y leer los archivos - RECURSIVIDAD----------------------------------
const openByDirectory = (pathDir) =>{
  let newArray = [];
  if(pahtIsFile(pathDir)){ // retorna true or false
    if(readMd(pathDir)==='.md'){
      newArray.push(pathDir)
      // return newArray
    }
  } else {
      const arrayDirectory = readDirectorys(pathDir);
      for (let i =0 ; i < arrayDirectory.length ; i++){
        const pathAndDirectory = path.join(pathDir,arrayDirectory[i]); // path.join concatena dos rutas
        const readDirectorisAgain = openByDirectory(pathAndDirectory)
        newArray = newArray.concat(readDirectorisAgain) // 
      }
   }
   return newArray
  }
//  console.log(openByDirectory(directorys))



// 9.- Función para leer los links
const getLinks = (router) => {
  const expresionreglar = /(\[(.*?)\])?\(http(.*?)\)/gm; // ;para leer links
  const linksArray = [];
  const comproReadFiles = readFile(router);
  const readlinks = comproReadFiles.match(expresionreglar);
  if (!readlinks) {
    console.log("No se encontraron link");
    return [];
  }
  for (let i = 0; i < readlinks.length; i++) {
    const finalText = readlinks[i].indexOf("]");
    const extrasionLinks = readlinks[i].slice(
      finalText + 2,
      readlinks[i].length - 1
    );
    const texts = readlinks[i].slice(1, finalText);
    const obj = {
      href: extrasionLinks,
      // href: prueba,
      text: texts.substring(0, 50),
      file: router,
    };
    linksArray.push(obj);
  }
  return linksArray;
};
 //  console.log('prueba feña',getLinks(mdPruebaAbsoluta))
// getLinks(mdPruebaAbsoluta); ME REGRESA UN ARRAY CON OBJETOS
const prueba1 = [
  'C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\prueba_1\\primero.md',
  'C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\prueba_1\\prueba_2.md',
  'C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\prueba_1\\recursividad\\primeraPruebaRecursividad.md',
  'C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\prueba_1\\recursividad\\segundaPrueba\\tercarpruab.md'
]

// 10.- FUNCION PARA VALIDAR LINKS
const validateLinks = (path) => {
  const objArray = getLinks(path);
  return Promise.all(
    objArray.map((obj) => {
      // console.log('obj oculto',link)
      return axios.get(obj.href)
        .then((response) => {
          return {
          ...obj,
          status: response.status,
          message: response.statusText,
          }
        })
        .catch((error) =>{
          if(error.response){
            return{
              ...obj,
              status: error.response.status,//
              message: 'fail',
              }
          }
          else{
            return{
              ...obj,
              status: error.errno,//
              message: 'fail',
              }
          }
        })
    })
  );
  // aqui terminar el promise all
};
// //console.log('ENTRAFOR',validateLinks(mdPruebaAbsoluta))
// validateLinks(mdPruebaAbsoluta).then((response) =>{
//  console.log('validateLinks',response)
// })


const arrayLinkss = [
  {
    href: 'https://currictyuioulum.laboratoria.la/es/topics/javascrarrays',
    text: 'Arreglos',
    file: 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md',
    status: 404,
    message: 'fail'
  }
]

// 11.- FUNCIÓN PARA CONTRABILZAR LINK VALIDOS E INVALIDOS
const stats = (router) => {
  const links = getLinks(router)
  const links2 = links.map((item) => item.href);
  const unique = new Set(links2).size
// set es para crear objetos que almacenan valores unicos
//size devuelve el número de elemetos que hay en el objeto set
    return{
      Total:links2.length,
      Unique: unique,
    }
}
//console.log(stats(mdPruebaAbsoluta));

// 12.- BORKEN STATS
const broken = (arraylinks) => {
  const brokenLinks = arraylinks.filter((link)=>{
    return link.message === 'fail' // verificar si esta bien ------------------------------------------
  })
  return {
    Broken: brokenLinks.length,
  }
}
 // console.log('prueba deysi',broken(arrayLinkss))




module.exports = {
  pathExits,
  convertToAbsolut,
  pahtIsFile,
  readMd,
  readFile,
  readFilesMd,
  checkPathIsDirectory,
  readDirectorys,
  openByDirectory,
  getLinks,
  validateLinks,
  stats,
  broken,
};
