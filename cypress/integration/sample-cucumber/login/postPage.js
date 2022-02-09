const URL = 'https://react-redux.realworld.io/#/?_k=2gauzy'
const TITLE_INPUT = "[placeholder='Article Title']"
// const ABOUT_INPUT = "[placeholder='What this article about?"]"
const WRITE_INPUT = "[placeholder='Write your article (in markdown)']"

class PostPage{
    static visitURL(){
        // cy.visit(URL)
    }
    static clickNewPost(){
        cy.get('.ion-compose').click()
    }
    static clickPublish(){
        cy.get('button').click()
    }
    static postArticle(title, about, text){
        cy.get(TITLE_INPUT).type(title)
        cy.get(':nth-child(2) > .form-control').type(about)
        cy.get(WRITE_INPUT).type(text)
    }
}

export default PostPage