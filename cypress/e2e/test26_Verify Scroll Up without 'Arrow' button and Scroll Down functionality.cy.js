/*
Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down page to bottom
5. Verify 'SUBSCRIPTION' is visible
6. Scroll up page to top
7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
*/
describe('Verify Scroll Up without Arrow button and Scroll Down functionality',()=>{
    it('test 01',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.get('.single-widget > h2').should('be.visible')
        cy.scrollTo('top')
        cy.get('#slider-carousel > .carousel-inner > .active > :nth-child(1)').should('be.visible')
        
        
        
    }) 
})