import React, { FC, useReducer, createContext } from 'react';

const initialState = {
  id: 0,
  email: '',
  isLoggein: false,
};

const reducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        isLoggein: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        id: 0,
        email: '',
        isLoggein: false,
      };
    default:
      return state;
  }
};

interface ContextProps {
  state: any;
  dispatch: ({ type, payload }: { type: string; payload?: any }) => void;
}

const Store = createContext({} as ContextProps);

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

export { Store, Provider };
