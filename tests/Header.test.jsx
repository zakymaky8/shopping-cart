import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "../src/components/Header";
// import Nav from "../src/components/Nav";

describe("Testing all in header component", () => {
    // it("Snapshot test for header component", () => {
    //     const {asFragment} = render(<Header />)

    //     expect(asFragment()).toMatchSnapshot()
    // })
    it("check if there is brand name in the header section", () => {
        render(<Header />)

        const heading = screen.getByText(/shop a seek/i)
        expect(heading).toBeInTheDocument()

    })

    it("check if there are navigation options", () => {
        render(<Header />)
        const ul = screen.getByTestId("navs-test");
        const textsOfNavs = Array.from(ul.children).map(e=>e.textContent)
        expect(textsOfNavs).toContain("Log in", "Home", "Shop")
    })
})