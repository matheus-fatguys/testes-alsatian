import { Calculadora } from './../src/calculadora';
import { Expect, Test, TestFixture, AsyncSetupFixture, AsyncTeardownFixture, AsyncTest } from "alsatian";
import { WebDriver, Capabilities, Builder, By } from "selenium-webdriver";

@TestFixture("Teste de Ponta a Ponta")
export class CalculadoraDePontaAPontaTestFixture{  
    
    private _driver: WebDriver;

    @AsyncSetupFixture
    private async _goToHomePage() {
        // create a driver if one hasn't yet been created
        this._driver = new Builder()
                            .withCapabilities(Capabilities.chrome())
                            .build();
        
        // go to the wiki home page
        await this._driver.get("file:///J:/cursos/typescript/testes/alsatian/dist/index.html");
    }

     @AsyncTeardownFixture
    private async _tidyUp() {
        // quit the browser so it's not hanging about
        this._driver.quit();
    }

    @AsyncTest("Título da Página é Calculadora Typescript")
    public async correctTitle() {
        // get the wiki title
        const title = await this._driver
                                .findElement(By.tagName("title"))
                                .getText();

        // check it contains what we'd expect
        Expect(title).toBe("Calculadora Typescript");
    }

    @AsyncTest("everyone gets a nice welcome")
    public async checkContent() {
        // get the wiki body
        const a = await this._driver.findElement(By.id("a")).getAttribute("value");

        // check it contains what we'd expect
        Expect(a).toBe("1");
    }
}