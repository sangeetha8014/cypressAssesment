/// <reference types='cypress' />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'
import PostPage from './postPage'

Given('User is on Login Page', () => {
    LoginPage.visitURL();
})

When('User enter {string},{string}', (username, password) => {

    LoginPage.userLogin(username, password);

})

Then('Should display Home Page', () => {

    // cy.get('.navbar-brand').first().should('include', 'conduit')
    // cy.get('.navbar-brand').first().should('include', 'conduit')

})

Given('User lands in home page',()=>{
    PostPage.visitURL();

})

And('User click New Post',()=>{
    PostPage.clickNewPost();
})

And('User enter {string},{string},{string}',(title,about,text)=>{

    PostPage.postArticle(title,about,text);

})
And('Click Publish Article',()=>{
    PostPage.clickPublish();
    cy.wait(4000)
})

Then('Article should be published', () =>{
    // cy.get('.navbar-brand').should('include', 'conduit')
    cy.get('h1').should('include', 'Test')
    
})