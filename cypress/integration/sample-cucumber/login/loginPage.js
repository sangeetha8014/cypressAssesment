const URL = 'https://react-redux.realworld.io/#/login?_k=d7hcmn'
const EMAIL_INPUT = "[placeholder='Email']"
const PWD_INPUT = "[placeholder='Password']"
const SIGNUP_BTN = "[type=submit]"


class LoginPage{
    static visitURL(){
        cy.visit(URL)
    }
    static userLogin(name, pwd){
        cy.get(EMAIL_INPUT).type(name)
        cy.get(PWD_INPUT).type(pwd)
        cy.get(SIGNUP_BTN).click()
        cy.wait(4000)
    }
}

export default LoginPage 