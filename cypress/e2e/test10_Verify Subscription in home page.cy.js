/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down to footer
5. Verify text 'SUBSCRIPTION'
6. Enter email address in input and click arrow button
7. Verify success message 'You have been successfully subscribed!' is visible
*/
describe('SUBSCRIPTION',()=>{
    it('subscription',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.scrollTo('bottom') //sayfanın en altına gider
        cy.get('#susbscribe_email').type('esat06@gmail.com')
        cy.get('#subscribe > .fa').click()
        cy.get("div[class*='alert-success alert']").should('have.text','You have been successfully subscribed!')

    }) 
})