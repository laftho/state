import React, { useContext } from "react";

import { UserStoreContext } from '../stores/user.js';

const User = ({ id }) => {
  const { store: users, actions: { remove }} = useContext(UserStoreContext);
  
  const { loading, data: { name } } = users[id];

  return (
   <li>{name} {loading ? "*" : ""}<button onClick={() => remove(id)} disabled={loading}>Delete</button></li>
  );
};

export default User;
