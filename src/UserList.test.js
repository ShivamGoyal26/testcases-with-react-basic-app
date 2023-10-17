import { within, render, screen } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    {
      name: "jane",
      email: "jane@jane.com",
    },
    {
      name: "sam",
      email: "sam@sam.com",
    },
  ];

  render(<UserList users={users} />);

  return {
    users,
  };
}

// test("render one row per user", () => {
//   const users = [
//     {
//       name: "jane",
//       email: "jane@jane.com",
//     },
//     {
//       name: "sam",
//       email: "sam@sam.com",
//     },
//   ];

//   const { container } = render(<UserList users={users} />);

//   // eslint-disable-next-line
//   const rows = container.querySelectorAll("tbody tr");

//   expect(rows).toHaveLength(2);
// });

test("render one row per user", () => {
  renderComponent();

  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const { users } = renderComponent();
  //   screen.logTestingPlaygroundURL(); // this will gives you the link for the playground in the terminal so that you can get the idea which query you might wanna use

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
