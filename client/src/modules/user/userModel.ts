export type TypeUser = {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
  password_digest: string;
};

export const initialUser = {
  id: 0,
  email: '',
  name: '',
  created_at: '',
  updated_at: '',
  password_digest: '',
};

export type TypeCreateUser = {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
};

export const createInitialUser = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};
