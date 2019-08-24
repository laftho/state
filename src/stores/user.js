import store, { defaultReducer } from './store.js';

import withUserRemoteActions from '../remotes/user.js';

const create = dispatch => name => dispatch({
  type: "create",
  id: name,
  name: name,
  reducer: (state, action) => ({
    ...state,
    [action.id]: {
      data: {
        name: action.name
      }
    }
  })
});

const remove = dispatch => id => dispatch({
  type: "remove",
  id: id,
  reducer: (state, action) => ({
    ...Object.keys(state)
      .filter(id => id !== action.id)
      .map(id => state[id])
  })
});

const actions = dispatch => ({
  create: create(dispatch),
  remove: remove(dispatch)
});

const { Context: UserStoreContext, withStore } = store({
  actions: withUserRemoteActions(actions)
});

const initialState = {
  guy: {
    data: {
      name: "guy"
    },
    loading: false
  }
};

const withUserStore = withStore(initialState);

export {
  UserStoreContext,
  withUserStore
};
