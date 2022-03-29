// login.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("When on the login page", () => {
    it("It should login", () => {
        cy.visit("http://localhost:4200/login");

        cy.get("#username").click().type("clara12");
        cy.get("#password").click().type("123456");
        cy.get("button").click();

        cy.url().should("include", "/surfer-dashboard");

        cy.get("a").contains("World Map").click();
        cy.url().should("include", "/world-map");
        cy.get("button").contains("Back").click();

        cy.wait(500);

        cy.get("a").contains("Search Surfcamps").click();
        cy.url().should("include", "/surfcamp-search");
        cy.get(".surfcamp__name").contains("Salina Cruz Surf Camp").click();

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

        cy.get("button").contains("Back").click();

        cy.wait(2000);

        cy.get("#link-gallery").click();

        // cy.url().should("include", "/world-map");
        // cy.get("button").contains("Back").click();
    });
});
