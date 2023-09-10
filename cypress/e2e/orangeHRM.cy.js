
import Login from '../PageObjects/LoginPage'
// import CreateEmployee from '../PageObjects/Employee/createEmployee'
// import EditEmployee from '../PageObjects/Employee/editEmployee'
import CreateAdmin from '../PageObjects/Admin/createAdmin'


describe('assessment', () => {

  before('login', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")

    const login = new Login();
    login.getUsername("Admin");
    login.getPassword("admin123");
    login.clickSubmit();

  })


  // it('create employee', () =>{
  //   const employee = new CreateEmployee();

  //   employee.navigateToPim();
  //   employee.clickAdd();
  //   employee.enterFullName("Joy", "Eboh", "Adikwu");
  //   employee.clickSave();
  // })

  // it('edit employee', ()=>{
  //   const editEmp = new EditEmployee()

  //   editEmp.navigateToPim();
  //   editEmp.selectEmployee();

  // })

  it('create admin', () =>{
    const createAdmin = new CreateAdmin();

    createAdmin.navigateToAdmin();
    createAdmin.clickAdd();
    // createAdmin.selectUserRole();
    // createAdmin.getEmployeeName("Fiona Grace");
    // createAdmin.selectStatus();
    createAdmin.chooseUsername("France");
    createAdmin.choosePassword("Aver1234567");
    createAdmin.confirmPassword("Aver1234567");
    // createAdmin.clickSave();
  })

})