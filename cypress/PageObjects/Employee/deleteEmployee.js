class deleteEmployee {


    navigateToPim(){
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click()
    }

    clickonDeleteIcon(){
        cy.get(".orangehrm-container").each(($el, index, $list) => {
            cy.get('.oxd-table').each(($el, index, $list) =>{
                cy.get('.oxd-table-body').each(($el, index, $list) =>{
                    cy.get('.oxd-table-card').each(($el, index, $list) =>{
                        cy.get('.oxd-table-row').each(($el, index, $list) =>{
                            cy.get('.oxd-table-cell').each(($el, index, $list) =>{
                                cy.get('.oxd-table-cell-actions').each(($el, index, $list) =>{
                                    cy.get('.xd-icon-button').each(($el, index, $list) =>{
                                        // get delete icon and click
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    confirmDelete(){

    }

}

export default deleteEmployee