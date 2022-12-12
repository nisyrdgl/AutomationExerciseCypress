/*
Test Case 22: Add to cart from Recommended items
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Scroll to bottom of page
4. Verify 'RECOMMENDED ITEMS' are visible
5. Click on 'Add To Cart' on Recommended product
6. Click on 'View Cart' button
7. Verify that product is displayed in cart page
*/
describe('Add to cart from Recommended items',()=>{
    it('test 01',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
       cy.scrollTo('bottom')
       cy.get('.recommended_items > .title').should('be.visible')
       cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
       cy.get('u').click()
        cy.get('.disabled').should('have.text','1')
        
    }) 
})