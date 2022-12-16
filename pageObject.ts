import {BasePage} from './basePage'
import {By, until} from 'selenium-webdriver'

export class Pioneros extends BasePage {

    objetivosBy: By = By.linkText('Objetivos');

    instrucctionesBy: By =  By.xpath('/html/body/div[1]/div[1]/a[3]');

    busquedaBy: By = By.xpath('/html/body/div[1]/div[1]/a[4]');

    sugerenciasBy: By = By.xpath('/html/body/div[1]/div[1]/a[5]');

    contactosBy: By = By.xpath('/html/body/div[1]/div[1]/a[6]');

    titleBy: By = By.xpath('/html/body/div[1]/div[2]');

    searchTitleBy: By = By.xpath('/html/body/div[1]/div[3]');

    suggestionsBy: By = By.xpath('//*[@id="お問い合わせフォーム-inquiry-pergunta-pregunta"]/strong');

    lastNameBy: By = By.xpath('//*[@id="inputApellido"]');

    firstNameBy: By = By.xpath('//*[@id="inputNombre"]');

    startSearchBtn: By = By.xpath('//*[@id="gosearch"]');

    lastNameResult: By = By.xpath('//*[@id="result"]/tr[1]/td[2]');

    firstNameResult: By = By.xpath('//*[@id="result"]/tr[1]/td[3]');


    constructor() {
        super({url: "http://dji.jomm.jp/es/proyecto.html"})
    }

    async changePage(location: By){
        await this.getElement(location)
        return this.click(location)
    }
   
    
  
}