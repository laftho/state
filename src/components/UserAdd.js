import React, { useContext, useState } from 'react';

import { UserStoreContext } from '../stores/user.js';

const UserAdd = () => {
  const { actions: { create }} = useContext(UserStoreContext);
  const [ name, setName ] = useState("");
  
  return (
    <div>
      <input type="text" placeholder="name" value={name} onChange={e => { setName(e.target.value); }} />
      <button onClick={() => create(name)}>Create</button>
    </div>
  );
};

export default UserAdd;
