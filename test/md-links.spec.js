/* globals describe, expect, it */
// const mdLinks = require('../index.js');
const { pathExits,convertToAbsolut , fileRead  } = require ('../md-links.js');
const route = './README.md';
const falseRoute = './REAE.md';
const number = 12345;
const mdPruebaAbsoluta = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md';
const mdPruebaRelative = 'LIM018-md-links/prueba_1/primero.md';
const noEscapada = "C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\LIM018-md-links\\prueba_1\\primero.md"
const directorys = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1'
// const md = '.md'
// const util = require('node:util');

describe  ('pruebas de la función pathExits', () => {
  it ('Si no es un string debe retornar false', () => {
    expect(pathExits(number)).toBe(false);
  });
  it('Debe retornar TRUE si la ruta existe', () => {

    expect (pathExits(route)).toBe(true);
  });
  it( 'Debe retornar FALSE si la ruta no existe', () => {
    expect (pathExits(falseRoute)).toBe(false);
  });
});

describe('Con convertToAbsolut comprueba si la ruta es absoluta y si no lo es la convierte a absoluta', () => {
  it ('Reconoce si la ruta es absoluta y si lo es devuelve la ruta', () => {
    expect (convertToAbsolut(mdPruebaAbsoluta)).toBe(mdPruebaAbsoluta);
  });
  it ( 'si no es absoluta la convierte a absoluta', () => {
    expect (convertToAbsolut(mdPruebaRelative)).toBe(noEscapada);
  })
});

describe( "pruebas a la función fileRead ", () => {
  it('Me devuelve true si es un archivo',()=>{
    expect ( fileRead(route)).toBe(true);
  })
  it('Me devuelve false si no es un archivo', () =>{
    expect (fileRead(directorys)). toBe(false);
  })
})
// describe('Con readMd me devuele el tipo de extensión del archivo', () => {
//   it ('me devuelve el tipo de extensión que tiene el archivo', () => [
//     expect ( readMd(mdPruebaRelative)).toBe('.md')
//   ])



