const {
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
} = require ('C:/Users/STEFANI/desktop/md-links/LIM018-md-links/md-links.js')

const mdPruebaAbsoluta = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md';
const textt = 'LIM01md-links\prueba_1\pruebatex'
const mdpruebadirectory =  'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1'; // anterior 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links';
// const mdPruebaRelative = 'LIM018-md-links/prueba_1/primero.md';
// const mdpruebadirectory = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links';


const mdLink = (path, options = {validate:false}) =>{
  //console.log('primero',path)
  //console.log('luego',options)
  return new Promise((resolve, reject) => {
    // const newArrayLikns = [];
    if (!pathExits(path)){
      reject ('La ruta que ingresó no existe, por favor ingrese una ruta valida')

    } else{
      // convirtiendo la ruta a absoluta
      const absolutePath = convertToAbsolut(path)
      // Entrando al directorio y carpetas y sacando los links
      const arrayContainingLiks = openByDirectory(absolutePath)
      // array que contiene todos los links y los recorre uno  a uno  validandolos
      const arrayContainingLiksVerificate = validateLinks(arrayContainingLiks)
      
      if(options.validate){
        Promise.all(arrayContainingLiksVerificate).then((response)=>{
          resolve(response.flat()) //
        })
      }
      resolve (arrayContainingLiksVerificate)
    }
  })
  }

mdLink(mdPruebaAbsoluta,{ validate: false }).then((response)=>{
  console.log('entramdLinks',response)
})
.catch ((error)=>{
console.log('error:'+error)
})

  // // 2.- verificar si el tipo de ruta es absoluta
  // const absolutePath = convertToAbsolut(path)
  // // 3.- ingresando a los archivos
  // const arrayFilesPaths = openByDirectory(absolutePath);
  // let arraysFilesPaths = arrayFilesPaths.map((path)=>{
  //   return validateLinks(path)
  //   .then((response)=>{
  //     return response
  //   })
  // })
  // else {
  //   arrayFilesPaths = arrayFilesPaths.map((path)=>{
  //     return getLinks(path);
  //   })
  // }
