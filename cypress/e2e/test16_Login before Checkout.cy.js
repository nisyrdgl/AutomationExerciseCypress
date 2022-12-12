/*Test Case 16: Place Order: Login before Checkout
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill email, password and click 'Login' button
6. Verify 'Logged in as username' at top
7. Add products to cart
8. Click 'Cart' button
9. Verify that cart page is displayed
10. Click Proceed To Checkout
11. Verify Address Details and Review Your Order
12. Enter description in comment text area and click 'Place Order'
13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
14. Click 'Pay and Confirm Order' button
15. Verify success message 'Your order has been placed successfully!'

*/
describe('Login before Checkout',()=>{
    it('test 01',()=>{
        /*
        1. Launch browser
        2. Navigate to url 'http://automationexercise.com'
        3. Verify that home page is visible successfully
        */
        cy.automationLogin('esat06@gmail.com','123456')
        cy.get('b').should('have.text','Esat06')
        cy.contains(' Products').click()
        cy.contains('Add to cart').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(3) > a > .fa').click()
        cy.url().should('include','view_cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery').should('be.visible')
        cy.get('#product-1').should('be.visible')
        cy.get('.form-control').type('please get gift wrapping')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('.active').should('be.visible')
        cy.get(':nth-child(2) > .col-sm-12 > .form-control').type('Esat')
        cy.get(':nth-child(3) > .col-sm-12 > .form-control').type('1234567891234567')
        cy.get('.cvc > .form-control').type('111')
        cy.get(':nth-child(2) > .form-control').type('11')
        cy.get(':nth-child(3) > .form-control').type('2026')
        cy.get('#submit').click()
        // cy.get("div[id^='success_message']").should('be.visible')

        
        
    }) 
})