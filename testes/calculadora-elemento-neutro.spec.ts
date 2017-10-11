import { Calculadora } from './../src/calculadora';
import { Expect, Test, TestFixture } from "alsatian";

@TestFixture("Elemento neutro")
export class CalculadoraElementoNeutroTestFixture{
    @Test("Elemento neutro da soma, n+0=n")
    public neutroSomaTest() {
        Expect(Calculadora.somar(1,0)).toBe(1);
    }
    
    @Test("Elemento neutro da subtração, n-0=n")
    public neutroSubtracaoTest() {
        Expect(Calculadora.subtrair(1,0)).toBe(1);
    }
    
    @Test("Elemento neutro da multiplicação, nx1=n")
    public neutroMultiplicacaoTest() {
        Expect(Calculadora.multiplicar(1,1)).toBe(1);
    }
    
    @Test("Elemento neutro da divisão, n/1=n")
    public neutroDivisaoTest() {
        Expect(Calculadora.dividir(1,1)).toBe(1);
    }

    
}