const path = require('node:path');
const fs = require("fs");
const route = './README.md';

// console.log(process.argv[2])
// console.log(__dirname)
// console.log(path);

// Validando que la ruta EXISTA------------------------------------------
const routeValidator = (router) => {
 if (fs.existsSync(router)===true){
  console.log('The path exists.')
} else {
    console.log ('The path no exists')
  // return  fs.existsSync(router)
}

}
routeValidator(route);

// Validando que la ruta existe sin SYNC
// const routerValidatory = ( path) => {
//   fs.exists(path,(e) =>{
//     console.log(e ? 'it exists' : 'no passwd!');
//   })
// }
// routerValidatory(route, console.log)

// Validando si es absoluta o realtivThe path no existsa------------------------------------------------
// const aBsolute = path.isAbsolute(route); devuelve un booleano
const convertToAbsolut = (router)=>{
  if(path.isAbsolute(router)){
    // return router;
    return console.log(router);
  }
  else {
    // return path.resolve(router);
    return console.log(path.resolve(router));
  }
}
convertToAbsolut(route);

// Me indica el extencion que tiene la ruta
const prueba = (router) =>{
  console.log(path.extname(router));
};
prueba(route);

// const typeExtencionMd = (router)=>{

// }
// //leer data sin el SYNC
// const reedData = (path, callBack) =>{
//   fs.readFile(path,(err,data)=>{
//     callBack(data.toString());
//   })
// }
// reedData(route,console.log);

//
