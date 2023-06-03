import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {

    test("should be username text in placeholder", () => {
        // wchodzimy do pliku Login
        render(<Login />);
        // sprawdzam 
        const usernameInputPlaceholder = screen.getByPlaceholderText("username");
        // 
        expect(usernameInputPlaceholder).toBeInTheDocument();
    })
});