class createAdmin {


    navigateToAdmin(){
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click()
    }

    clickAdd(){
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
    }

    selectUserRole(){
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown').each(($el, index, $list) =>{
            
            cy.get('.oxd-select-dropdown > :nth-child(2)').click();
        })
        
    }

    getEmployeeName(name){
        cy.get("input[placeholder='Type for hints...']").type(name);
        cy.get('.oxd-autocomplete-dropdown > :nth-child(2)').each(($el, index, $list) =>{
            cy.log($el.text())
            if($el.text() == 'Joe Root'){
                cy.wrap($el).click();
            }
        })
        
    }

    selectStatus(){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-wrapper').each(($el, index, $list) => {

            cy.get('.oxd-select-dropdown > :nth-child(2)').click();
        })
    }


    chooseUsername(username){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    }

    choosePassword(password){
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    }

    confirmPassword(confirm){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(confirm);
    }

    clickSave(){
        cy.get("button[type='submit']").click();
    }
}

export default createAdmin