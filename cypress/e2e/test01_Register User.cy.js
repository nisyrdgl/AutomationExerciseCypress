import { faker } from '@faker-js/faker';
import { name } from 'commander';
/*
Test Case 1: Register User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
     
*/

describe('Register User',()=>{
   
    it('test 1',()=>{
        cy.visit('https://www.automationexercise.com/')

        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('contain.text','Test Cases')
        
       
        cy.registerUser()// kullanici kayit olusturur

        cy.get('.pull-right > .btn').click()
        cy.get('b').should('have.text','Esat06')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
       cy.get('b').should('contain.text','Account Deleted!')
       cy.get('.pull-right > .btn').click()




    })
    
   
})