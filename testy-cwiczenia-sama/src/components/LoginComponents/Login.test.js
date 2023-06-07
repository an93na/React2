import { render, screen } from "@testing-library/react";
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
});
