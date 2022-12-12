/*
Test Case 23: Verify address details in checkout page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill all details in Signup and create account
6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
7. Verify ' Logged in as username' at top
8. Add products to cart
9. Click 'Cart' button
10. Verify that cart page is displayed
11. Click Proceed To Checkout
12. Verify that the delivery address is same address filled at the time registration of account
13. Verify that the billing address is same address filled at the time registration of account
14. Click 'Delete Account' button
15. Verify 'ACCOUNT DELETED!' and click 'Continue' button
*/
describe('Verify address details in checkout page',()=>{
    it('test 01',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.registerUser()
        cy.get('b').should('be.visible')
        cy.get('.pull-right > .btn').click()
        cy.get('b').should('have.text','Esat06')
        cy.contains('Add to cart').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('.active').should('include.text', 'Shopping Cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery > :nth-child(5)').should('have.text', 'Ankara')
        cy.get('#address_invoice > .address_country_name').should('have.text','Canada')
        cy.get(':nth-child(5) > a').click()
        cy.get('b').should('be.visible')
        cy.get('.pull-right > .btn').click()

        
        
    }) 
})