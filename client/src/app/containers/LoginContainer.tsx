import React, { FC, useState, ChangeEvent, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { login } from '../../modules/session';
import { Login as LoginComponent } from '../components/pages/Login';
import { Store } from '../store';

export const Login: FC<RouteComponentProps> = ({ history }) => {
  const { dispatch } = useContext(Store);
  const [values, setValues] = useState({ email: '', password: '', isRemember: false });

  const handleChangeInput = (name: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [name]: event.target.value });

  const handleChangeRemember = () => setValues({ ...values, isRemember: !values.isRemember });

  const handleSubmit = async () => {
    try {
      const user = await login(values);
      dispatch({
        type: 'LOGIN',
        payload: { id: user.data.id, email: user.data.email, token: user.data.remember_digest },
      });
      history.push(`/users/${user.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginComponent
      onSubmit={handleSubmit}
      onChangeRemember={handleChangeRemember}
      onChangeInput={handleChangeInput}
      values={values}
    />
  );
};
