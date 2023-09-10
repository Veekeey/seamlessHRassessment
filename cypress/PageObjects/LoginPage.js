class Login 
{

    getUsername(username){
        cy.get("input[placeholder='Username']").type(username);
    }

    getPassword(password){
        cy.get("input[placeholder='Password']").type(password);
    }

    clickSubmit(){
        cy.get("button[type='submit']").click();
    }
}

export default Login