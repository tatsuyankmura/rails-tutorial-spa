import React, { FC, useEffect, useContext } from 'react';
import { App as AppComponent } from '../components/App';
import { rememberLogin } from '../../modules/session';
import { Store } from '../store';

export const App: FC = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    (async () => {
      try {
        const user = await rememberLogin();
        dispatch({
          type: 'LOGIN',
          payload: { id: user.data.id, email: user.data.email, token: user.data.remember_digest },
        });
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  return <AppComponent />;
};
