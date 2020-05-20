import React, { FC, useState, ChangeEvent, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { createInitialUser, createUser } from '../../modules/user';
import { SignUp as SignUpComponent } from '../components/pages/SignUp';
import { Store } from '../store';

export const SignUp: FC<RouteComponentProps> = ({ history }) => {
  const { dispatch } = useContext(Store);
  const [values, setValues] = useState(createInitialUser);

  const handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [name]: event.target.value });

  const handleSubmit = async () => {
    try {
      const user = await createUser(values);
      dispatch({ type: 'LOGIN', payload: { id: user.data.id, email: user.data.email } });
      history.push(`/users/${user.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return <SignUpComponent onSubmit={handleSubmit} onChange={handleChange} values={values} />;
};
