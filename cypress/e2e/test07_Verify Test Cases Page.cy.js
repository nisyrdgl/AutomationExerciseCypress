/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Test Cases' button
5. Verify user is navigated to test cases page successfully
*/
describe('Test Cases Page',()=>{
    it('Verify Test Case Pages',()=>{
        cy.automationexerciseAnasayfa()
        cy.get('.shop-menu > .nav > :nth-child(5) > a').should('have.text',' Test Cases')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.url().should('include','test_cases')

    })
})