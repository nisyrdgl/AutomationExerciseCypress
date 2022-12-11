/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Cart' button
5. Scroll down to footer
6. Verify text 'SUBSCRIPTION'
7. Enter email address in input and click arrow button
8. Verify success message 'You have been successfully subscribed!' is visible
*/
describe('Cart Subscription',()=>{
    it('Cart subscription testing',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.scrollTo('bottom') //sayfanın en altına gider
        cy.get('#susbscribe_email').type('esat06@gmail.com')
        cy.get('#subscribe > .fa').click()
        cy.get("div[class*='alert-success alert']").should('have.text','You have been successfully subscribed!')
        
    })
})