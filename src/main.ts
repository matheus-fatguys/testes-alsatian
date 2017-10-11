import { Calculadora } from "./calculadora";

function getValorDeA() {
    const aref = document.getElementById("a");
    const arefInput: HTMLInputElement = aref as HTMLInputElement;
    const astr = arefInput.value;
    return parseInt(astr, 10);
}

function getValorDeB() {
    const bref = document.getElementById("b");
    const brefInput: HTMLInputElement = bref as HTMLInputElement;
    const bstr = brefInput.value;
    return parseInt(bstr, 10);
}

function setValorDeResultado(resultado: number) {
    const ref = document.getElementById("resultado");
    const refInput: HTMLInputElement = ref as HTMLInputElement;
    refInput.value = resultado + "";
}

function somarEntradas() {
    setValorDeResultado(Calculadora.somar(getValorDeA(), getValorDeB()));
}
function subtrairEntradas() {
    setValorDeResultado(Calculadora.subtrair(getValorDeA(), getValorDeB()));
}
function multiplicarEntradas() {
    setValorDeResultado(Calculadora.multiplicar(getValorDeA(), getValorDeB()));
}
function dividirEntradas() {
    try {
        setValorDeResultado(Calculadora.dividir(getValorDeA(), getValorDeB()));
    } catch (error) {
        alert(error);
    }
}

const btnSomar = document.getElementById("btnSomar");
btnSomar.addEventListener("click", () => somarEntradas());
const btnSubtrair = document.getElementById("btnSubtrair");
btnSubtrair.addEventListener("click", () => subtrairEntradas());
const btnMultiplicar = document.getElementById("btnMultiplicar");
btnMultiplicar.addEventListener("click", () => multiplicarEntradas());
const btnDividir = document.getElementById("btnDividir");
btnDividir.addEventListener("click", () => dividirEntradas());
