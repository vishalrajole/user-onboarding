import { screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render, history } from "../../utils/testUtils";
import Step1 from ".";

afterEach(cleanup);

describe("<Step1 />", () => {
  it("should display Step label", async () => {
    render(<Step1 />);

    // here we can also leverage snapshot tests instead of checking for each element
    expect(screen.queryByTestId("step1")).toBeInTheDocument();
    expect(screen.queryByTestId("next")).toBeInTheDocument();
    expect(screen.queryByTestId("language-selection")).toBeInTheDocument();
  });

  it("should call next Step and navigate to step2", async () => {
    render(<Step1 />);

    const nextButton = screen.queryByTestId("next");
    expect(nextButton).toBeInTheDocument();
    userEvent.click(nextButton);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe("/step2");
  });
});
