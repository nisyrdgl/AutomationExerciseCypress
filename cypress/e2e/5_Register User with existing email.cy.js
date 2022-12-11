/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible

*/

describe('mail kulanma',()=>{

    it('mevcut mail kayit olma',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[type="text"]').type('Esat06')
        cy.get('.signup-form > form > [type="email"]').type('ranagul14@gmail.com')
        cy.get('.signup-form > form > .btn').click()
        cy.contains('Email Address already exist!').should('be.visible')

    })
    
    
})