/* globals describe, expect, it */
// const mdLinks = require('../index.js');
const { pathExits,convertToAbsolut , readMd  } = require ('../md-links.js');
const route = './README.md';
const falseRoute = './REAE.md';
const number = 12345;
const mdPruebaAbsoluta = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md';
const mdPruebaRelative = 'LIM018-md-links/prueba_1/primero.md';
const noEscapada = "C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\LIM018-md-links\\prueba_1\\primero.md"
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
    console.log("Dentro del test",convertToAbsolut(mdPruebaRelative))
    expect (convertToAbsolut(mdPruebaRelative)).toBe(noEscapada);
  })
});

// describe('Con readMd me devuele el tipo de extensión del archivo', () => {
//   it ('me devuelve el tipo de extensión que tiene el archivo', () => [
//     expect ( readMd(mdPruebaRelative)).toBe('.md')
//   ])



