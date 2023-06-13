//  tutaj na początek identyczna struktura jak w Login.test.js, języki
// testowania mają podobną strukturę
describe("Submit e2e", () => {
  //wcześniej zamiast it pisaliśmy test ale tutaj musi być it
  it("should chceck if the input and subbit button exist", () => {
    // chcemy wejśc do aplikacji którą będziemy sprawdzać, chcemy
    // sprawdzic całą stronę a nie pojedyńczą rzecz
    cy.visit("http://localhost:3000/");
    // sprawdzamy czy input i button istnieją
    // get odczytujemy coś ze strony i chcemy to dostać
    cy.get("input#text").should("exist");
    cy.get('button[type="submit"]').should("exist");
  });
});
// e2e testy sprawdza wszytsko a unit testy pojedyńcze komponenty
