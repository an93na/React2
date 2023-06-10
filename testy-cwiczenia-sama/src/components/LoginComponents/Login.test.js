import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

// co opisujemy
describe("Login component", () => {
  // tutsj tworzymy małe unit testy
  // sprawdzamy czy w tym placeholder jest ten "username"
  test("should be username text in placeholder", () => {
    // render mówi nam, że wchodzimy do pliku Login i wszystko co
    // jest to odczytujemy
    render(<Login />);

    // sprawdzamy czy ten placeholder ma wartość "username"
    // screen skanuje całe drzewo DOM, skanuje całą przeglądarke
    // get byPlaceholderText() - bierzemy to co jest w placeholderze
    const usernameInputPlaceholder = screen.getByPlaceholderText("username");

    // wersja z regex
    // (/username/i) - regex coś jak pisanie w "" ale lepiej tak
    // bo wtedy nie musimy myśleć czy piszemy z dużej czy z małej litery
    // const usernameInputPlaceholder = screen.getByPlaceholderText(/username/i)

    // zakończenie expet to co oczekujemy, chcemy coś co tutaj będzie
    // chcemy sprawdzić usernameInputPlaceholder czy istnieje w dokumencie
    // czyli toBeInDocument
    expect(usernameInputPlaceholder).toBeInTheDocument();
  });

  test("should be password text in placeholder", () => {
    render(<Login />);
    const passwordInputPlaceholder = screen.getByPlaceholderText("password");
    expect(passwordInputPlaceholder).toBeInTheDocument();
  });

  // sprawdzamy button czy on istnieje
  test("should rendered button", () => {
    render(<Login />);
    // łapiemy go przy pomocy getByRole('button) sprawdzamy czy istnieje
    const butonElement = screen.getByRole("button");
    expect(butonElement).toBeInTheDocument();
  });

  // gdy nie wpiszemy username i password nie możemy przejść dalej, czyli
  // testujemy czy takie coś działa
  // czyli jeśli coś wpiszemy to placeholder powinien zniknąć
  test("should be empty for username input", () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText("username");
    expect(usernameInput.value).toBe("");
  });

  // to co wyżej tylko dla password
  test("should be empty for passowrd input", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText("password");
    expect(passwordInput.value).toBe("");
  });

  // chcemy przetestować nasz przycisk aby był disable czyli nie aktywny
  test("should be button dissable", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  // sprawdzamy czy metoda onchange w input działa czy możemy coś pisać
  test("should be username input change", () => {
    render(<Login />);
    const usernameElement = screen.getByPlaceholderText("username");
    // tworzymy cos co może się pojawić podczas pisania
    const testValue = "test";
    // ten fireEvet.change coś zmienia ten usernameElement zostaje zmieniony
    // na testValue
    fireEvent.change(usernameElement, { target: { value: testValue } });
    // oczekujemy zę usernameElement.value to będzie wartość, która będzie
    // znajdować się w testValue
    expect(usernameElement.value).toBe(testValue);
  });

  test("should be password input change", () => {
    render(<Login />);
    const passwordElement = screen.getByPlaceholderText("password");
    const testValue = "test";
    fireEvent.change(passwordElement, { target: { value: testValue } });
    expect(passwordElement.value).toBe(testValue);
  });

  // testujemy żeby username i pasword miały jakies wartości, żeby
  // wtedy button będzie aktywny
  test("should be button activate when username and password have values", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    const usernameElement = screen.getByPlaceholderText("username");
    const passwordElement = screen.getByPlaceholderText("password");
    const testValue = "test";
    fireEvent.change(usernameElement, { target: { value: testValue } });
    fireEvent.change(passwordElement, { target: { value: testValue } });
    expect(buttonElement).not.toBeDisabled();
  });
});
