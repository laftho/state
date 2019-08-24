import React, { useContext, useState } from 'react';

import { UserStoreContext } from '../stores/user.js';

const UserAdd = () => {
  const { store: users, actions: { create }} = useContext(UserStoreContext);
  const [ name, setName ] = useState("");
  
  const user = users[name] || {};
  
  return (
    <div>
      <input type="text" placeholder="name" value={name} onChange={e => { setName(e.target.value); }} />
      <button onClick={() => create(name)} disabled={user.loading} >Create</button>
    </div>
  );
};

export default UserAdd;
