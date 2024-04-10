describe("Login , page size", () => {
    it("page size change", () =>{
        cy.visit("https://idms.test.senegal.netsetglobal.rs/home");
        cy.get("#username").type("matijal");
        cy.get("#password").type("m");
        cy.get("#kc-login").click();
        cy.get(".color-primary.ng-star-inserted").should("contain.text", "Matija Loncarevic, Welcome to VeriCORE EIS");
        cy.get(".mat-menu-trigger link dropdown ng-star-inserted").contains("Applications").click();
        cy.get(".mat-focus-indicator mat-menu-item ng-tns-c236-0 ng-star-inserted").eq(1).click();
        cy.get("#cdk-drop-list-0").find("tr").not(".mat-header-row cdk-header-row ng-star-inserted").then(rows => {
            expect(rows.length).to.equal(10);
        cy.get(".mat-select-arrow ng-tns-c153-32").click();
        cy.get(".mat-option mat-focus-indicator ng-tns-c153-32 ng-star-inserted mat-selected mat-active").click();
        cy.get("#cdk-drop-list-0").find("tr").not(".mat-header-row cdk-header-row ng-star-inserted").then(rows => {
            expect(rows.length).to.equal(5);
        });
        });
        
            });
        
    

    });

