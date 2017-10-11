import { Expect, Test, TestFixture } from "alsatian";
import { Calculadora } from "./../src/calculadora";

@TestFixture("Divisão")
export class CalculadoraDivisaoTestFixture {

    @Test("Divisão por zero deve gerar erro")
    public divisaoPorZeroTest() {
        Expect(() => Calculadora.dividir(1, 0)).toThrowError(Error, "Divisão por zero!");
    }
}
