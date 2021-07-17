import { waitFor, screen, getByTestId } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render, history } from "../../utils/testUtils";
import Step2 from ".";

const data = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
  ],
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

describe("<Step2 />", () => {
  it("should render correct number of user list", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });
    render(<Step2 />);

    await waitFor(() =>
      expect(screen.getAllByTestId(/user-/i)).toHaveLength(1)
    );
  });

  it("should verify user details", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });
    render(<Step2 />);
    await waitFor(() => expect(screen.getByText("George")).toBeInTheDocument());
  });

  it("should  navigate to step1 on back button click", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(data),
    });
    render(<Step2 />);

    await waitFor(() => screen.queryByTestId("back"));

    const backButton = screen.queryByTestId("back");

    expect(backButton).toBeInTheDocument();
    userEvent.click(backButton);
    expect(history.location.pathname).toBe("/step1");
  });

  it("should render no user message if user data is empty", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(noUserData),
    });
    render(<Step2 />);

    await waitFor(() =>
      expect(screen.getByTestId("noUserFound")).toBeInTheDocument()
    );
  });
});
