//  tutaj na początek identyczna struktura jak w Login.test.js, języki
// testowania mają podobną strukturę
// e2e testy sprawdza wszytsko a unit testy pojedyńcze komponenty
describe("Submit e2e", () => {
  // chcemy wykorzystywać cały czas to: "http://localhost:3000/"
  // i to służy do tego że przed każdym beforeEach(() => {})
  // beforeAll(() => {}) przed wszystkimi
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  //wcześniej zamiast it pisaliśmy test ale tutaj musi być it
  it("should chceck if the input and subbit button exist", () => {
    // chcemy wejśc do aplikacji którą będziemy sprawdzać, chcemy
    // sprawdzic całą stronę a nie pojedyńczą rzecz
    // cy.visit("http://localhost:3000/");
    // sprawdzamy czy input i button istnieją
    // get odczytujemy coś ze strony i chcemy to dostać
    cy.get("input#text").should("exist");
    cy.get('button[type="submit"]').should("exist");
  });
  it("should allows write text in the field", () => {
    // cy.visit("http://localhost:3000/");
    const fakeText = "Animals";
    //  tutaj czy na pewno ma wpisaną wartość fakeText
    cy.get("input#text").type(fakeText);
    // sprawdzamy czy input ma wpisany fakeText
    cy.get("input#text").should("have.value", fakeText);
  });
  //  w e2e nie testujemy wszystkiego tylko to co najważniejsze!

  it("should submit form and show the text", () => {});
});
