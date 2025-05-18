import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import Slider from "../src/components/Slider";

test("creates and saves new card", async () => {
  const screen = render(<Slider images={["01.png", "02.png"]} />);

  const nextButton = screen.getByText(/next/i);

  await expect.element(nextButton).toBeInTheDocument();
  await expect.element(nextButton).toBeEnabled();
  await expect.element(screen.getByAltText(/01\.png/i)).toBeInTheDocument();

  await nextButton.click();

  await expect.element(nextButton).toBeDisabled();
  await expect.element(screen.getByAltText(/02\.png/i)).toBeInTheDocument();
});
