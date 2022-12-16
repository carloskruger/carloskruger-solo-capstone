import {Pioneros} from './pageObject'

describe("Testing content", () => {
    test("objectives page", async () => {
        const pioneros = new Pioneros();
        await pioneros.navigate("http://dji.jomm.jp/es/objetivos.html")
        let title = await pioneros.getElement(pioneros.titleBy)
        let text = await title.getText();
        expect(text).toContain("Objetivos");
        await pioneros.driver.quit();
    })

    test("instructions page", async () => {
        const pioneros = new Pioneros();
        await pioneros.navigate("http://dji.jomm.jp/es/instrucciones.html")
        let title = await pioneros.getElement(pioneros.titleBy)
        let text = await title.getText();
        expect(text).toContain("Base de datos");
        await pioneros.driver.quit();
    })

    test("search page", async () => {
        const pioneros = new Pioneros();
        await pioneros.navigate("http://dji.jomm.jp/es/search.php")
        let title = await pioneros.getElement(pioneros.searchTitleBy)
        let text = await title.getText();
        expect(text).toContain("Búsqueda de Inmigrante");
        await pioneros.driver.quit();
    })

    test("suggestions page", async () => {
        const pioneros = new Pioneros();
        await pioneros.navigate("https://jadesas.or.jp/jp/form_pioneros_es/")
        let suggestions = await pioneros.getElement(pioneros.suggestionsBy)
        let text = await suggestions.getText();
        expect(text).toContain("Sugerencias");
        await pioneros.driver.quit();
    })

    test("contact page", async () => {
        const pioneros = new Pioneros();
        await pioneros.navigate("http://dji.jomm.jp/es/contacto.html")
        let title = await pioneros.getElement(pioneros.titleBy)
        let text = await title.getText();
        expect(text).toContain("Contacto");
        await pioneros.driver.quit();
    })
})

    describe("Testing search", () => {
        test("search by last name", async () => {
            const pioneros = new Pioneros();
            await pioneros.navigate("http://dji.jomm.jp/es/search.php");
            await pioneros.setInput(pioneros.lastNameBy, "Kato");
            await pioneros.click(pioneros.startSearchBtn);
            let lastName = await pioneros.getElement(pioneros.lastNameResult)
            let text = await lastName.getText();
            expect(text).toContain("Kato");
            await pioneros.driver.quit();


        })

        test("search by first name", async () => {
            const pioneros = new Pioneros();
            await pioneros.navigate("http://dji.jomm.jp/es/search.php");
            await pioneros.setInput(pioneros.firstNameBy, "Kenji");
            await pioneros.click(pioneros.startSearchBtn);
            let firstName = await pioneros.getElement(pioneros.firstNameResult)
            let text = await firstName.getText();
            expect(text).toContain("Kenji");
            await pioneros.driver.quit();


        })
    })
