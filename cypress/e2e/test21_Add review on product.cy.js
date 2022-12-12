/*
Test Case 21: Add review on product
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Click on 'View Product' button
6. Verify 'Write Your Review' is visible
7. Enter name, email and review
8. Click 'Submit' button
9. Verify success message 'Thank you for your review.'
*/
describe('Add review on product',()=>{
    it('test 01',()=>{
        cy.automationexerciseAnasayfa()
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.url().should('include','products')
        cy.contains('View Product').click()
        cy.get('.active > a').should('be.visible')
        cy.get('#name').type('Esat')
        cy.get('#email').type('esat06@gmail.com')
        cy.get('#review').type('Hello world')
        cy.get('#button-review').click()
        cy.get('.alert-success > span').should('be.visible')

        
        
        
    }) 
})