import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DisplayImages from "../src/components/DisplayImages";
import { carauselImgInfo } from "../src/components/dataStaff";

describe("testing the image carousel", () => {
    it("checks if there is image in the carousel img collection", () => {
        render(<DisplayImages />)

        const carouselContainer = screen.getByTestId("image-test")
        const urlCollections = carauselImgInfo.map(info => info.url)
        console.log(carouselContainer.style.backgroundImage)
        const url = carouselContainer.style.backgroundImage.slice(4, -1)
        console.log("." + url)
        expect(urlCollections).toContain("." + url)
    })
})