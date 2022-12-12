
/*
Test Case 24: Download Invoice after purchase order
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click Proceed To Checkout
8. Click 'Register / Login' button
9. Fill all details in Signup and create account
10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
11. Verify ' Logged in as username' at top
12.Click 'Cart' button
13. Click 'Proceed To Checkout' button
14. Verify Address Details and Review Your Order
15. Enter description in comment text area and click 'Place Order'
16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
17. Click 'Pay and Confirm Order' button
18. Verify success message 'Your order has been placed successfully!'
19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
20. Click 'Continue' button
*/
describe('Download Invoice after purchase order',()=>{
    it('test 01',()=>{
       
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.contains(' Products').click()
        cy.contains('Add to cart').click()
        cy.url().should('include','products')
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.active').should('include.text', 'Shopping Cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-body > :nth-child(2) > a > u').click()
        cy.registerUser()
        cy.get('.pull-right > .btn').click()
        cy.get('b').should('have.text','Esat06')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get(':nth-child(2) > .heading').should('be.visible')
        cy.get(':nth-child(4) > .heading').should('be.visible')
        cy.get('.form-control').type('hello world')
        cy.get(':nth-child(7) > .btn').click()
        cy.get(':nth-child(2) > .col-sm-12 > .form-control').type('Esat')
        cy.get(':nth-child(3) > .col-sm-12 > .form-control').type('1234567891234567')
        cy.get('.cvc > .form-control').type('111')
        cy.get(':nth-child(2) > .form-control').type('11')
        cy.get(':nth-child(3) > .form-control').type('2026')
        cy.get('#submit').click()
        // cy.get("div[id^='success_message']").should('be.visible')
        //  cy.get('.col-sm-9 > .btn-default').click()
       // cy.get('.pull-right > .btn').click()
        
    }) 
})