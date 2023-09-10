
import Login from '../PageObjects/LoginPage'
import CreateEmployee from '../PageObjects/Employee/createEmployee'
import EditEmployee from '../PageObjects/Employee/editEmployee'
import DeleteEmployee from '../PageObjects/Employee/deleteEmployee'
import CreateAdmin from '../PageObjects/Admin/createAdmin'
import EditAdmin from '../PageObjects/Admin/editAdmin'
import DeleteAdmin from '../PageObjects/Admin/deleteAdmin'


describe('Admin and Employee features', () => {

  before('login', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")

    const login = new Login();
    login.getUsername("Admin");
    login.getPassword("admin123");
    login.clickSubmit();

  })

// Employee feature

  it('create employee', () =>{
    const createEmp = new CreateEmployee();

    createEmp.navigateToPim();
    createEmp.clickAdd();
    createEmp.enterFullName("Joy", "Eboh", "Adikwu");
    createEmp.clickSave();
  })


  it('edit employee', ()=>{
    const editEmp = new EditEmployee()

    editEmp.navigateToPim();
    editEmp.clickonEditIcon();
    editEmp.editField();
    editEmp.clickSave();

  })


  it('delete employee', () =>{
    const delEmp = new DeleteEmployee;

    delEmp.navigateToPim();
    delEmp.clickonDeleteIcon();
    delEmp.confirmDelete();

  })





  // Admin feature

  it.only('create admin', () =>{
    const createAdmin = new CreateAdmin();

    createAdmin.navigateToAdmin();
    createAdmin.clickAdd();
    createAdmin.selectUserRole();
    createAdmin.chooseUsername("Jayjayjay");
    createAdmin.choosePassword("Jay1234567");
    createAdmin.confirmPassword("Jay1234567");
    createAdmin.selectStatus();
    createAdmin.getEmployeeName("Jo");
    createAdmin.clickSave();
  })


  it('edit admin', () =>{
    const editAdmin = new EditAdmin;

    editAdmin.navigateToAdmin();
    editAdmin.clickEditIcon();
    editAdmin.editField();
    editAdmin.clickSave();
  })


  it('delete admin', () =>{
    const delAdmin = new DeleteAdmin;

    delAdmin.navigateToAdmin();
    delAdmin.clickonDeleteIcon();
    delAdmin.confirmDelete();
  })
})