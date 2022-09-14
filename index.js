const path = require('node:path');
const fs = require("fs");
const route = './README.md';
const mdPruebaAbsoluta = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md';
const mdPruebaRelative = 'LIM018-md-links/prueba_1/primero.md';
// console.log(process.argv[2])
// console.log(__dirname)
// console.log(path);

// 1.-  Validando que la ruta EXISTA------------------------------------------
// const pathExits = (router) => fs.existsSync(router);
const pathExits = (router) =>{ // retorn TRUE or FALSE
  if(typeof router !== 'string'){
    console.log("la ruta esta vacia")
    return false
  }
  return fs.existsSync(router)
  };

pathExits(route);

// 2.- Validando si es absoluta o realtivThe path no existsa-----------------------
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
// Verifico si es un directorio o no
//------------ se hace despues-------------;

//3.-  Me indica el extencion que tiene la ruta --------------------------------
const readMd = (router) =>{
  return path.extname(router);
  // console.log(path.extname(router));
};
readMd(route);

//4.- lee el archivo
// Con esta fubciob leo el archivo
const readPath = (archivo) => {
  console.log(fs.readFileSync(archivo,'utf-8'));
}
readPath(mdPruebaAbsoluta)

//5.- 

module.exports = {
  pathExits,
  convertToAbsolut,
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
