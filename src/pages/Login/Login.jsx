import { useDispatch } from 'react-redux';
import { BtnLogin, FormLogin, Input, Label, TitleLogin } from './Login.styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logInUser } from '../../redux/auth/auth-operation';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState({ email: false, password: false });

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };

    if (user.email === '') {
      setQuery(prev => ({ ...prev, email: true }));
      return;
    }
    if (user.password === '') {
      setQuery(prev => ({ ...prev, password: true }));
      return;
    }

    dispatch(logInUser(user));
    navigate('/contacts');
  };

  return (
    <>
      <TitleLogin>Welcome!</TitleLogin>
      <FormLogin onSubmit={handleSubmit}>
        <Label htmlFor="useremail">Email</Label>
        <Input
          autoComplete="off"
          type="text"
          id="useremail"
          name="email"
          required
          error={query.email}
        />
        <Label htmlFor="userpassword">Password</Label>
        <Input
          autoComplete="off"
          type="password"
          name="password"
          id="userpassword"
          required
          error={query.password}
        />
        <BtnLogin type="submit">Log in</BtnLogin>
      </FormLogin>
    </>
  );
}

export default Login;
