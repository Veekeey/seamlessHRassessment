class editAdmin {

    navigateToAdmin(){
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click()
    }


    clickEditIcon(){
        cy.get('.orangehrm-container').each(($el, index, $list)=>{
            cy.get('.oxd-table').each(($el, index, $list) =>{
                cy.get('.oxd-table-body').each(($el, index, $list)=>{
                  cy.get('.oxd-table-card').each(($el, index, $list) =>{
                    cy.get(".oxd-table-row").each(($el, index, $list)=>{
                        cy.get('.oxd-table-cell').each(($el, index, $list)=>{
                            cy.get('.oxd-table-cell-actions').each(($el, index, $list)=>{
                                cy.get('.oxd-icon-button').each(($el, index, $list)=>{
                                    // cy.get('.bi-pencil-fill').click();
                                    // cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)');
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

export default editAdmin