class createEmployee {
    navigateToPim(){
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click()
    }

    clickAdd(){
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
    }

    enterFullName(firstName, middleName, lastName) {
        cy.get("input[placeholder='First Name']").type(firstName);
        cy.get("input[placeholder='Middle Name']").type(middleName);
        cy.get("input[placeholder='Last Name']").type(lastName);
    }

    clickSave(){
        cy.get('.oxd-button--secondary').click();
    }
}

export default createEmployee