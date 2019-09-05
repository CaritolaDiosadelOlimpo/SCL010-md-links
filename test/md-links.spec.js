const mdLinks = require('./md-links.js');


describe('mdLinks es un archivo donde guardamos las funciones que busca archivos .md y sus respectivos links', () => {
  describe('vamos a testear la funcion "stats"', ()=>{
    it('deberia retornar un objecto', ()=>{
      expect(typeof mdLinks.stats ('https://github.com')).toBe('object');
    })
  })
});
 

// import * as Calculator from '../index';

// describe("Una calculadora simple", () => {
//   describe("La calculadora debe sumar", () => {
//     it("Debe sumar dos números cualquiera", () => {
//       expect(Calculator.add(5,6)).toBe(11);
//       expect(Calculator.add(-5,5)).toBe(0);
//     });
//     it("Debe restar dos números cualquiera", () => {
//       expect(Calculator.substract(6,5)).toBe(1);
//       expect(Calculator.substract(5,-5)).toBe(10);
//     })
//   })
// }); */
