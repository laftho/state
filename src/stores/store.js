import React, { useReducer } from "react";

export const defaultReducer = (state, action) => action.reducer ? action.reducer(state, action) : state;

const withStore = (Context, actions, reducer) => initialState => BaseComponent => props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
      <Context.Provider value={{ store: state, actions: actions(dispatch)}}>
        <BaseComponent {...props} />
      </Context.Provider>
    );
};

const store = ({ actions, reducer = defaultReducer }) => {
  const Context = React.createContext();
  
  return {
    Context: Context,
    withStore: withStore(Context, actions, reducer)
  };
};

export default store;
