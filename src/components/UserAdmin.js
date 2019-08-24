import React from "react";

import UserList from './UserList.js';
import UserAdd from './UserAdd.js';

const UserAdmin = () => (
  <div>
    <h2>User Admin</h2>
    <UserAdd />
    <UserList />
  </div>
);

export default UserAdmin;
