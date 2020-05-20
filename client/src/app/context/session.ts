import { createContext } from 'react';

export const SessionContext = createContext({
  id: 0,
  email: '',
  isLoggedin: false,
});
