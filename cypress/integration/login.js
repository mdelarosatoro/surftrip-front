describe("When on the login page", () => {
    it("It should login", () => {
        //register surfcamp
        cy.visit("http://localhost:4200/register/surfcamp");

        cy.get("#name").click().type("Test Cypress");
        cy.get("#longitude").click().type(-112.48045953410724);
        cy.get("#latitude").click().type(26.26557145628991);
        cy.get("#email").click().type("cypress@cypress.com");
        cy.get("#username").click().type("cypress");
        cy.get("#password").click().type("cypress");
        cy.get("#confirm-password").click().type("cypress");
        cy.get("#beginner").click();
        cy.get("#intermediate").click();
        cy.get("#advanced").click();
        cy.get("#expert").click();
        cy.get("#description").click().type("Test surfcamp with cypress");

        cy.visit("http://localhost:4200/login");

        cy.url().should("include", "/login");

        cy.get("#surfcamp").click();
        cy.get("#username").click().type("cypress");
        cy.get("#password").click().type("cypress");
        cy.get("button").click();

        cy.url().should("include", "/surfcamp-dashboard");

        cy.wait(3000);

        cy.get("a").contains("Packages").click();

        cy.url().should("include", "/surfcamp-packages");

        cy.get("a").contains("Create Package").click();

        cy.url().should("include", "/surfcamp-packages/create");

        const fixtureFile = "Surftrip_Logo-removebg-preview.png";
        cy.get("#username").click().type("cypress");
        cy.get("#price").click().type(999);
        cy.get("#days").click().type(10);
        cy.get("#description").click().type("Cypress Package");
        cy.get("#icon").attachFile(fixtureFile);
        // cy.get("button").contains("Create").click();

        cy.wait(1000);

        cy.url().should("include", "/surfcamp-packages");

        cy.get("button").contains("Back").click();

        cy.get("a").contains("Customers").click();

        cy.url().should("include", "/surfcamp-customers");

        cy.get("button").contains("Back").click();

        cy.get("a").contains("Surfcamp Info").click();

        cy.url().should("include", "/surfcamp-info");

        cy.get(".surfcamp__info")
            .eq(0)
            .should(($name) => {
                expect($name).to.contain("Test Cypress");
            });
        cy.get(".surfcamp__info")
            .eq(1)
            .should(($location) => {
                expect($location).to.contain("Mexico");
            });
        cy.get(".surfcamp__info")
            .eq(2)
            .should(($skill) => {
                expect($skill).to.contain("Beginner");
            });
        cy.get(".surfcamp__info")
            .eq(3)
            .should(($skill) => {
                expect($skill).to.contain("Intermediate");
            });
        cy.get(".surfcamp__info")
            .eq(4)
            .should(($skill) => {
                expect($skill).to.contain("Advanced");
            });
        cy.get(".surfcamp__info")
            .eq(5)
            .should(($skill) => {
                expect($skill).to.contain("Expert");
            });
        cy.get(".surfcamp__info")
            .eq(6)
            .should(($description) => {
                expect($description).to.contain("Test surfcamp with cypress");
            });
        cy.get(".surfcamp__icon").click();
        cy.get("#description").click().type(" edit");
        cy.get(".surfcamp__icon").eq(0).click();
        cy.get(".surfcamp__info")
            .eq(6)
            .should(($description) => {
                expect($description).to.contain("edit");
            });

        cy.get("a").contains("Gallery").click();

        cy.url().should("include", "/gallery");

        cy.get(".gallery__add-icon").click();

        cy.url().should("include", "/add-photo");

        cy.get("#photo").attachFile(fixtureFile);
        cy.get("#description").click().type("Test Photo");
        cy.get("button").contains("Add Photo").click();

        cy.url().should("include", "/gallery");
        cy.get(".photo__description").should(($description) => {
            expect($description).to.contain("Test Photo");
        });
        cy.wait(500);
        cy.get(".photo__delete-icon").click();

        cy.get("button").contains("Back").click();

        cy.url().should("include", "/surfcamp-info");

        cy.get("a").contains("Reviews").click();

        cy.url().should("include", "/reviews");

        cy.get("a").contains("Logout").click();

        //USER ROUTE
        cy.visit("http://localhost:4200/register/user");

        cy.get("#name").click().type("Test Cypress");
        cy.get("#lastName").click().type("Test Cypress");
        cy.get("#photo").click().attachFile(fixtureFile);
        cy.get("#email").click().type("cypress@cypress.com");
        cy.get("#username").click().type("cypress");
        cy.get("#password").click().type("cypress");
        cy.get("#confirm-password").click().type("cypress");

        cy.visit("http://localhost:4200/login");

        cy.url().should("include", "/login");

        cy.visit("http://localhost:4200/login");

        cy.get("#username").click().type("cypress");
        cy.get("#password").click().type("cypress");
        cy.get("button").click();

        cy.url().should("include", "/surfer-dashboard");

        cy.get("a").contains("World Map").click();
        cy.url().should("include", "/world-map");
        cy.get("button").contains("Back").click();

        cy.wait(500);

        cy.get("a").contains("Search Surfcamps").click();
        cy.url().should("include", "/surfcamp-search");
        cy.get(".surfcamp__name").contains("Test Cypress").click();

        cy.wait(2000);

        cy.get("#link-packages").click();
        cy.url().should("include", "/surfcamp-packages");
        cy.get(".package__info-container").click();

        cy.get("button").contains("Back").click();
        cy.get("button").contains("Back").click();

        cy.wait(2000);

        cy.get("#link-reviews").click();
        cy.url().should("include", "/surfcamp-reviews");
        cy.get("a").contains("Add Comment").click();
        cy.get("#star5").click();
        cy.get("#comment").click().type("Had a great time");
        cy.get("button").contains("Submit").click();

        cy.wait(1000);

        cy.get("button").contains("Back").click();

        cy.wait(2000);

        cy.get("#link-gallery").click();

        cy.url().should("include", "/surfcamp-gallery");

        cy.get("button").contains("Back").click();

        cy.url().should("include", "/surfcamp-details");

        cy.get("#link-info").click();

        cy.url().should("include", "/surfcamp-info");

        cy.get("button").contains("Back").click();

        cy.url().should("include", "/surfcamp-details");

        cy.get("a").contains("Package Search").click();

        cy.get(".package__info-container").eq(4).click();

        cy.url().should("include", "/surfcamp-packages");
        cy.get(".package__button").click();

        cy.get("a").contains("Logout").click();
    });
});
