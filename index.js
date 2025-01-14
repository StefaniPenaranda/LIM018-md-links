const {
  pathExits,
  convertToAbsolut,
  // pahtIsFile,
  // readMd,
  // readFile,
  // readFilesMd,
  // checkPathIsDirectory,
  // readDirectorys,
  openByDirectory,
  getLinks,
  validateLinks,
  // stats,
  // broken,
} = require ('C:/Users/STEFANI/desktop/md-links/LIM018-md-links/md-links.js')

// const mdPruebaAbsoluta = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md';
// const textt = 'LIM01md-links\prueba_1\pruebatex'
//  const mdpruebadirectory =  'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1';
//  const mddirectory = './prueba_1';
 // anterior 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links';
// // const mdPruebaRelative = 'LIM018-md-links/prueba_1/primero.md';
// // const mdpruebadirectory = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links';
// const routess = "./README.md";

const mdLink = (path, options) =>{
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
      const routes = openByDirectory(absolutePath)
      // array que contiene todos los links y los recorre uno  a uno  validandolos
      const validatedLinks = routes.map((route)=>{
         return validateLinks(route)
      })
      if(options.validate === true)
      {
       // resolve( options.validate)
        Promise.all(validatedLinks).then((response)=>{
          resolve(response.flat())
        })
      } else{
        const resolver = routes.map((linksFalse)=>{
          return getLinks(linksFalse)
        })
        resolve(resolver)
      }

     // resolve (validatedLinks)
    }
  })
  }

// mdLink(mddirectory,{ validate: true }).then((response)=>{
//   console.log('entrando a los Links',response)
// })
// .catch ((error)=>{
// console.log('error:'+error)
// })

  module.exports ={
    mdLink,
  }
