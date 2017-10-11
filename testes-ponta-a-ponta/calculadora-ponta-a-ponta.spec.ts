import { AsyncSetup, AsyncSetupFixture, AsyncTeardown } from "alsatian";
import { AsyncTeardownFixture, AsyncTest, Expect, TestFixture } from "alsatian";
import { Alert, Builder, By, Capabilities, Key, WebDriver } from "selenium-webdriver";

@TestFixture("Teste de Ponta a Ponta")
export class CalculadoraDePontaAPontaTestFixture {

    private driver: WebDriver;

    @AsyncTest("divisão por zero deve gerar mensgaem de alerta")
    public async dividirporZero() {
        await this.driver.findElement(By.id("mensagem")).sendKeys("dividir por zero");
        await this.driver.findElement(By.id("b")).sendKeys(Key.HOME, Key.SHIFT, Key.END, Key.DELETE);
        await this.driver.findElement(By.id("b")).sendKeys("0", Key.RETURN);
        await this.driver.findElement(By.id("btnDividir")).click();
        const alert: Alert = await this.driver.switchTo().alert();
        const erro: string = await alert.getText();
        await alert.accept();
        Expect(erro).toBe("Error: Divisão por zero!");
    }

    @AsyncTest("garantir que 1 + 1 = 2")
    public async somar() {
        await this.driver.findElement(By.id("mensagem")).sendKeys("somar");
        await this.driver.findElement(By.id("btnSomar")).click();
        const resultado = await this.driver.findElement(By.id("resultado")).getAttribute("value");
        Expect(resultado).toBe("2");
    }

    @AsyncTest("garantir que 1 - 1 = 0")
    public async subrtair() {
        await this.driver.findElement(By.id("mensagem")).sendKeys("subtrair");
        await this.driver.findElement(By.id("btnSubtrair")).click();
        const resultado = await this.driver.findElement(By.id("resultado")).getAttribute("value");
        Expect(resultado).toBe("0");
    }

    @AsyncTest("garantir que 1 x 1 = 1")
    public async multiplicar() {
        await this.driver.findElement(By.id("mensagem")).sendKeys("multiplicar");
        await this.driver.findElement(By.id("btnMultiplicar")).click();
        const resultado = await this.driver.findElement(By.id("resultado")).getAttribute("value");
        Expect(resultado).toBe("1");
    }

    @AsyncTest("garantir que 1 / 1 = 1")
    public async dividir() {
        await this.driver.findElement(By.id("mensagem")).sendKeys("dividir");
        await this.driver.findElement(By.id("btnDividir")).click();
        const resultado = await this.driver.findElement(By.id("resultado")).getAttribute("value");
        Expect(resultado).toBe("1");
    }

    @AsyncSetup
    private async iniciarValores() {
        await this.driver.findElement(By.id("a")).sendKeys(Key.HOME, Key.SHIFT, Key.END, Key.DELETE);
        await this.driver.findElement(By.id("a")).sendKeys("1", Key.RETURN);
        await this.driver.findElement(By.id("b")).sendKeys(Key.HOME, Key.SHIFT, Key.END, Key.DELETE);
        await this.driver.findElement(By.id("b")).sendKeys("1", Key.RETURN);
        await this.driver.findElement(By.id("resultado")).sendKeys(Key.HOME, Key.SHIFT, Key.END, Key.DELETE);
    }

    @AsyncTeardown
    private async esperar() {
        await this.driver.findElement(By.id("mensagem")).sendKeys(Key.HOME, Key.SHIFT, Key.END, Key.DELETE);
    }

    @AsyncSetupFixture
    private async _goToHomePage() {
        // create a driver if one hasn't yet been created
        this.driver = new Builder()
            .withCapabilities(Capabilities.chrome())
            .build();

        // go to the wiki home page
        await this.driver.get("http://localhost:3000/");
    }

    @AsyncTeardownFixture
    private async _tidyUp() {
        await this.driver.findElement(By.id("mensagem")).sendKeys("acabou");
        this.driver.sleep(5000);
        this.driver.close();
        // quit the browser so it's not hanging about
        this.driver.quit();
    }
}
