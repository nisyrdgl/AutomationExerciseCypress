/*
Test Case 20: Search Products and Verify Cart After Login
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Enter product name in search input and click search button
6. Verify 'SEARCHED PRODUCTS' is visible
7. Verify all the products related to search are visible
8. Add those products to cart
9. Click 'Cart' button and verify that products are visible in cart
10. Click 'Signup / Login' button and submit login details
11. Again, go to Cart page
12. Verify that those products are visible in cart after login as well
*/
describe('Search Products and Verify Cart After Login',()=>{
    it('test 01',()=>{
        cy.automationexerciseAnasayfa()
        cy.contains(' Products').click()
        cy.url().should('include','products')
        cy.get('.features_items').should('be.visible')
        cy.get('#search_product').type('Sleeveless Dress')
        cy.get('#submit_search > .fa').click()
        cy.get('.title').should('have.text','Searched Products')
        cy.get('.features_items').should('be.visible')
        cy.get('.productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('#product-3').should('be.visible')
        cy.get(':nth-child(4) > a').click()
        cy.get('.login-form > form > [type="email"]').type('esat06@gmail.com')
        cy.get('[type="password"]').type('123456'),
        cy.get('.login-form > form > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('#product-3').should('be.visible')
        
        
        
    }) 
})