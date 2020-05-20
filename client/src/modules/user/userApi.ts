import request from '../request';

export type CreateUser = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export const fetchUserById = (userId: number) => request.get(`/api/users/${userId}`);

export const createUser = (user: CreateUser) => request.post('/api/users', { user });
