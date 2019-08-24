import React, { useContext } from "react";

import { UserStoreContext } from '../stores/user.js';

const User = ({ id }) => {
  const { store: users, actions: { remove }} = useContext(UserStoreContext);

  return (
   <li>{users[id].name} <button onClick={() => remove(id)}>Delete</button></li>
  );
};

export default User;
