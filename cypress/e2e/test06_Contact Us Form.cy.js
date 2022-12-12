/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully

*/
describe('mesaj gonderme',()=>{

    it('kullanici mesaj gonderir',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        const resim='images.jfif'
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.get(':nth-child(2) > .form-control').type('esat') // isim
        cy.get(':nth-child(3) > .form-control').type('esat06@gmail.com')// mail
        cy.get(':nth-child(4) > .form-control').type('resim gonderme') // konu
        cy.get('#message').type('ekde resim gonderilmistir') // mesal
        cy.get(':nth-child(6) > .form-control').attachFile(resim) // dosya yukleme
        cy.get(':nth-child(7) > .btn').click() 
        cy.get('.status').should('have.text','Success! Your details have been submitted successfully.')
        cy.get('span').click()
        cy.anaSayfaDogrulama()




    })
    
    
})