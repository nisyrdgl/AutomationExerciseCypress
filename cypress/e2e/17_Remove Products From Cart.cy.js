/*
Test Case 17: Remove Products From Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click 'X' button corresponding to particular product
8. Verify that product is removed from the cart
*/
describe('Remove Products From Cart',()=>{
    it('test 01',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.contains(' Products').click()
        cy.contains('Add to cart').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.cart_quantity_delete').click()
        cy.get('#empty_cart').should('be.visible')
        
        
    }) 
})