/*
Test Case 19: View & Cart Brand Products
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify that Brands are visible on left side bar
5. Click on any brand name
6. Verify that user is navigated to brand page and brand products are displayed
7. On left side bar, click on any other brand link
8. Verify that user is navigated to that brand page and can see products
*/
describe('View & Cart Brand Products',()=>{
    it('test 01',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.contains(' Products').click()
        cy.get('.brands_products').should('be.visible')
        cy.get('.brands-name > .nav > :nth-child(2) > a').click()
        cy.url().should('include','H&M')
        cy.get('.features_items').should('be.visible')
        cy.get('.brands-name > .nav > :nth-child(4) > a').click()
        cy.url().should('include','Mast')
        cy.get('.features_items').should('be.visible')
        
        
    }) 
})