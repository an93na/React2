import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("should be username text in placeholder", () => {
    // wchodzimy do pliku Login
    render(<Login />);
    // sprawdzam czy napis 'username istnieje w palceholderze
    const usernameInputPlaceholder = screen.getByPlaceholderText("username");
    // oczekuje, że to powyżej znajduje się na naszje stronie
    expect(usernameInputPlaceholder).toBeInTheDocument();
  });

  test("should be password text in placeholder", () => {
    render(<Login />);
    const passwordInputPlaceholder = screen.getByPlaceholderText("password");
    expect(passwordInputPlaceholder).toBeInTheDocument();
  });

  test("should rendered button", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
