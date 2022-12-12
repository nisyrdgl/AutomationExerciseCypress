/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible

*/

describe('login olma',()=>{

    it('pozitif login',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.automationLogin('esat06@gmail.com','123456')
        cy.get('b').should('have.text','Esat06')
       
    })
  

 
})