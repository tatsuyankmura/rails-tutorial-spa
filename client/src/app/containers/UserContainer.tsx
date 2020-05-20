import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { fetchUserById, initialUser } from '../../modules/user';
import { User as UserComponent } from '../components/pages/User';

type Params = { id?: string };

export const User: FC<RouteComponentProps<Params>> = ({ match, history }) => {
  const { id } = match.params;
  const [user, setUser] = useState(initialUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const _user = await fetchUserById(Number(id));
        setUser(_user.data);
        setIsLoading(false);
      } catch (e) {
        history.push('/');
        setIsLoading(false);
      }
    })();

    return () => setUser(initialUser);
  }, []);

  return isLoading ? <div>Loading</div> : <UserComponent user={user} />;
};
