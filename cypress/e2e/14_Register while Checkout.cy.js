/*
Test Case 14: Place Order: Register while Checkout
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
*/
describe('Register while Checkout',()=>{
    it('test 01',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.contains(' Products').click()
        cy.contains('Add to cart').click()
        cy.url().should('include','products')
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.active').should('be.visible')
        cy.get('.col-sm-6 > .btn').click() 
        cy.get('.modal-body > :nth-child(2) > a > u').click() 
        cy.get('.login-form > form > .btn').click()
        cy.get('.login-form > form > [type="email"]').type('esat06@gmail.com')
        cy.get('[type="password"]').type('123456'),
        cy.get('.login-form > form > .btn').click()
        cy.get('b').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery').should('be.visible')
        cy.scrollTo('top') //sayfanın ortasına gel
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