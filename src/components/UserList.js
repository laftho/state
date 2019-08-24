import React, { useContext } from 'react';

import { UserStoreContext } from '../stores/user.js';
import User from './User.js';

const UserList = () => {
  const { store: users } = useContext(UserStoreContext);
  
  return (
    <ul>
      {Object.keys(users).map(id => <User key={id} id={id} />)}
    </ul>
  );
};

export default UserList;
