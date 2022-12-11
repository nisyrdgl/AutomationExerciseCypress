/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. Enter product name in search input and click search button
7. Verify 'SEARCHED PRODUCTS' is visible
8. Verify all the products related to search are visible
*/
describe('Seach Product Testing',()=>{
    it('search product',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.contains(' Products').click()
        cy.url().should('include','products')
        cy.get('#search_product').type('tshirt')
        cy.get('#submit_search').click()
        cy.url().should('include','products?search')
        cy.get('.title').should('be.visible')
        cy.get('.features_items').should('be.visible')



    })
})