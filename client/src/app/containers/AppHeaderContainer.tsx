import React, { FC, useContext } from 'react';
import { AppHeader as AppHeaderComponent } from '../components/parts/AppHeader';
import { Store } from '../store';
import { logout } from '../../modules/session';

export const AppHeaderContainer: FC = () => {
  const { state, dispatch } = useContext(Store);

  const handleLogout = async () => {
    try {
      await logout();
      dispatch({ type: 'LOGOUT' });
      location.href = '/';
    } catch (error) {
      console.log(error);
    }
  };

  return <AppHeaderComponent isLoggein={state.isLoggein} id={state.id} logout={handleLogout} />;
};
