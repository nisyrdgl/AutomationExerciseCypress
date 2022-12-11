/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail  is visible: product name, category, price, availability, condition, brand
*/
describe('All Product and detail page', ()=>{
    it('detail product page', ()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.contains(' Products').click()
        cy.url().should('include','products')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.url().should('include','product_details')
        cy.get('.product-information > h2').contains('Blue Top').should('be.visible')
        cy.get('.product-information > :nth-child(3)').should('be.visible')
        cy.get(':nth-child(5) > span').should('be.visible')
        cy.get(':nth-child(6) > b').should('be.visible')
        cy.get(':nth-child(7) > b').should('be.visible')
        cy.get(':nth-child(8) > b').should('be.visible')

    })
})