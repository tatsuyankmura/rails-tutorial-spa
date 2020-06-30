import React, { FC, useState, ChangeEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { createInitialUser } from '../../modules/user';
import { UserEdit as UserEditComponent } from '../components/pages/UserEdit';

export const UserEdit: FC<RouteComponentProps> = () => {
  const [values, setValues] = useState(createInitialUser);

  const handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [name]: event.target.value });

  const handleSubmit = async () => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return <UserEditComponent onSubmit={handleSubmit} onChange={handleChange} values={values} />;
};
