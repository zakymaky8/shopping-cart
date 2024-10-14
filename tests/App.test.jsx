import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import App from "../src/App";

describe("", () => {
    it("tests something", () => {
        expect(true).toBeTruthy()
    })
})

describe ("test app", () => {
    it("eee", () => {
        render(<App />)
        const h1 = screen.getByRole("heading");
        expect(h1).toBeInTheDocument()
    })
})