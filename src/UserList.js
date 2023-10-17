import React from "react";

const UserList = ({ users }) => {
  const renderUsers = users.map((user, index) => {
    return (
      <tr key={`${user.email}${index}`}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderUsers}</tbody>
    </table>
  );
};

export default UserList;
