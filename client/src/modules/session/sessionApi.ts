import request from '../request';

export type LoginProps = {
  email: string;
  password: string;
};

export const login = (session: LoginProps) => request.post('/api/login', { session });

export const rememberLogin = () => request.get('/api/remember', { withCredentials: true });

export const logout = () => request.delete('/api/logout');
