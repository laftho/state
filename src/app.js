import React from 'react';

import { withUserStore } from './stores/user.js';

import UserAdmin from './components/UserAdmin.js';

export const App = () => (
  <div>
    <div>hello world</div>
    <UserAdmin />
  </div>
);

export default withUserStore({})(App);
