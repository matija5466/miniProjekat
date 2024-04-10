
describe("Login", () => {
  it("valid user,valid password", () => {
    cy.visit("https://idms.test.senegal.netsetglobal.rs/home");
    cy.get("#username").type("matijal");
    cy.get("#password").type("m");
    cy.get("#kc-login").click();
    cy.get(".color-primary.ng-star-inserted").should("contain.text", "Matija Loncarevic, Welcome to VeriCORE EIS");
  });

  it("valid user1,valid password")
  cy.visit("https://idms.test.senegal.netsetglobal.rs/home");
  cy.get("#username").type("MATIJAL");
  cy.get("#password").type("m");
  cy.get("#kc-login").click();
  cy.get(".color-primary.ng-star-inserted").should("contain.text", "Matija Loncarevic, Welcome to VeriCORE EIS");
});

  it("Blank", () => {
    cy.visit("https://idms.test.senegal.netsetglobal.rs/home");
    //cy.get("#username").type("");
    //cy.get("#password").type("");
    cy.get("#kc-login").click();
    cy.get("#input-error").should("contain.text", "Invalid username or password");

  });

  it("valid user,invalid password1",() => {

    cy.visit("https://idms.test.senegal.netsetglobal.rs/home")
    cy.get("#username").type("matijal");
    cy.get("#password").type("M");
    cy.get("#kc-login").click();
    cy.get("#input-error").should("contain.text", "Invalid username or password");
  });

  it("valid user1,invalid password2", () => {
    cy.visit("https://idms.test.senegal.netsetglobal.rs/home");
    cy.get("#username").type("Matijal");
    cy.get("#password").type("L");
    cy.get("#kc-login").click();
    cy.get("input-error").should("contain.text", "Invalid username or password") 
  });

  it("invalid user1,valid password", () => {
    cy.visit("https://idms.test.senegal.netsetglobal.rs/home");
    cy.get("#username").type("matijam");
    cy.get("#password").type("m");
    cy.get("#kc-login").click();
    cy.get("#input-error").should("cointain.text", "Invalid username or password");
  });

  it("invalid user1,invalid password1", () => {
    cy.visit("https://idms.test.senegal.netsetglobal.rs/home");
    cy.get("#username").type("matijam");
    cy.get("#password").type("M");
    cy.get("#kc-login").click();
    cy.get("#input-error").should("contain.text", "Invalid username or password");
  });




  









