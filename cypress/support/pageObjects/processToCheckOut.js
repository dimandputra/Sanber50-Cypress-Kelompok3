class processToCheckout{
    signInBtn = '.panel > .header > .authorization-link > a'
    Email = '#email'
    Pass = '#pass'
    loginBtn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    chartBtn = '.showcart'
    checkOutBtn1 = '.action.primary.checkout'
    fillComp = 'Company'
    fillAdd1 = '[name="street[0]"]'
    fillAdd2 = '[name="street[1]"]'
    fillAdd3 = '[name="street[2]"]'
    fillCity = '[name="city"]'
    fillReg1 = '[name="region_id"]'
    fillPost = '[name="postcode"]'
    fillReg2 = '[name="region_id"]'
    fillPhone = '[name="telephone"]'
    radioBtn1 = 'tbody > :nth-child(1) > :nth-child(1)'
    nextBtn = '.button.action.continue.primary'
    payBtn = '.payment-method-content > :nth-child(4) > div.primary > .action > span'
    
    SignIn(SignInBtn){
        cy.get(this.signInBtn).click(SignInBtn)
    }
    InputEmail(inputEmail){
        cy.get(this.Email).type(inputEmail)
    }
    InputPass(inputPass){
        cy.get(this.Pass).type(inputPass)
    }
    BtnLogin(LoginBtn){
        cy.get(this.loginBtn).click(LoginBtn)
    }
    BtnChart(ChartBtn){
        cy.get(this.chartBtn).click(ChartBtn)
    }
    BtnCheckout1(CheckOutBtn1){
        cy.get(this.checkOutBtn1).click(CheckOutBtn1)
    }
    Fill_Comp(FillComp){
        cy.get(this.fillComp).click().type(FillComp)
    }
    Fill_Add1(FillAdd1){
        cy.get(this.fillAdd1).click().type(FillAdd1)
    }
    Fill_Add2(FillAdd2){
        cy.get(this.fillAdd2).click().type(FillAdd2)
    }
    Fill_Add3(FillAdd3){
        cy.get(this.fillAdd3).click().type(FillAdd3)
    }
    Fill_City(FillCity){
        cy.get(this.fillCity).click().type(FillCity)
    }
    Fill_Reg1(FillReg1){
        cy.get(this.fillReg1).click().type(FillReg1)
    }
    Fill_Post(FillPost){
        cy.get(this.fillPost).click().type(FillPost)
    }
    Fill_Reg2(FillReg2){
        cy.get(this.fillReg2).click().type(FillReg2)
    }
    Fill_Phone(FillPhone){
        cy.get(this.fillPhone).click().type(FillPhone)
    }
    Radio_Btn1(RadioBtn1){
        cy.get(this.radioBtn1).click(RadioBtn1)
    }
    Next_Btn(NextBtn){
        cy.get(this.nextBtn).click(NextBtn)
    }
    Pay_Btn(PayBtn){
        cy.get(this.payBtn).click(PayBtn)
    }
}
export default new processToCheckout()