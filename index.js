const {
  pathExits,
  convertToAbsolut,
  readMd,
  readPath
} = require ('C:/Users/STEFANI/desktop/md-links/LIM018-md-links/md-links.js')

const mdPruebaAbsoluta = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md';
const textt = 'LIM018-md-links\prueba_1\pruebatext.txt'
// const mdPruebaRelative = 'LIM018-md-links/prueba_1/primero.md';
// const mdpruebadirectory = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links';


const mdLink = (path) =>{
 const convertAbsolute = convertToAbsolut(path)
  if (pathExits(convertAbsolute)){
    console.log ("la ruta existe")
  }
  else {
    console.log("todo mal jejej ")
  }
}
mdLink(textt)
