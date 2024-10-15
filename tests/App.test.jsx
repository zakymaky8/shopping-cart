import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import App from "../src/App";

describe("", () => {
    it("tests something", () => {
        expect(true).toBeTruthy()
    })
})

describe ("test app", () => {
    it("tests if the heading is in the document", () => {
        render(<App />)
        const h1 = screen.getByRole("heading");
        expect(h1).toBeInTheDocument()
    })
})