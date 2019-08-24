const createRemoteFinish = dispatch => (id, data) => dispatch({
  type: "createRemoteFinish",
  id: id,
  reducer: (state, action) => ({
    ...state,
    [action.id]: {
      ...state[action.id],
      data: data,
      loading: false
    }
  })
});

const createRemote = (dispatch, finish) => name => {
  const id = name;
  
  setTimeout(() => {
    finish(id, {
      name: name
    });
  }, 1000);

  dispatch({
    type: "createRemote",
    id: id,
    reducer: (state, action) => ({
      ...state,
      [action.id]: {
        ...state[action.id],
        loading: true
      }
    })
  });
};

export const withUserRemoteActions = actions => dispatch => {
  const baseActions = actions(dispatch);
  
  const finish = createRemoteFinish(dispatch);
  const request = createRemote(dispatch, finish);
  
  return {
    ...baseActions,
    create: name => {
      baseActions.create(name);
      request(name);
    }
  };
};

export default withUserRemoteActions;
