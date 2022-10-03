/* globals describe, expect, it */
// const mdLinks = require('../index.js');
const { pathExits,convertToAbsolut , pahtIsFile, readFilesMd, readMd, getLinks, validateLinks, openByDirectory } = require ('../md-links.js');
const route = './README.md';
const falseRoute = './REAE.md';
const number = 12345;
const mdPruebaAbsoluta = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md';
const mdPruebaRelative = 'LIM018-md-links/prueba_1/primero.md';
const noEscapada = "C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\LIM018-md-links\\prueba_1\\primero.md"
const directorys = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1'
const prueba2 = 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/prueba_2.md';
const contentPrueba2 = 'Este archivono tendra links, es prueba para ver si funiona todo bien.';
const md = '.md'
const arrayVacio = [];
// const util = require('node:util');

describe  ('pruebas de la función pathExits', () => {
  // it ('Si no es un string debe retornar false', () => {
  //   expect(pathExits(number)).toBe(false);
  // });
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
    expect ( pahtIsFile(route)).toBe(true);
  })
  it('Me devuelve false si no es un archivo', () =>{
    expect (pahtIsFile(directorys)). toBe(false);
  })
});

describe('Con readMd me devuele el tipo de extensión del archivo', () => {
  it ('me devuelve el tipo de extensión que tiene el archivo', () => {
    expect ( readMd(mdPruebaRelative)).toBe(md)
})
});

describe('Pruebas de la función readFiles', () => {
  it('Lee el archivo y devuelve el contenido', () => {
    expect(readFilesMd(prueba2)).toContain (contentPrueba2)
  });
});

describe('Prueba de la función openDirecory', ()=>{
  it('Si se ingresa una ruta que es un archivo y es un archivo md te devuelve la ruta',()=>{
    const arrayRoute = ["./README.md"]
    expect(openByDirectory(route)).toStrictEqual(arrayRoute)
  })
  it ('deberia rwetornar un array con las rutyas del directorio', ()=>{
    const mdpruebadirectory =  'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1';
    const mdPrueba = [
      'C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\prueba_1\\primero.md',
      'C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\prueba_1\\prueba_2.md',
      'C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\prueba_1\\recursividad\\primeraPruebaRecursividad.md',
      'C:\\Users\\STEFANI\\desktop\\md-links\\LIM018-md-links\\prueba_1\\recursividad\\segundaPrueba\\tercarpruab.md'
    ]
    expect (openByDirectory(mdpruebadirectory)).toEqual(mdPrueba)

  })
})
// describe('Prueba de la función getLinks',() => {
//   it('Si no contine Links debe retornar un array vacio', () => {
//     expect(getLinks(prueba2)).toStrictEqual(arrayVacio)
//   });
//   it('me devuelve el array href,text,file',() => {
//     const arrayLinks = [
//       {
//         href: 'https://es.wikipedia.org/wiki/Markdow',
//         text: 'Markdown',
//         file: 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md'
//       },
//       {
//         href: 'https://nodejs.org',
//         text: 'Node.js',
//         file: 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md'
//       },
//       {
//         href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jp',
//         text: 'md-links',
//         file: 'C:/Users/STEFANI/desktop/md-links/LIM018-md-links/prueba_1/primero.md'
//       }
//     ]
//     expect(getLinks(mdPruebaAbsoluta)).toStrictEqual(arrayLinks)
//   })

// })





