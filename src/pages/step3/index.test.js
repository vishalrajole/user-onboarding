import { waitFor, screen, getByTestId } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render, history } from "../../utils/testUtils";
import Step3 from ".";

const data = {
  data: {
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    id: 3,
    last_name: "Wong",
  },

  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};

const noUserData = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [],
  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};
afterEach(() => {
  jest.restoreAllMocks();
});

describe("<Step3 />", () => {
  it("should render correct number of user list", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });
    render(<Step3 />);

    await waitFor(() => expect(screen.getAllByTestId("user")).toHaveLength(1));
  });

  it("should verify user details", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });
    render(<Step3 />);
    await waitFor(() =>
      expect(screen.getByText("Welcome Emma to Kadmos")).toBeInTheDocument()
    );
  });

  it("should  navigate to step2 on back button click", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });
    render(<Step3 />);

    await waitFor(() => screen.queryByTestId("back"));

    const backButton = screen.queryByTestId("back");

    expect(backButton).toBeInTheDocument();
    userEvent.click(backButton);
    expect(history.location.pathname).toBe("/step2");
  });
});
