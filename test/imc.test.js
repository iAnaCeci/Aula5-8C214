const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {
  it('Calcula o IMC corretamente e categoriza como "Peso normal"', () => {
    const peso = 70; // 70 kg
    const altura = 175; // 175 cm

    const IMCResult = calcularIMC(peso, altura);

    // Verifica se a string de resultado inclui o valor do IMC e a categoria
    expect(IMCResult).to.equal('Seu IMC é 22.86 (Peso normal)');
  });

  it('Categoriza como "Obesidade Grau II"', () => {
    const peso = 100; // 100 kg
    const altura = 165; // 165 cm

    const IMCResult = calcularIMC(peso, altura);

    // Verifica se a string de resultado inclui o valor do IMC e a categoria
    expect(IMCResult).to.equal('Seu IMC é 36.73 (Obeso)');
  });

  it('Categoriza como "Abaixo do peso"', () => {
    const peso = 50; // 50 kg
    const altura = 170; // 170 cm

    const IMCResult = calcularIMC(peso, altura);

    // Verifica se a string de resultado inclui o valor do IMC e a categoria
    expect(IMCResult).to.equal('Seu IMC é 17.30 (Abaixo do peso)');
  });


  it('Altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCResult = calcularIMC(peso, altura);

   
    expect(IMCResult).to.equal('NaN');
  });
});
