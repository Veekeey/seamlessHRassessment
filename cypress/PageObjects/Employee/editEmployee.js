class editEmployee {

    navigateToPim(){
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click()
    }

    clickonEditIcon(){
        cy.get(".orangehrm-container").each(($el, index, $list) => {
            
        })
    }

    editField(){

    }

    clickSave(){
        
    }
}

export default editEmployee