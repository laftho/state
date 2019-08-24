import store from './store.js';

const create = dispatch => name => dispatch({
  type: "create",
  id: name,
  name: name,
  reducer: (state, action) => ({
    ...state,
    [action.id]: {
      name: action.name
    }
  })
});

const remove = dispatch => id => dispatch({
  type: "remove",
  id: id,
  reducer: (state, action) => ({
    ...Object.keys(state)
      .filter(id => id !== action.id)
  })
});

export const { Context: UserStoreContext, withStore: withUserStore } = store({
  actions: dispatch => ({
    create: create(dispatch),
    remove: remove(dispatch)
  })
});
