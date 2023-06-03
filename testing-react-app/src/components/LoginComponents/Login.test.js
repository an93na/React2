import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {

    test("should be username text in placeholder", () => {
        // wchodzimy do pliku Login
        render(<Login />);
        // sprawdzamy czy napis 'username' wystepuje w placeholderze
        const usernameInputPlaceholder = screen.getByPlaceholderText("username");
        // oczekuje, że to powyżej znajduje się na naszej stronie
        expect(usernameInputPlaceholder).toBeInTheDocument();
    });

    test("should be password text in placeholder", () => {
        render(<Login />);
        const passwordInputPlaceholder = screen.getByPlaceholderText("password");
        expect(passwordInputPlaceholder).toBeInTheDocument();
    });
    
    test("should rendered button", () => {
        render(<Login />);
        // getByRole - sprawdzamy role elementu czyli czy może istnieć button, input, form
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
    });

    test("should be empty for username input", () => {
        render(<Login />);
        const usernameInput = screen.getByPlaceholderText("username");
        expect(usernameInput.value).toBe("");
    });
    test("should be empty for password input", () => {
        render(<Login />);
        const PasswordInput = screen.getByPlaceholderText("password");
        expect(PasswordInput.value).toBe("");
    });
});