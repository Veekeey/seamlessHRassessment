class editEmployee {

    navigateToPim(){
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click()
    }

    clickonEditIcon(){
        cy.get(".orangehrm-container").each(($el, index, $list) => {
            cy.get('.oxd-table').each(($el, index, $list) =>{
                cy.get('.oxd-table-body').each(() =>{
                    cy.get('.oxd-table-card').each(() =>{
                        cy.get('.oxd-table-row oxd-table-row--with-border oxd-table-row--clickable').each(() =>{
                            cy.get('.oxd-table-cell oxd-padding-cell').each(() =>{
                                cy.get('.oxd-table-cell-actions').each(() =>{
                                    cy.get('.xd-icon-button').each(() =>{
                                        // cy.get('oxd-icon bi-pencil-fill').click();
                                        //get edit icon and click
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    editField(){

    }

    clickSave(){
        
    }
}

export default editEmployee