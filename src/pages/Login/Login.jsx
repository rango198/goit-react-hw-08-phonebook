import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loader from 'components/Loader/Loader';
import { loginThunk } from 'components/redux/Auth/auth-thunk';
import { authSelector } from 'components/redux/Auth/authSelector';
import { BtnLogin, FormLogin, Input, Label } from './Login.styled';

function Login() {
  const [info, setInfo] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password } = info;

  const { isLoading } = useSelector(authSelector);

  const handleChange = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const submit = e => {
    e.preventDefault();
    dispatch(loginThunk(info))
      .unwrap()
      .then(() => {
        navigate('/contacts');
        setInfo({
          email: '',
          password: '',
        });
        toast.success('We are glad to see you again!', {
          duration: 4000,
        });
      })
      .catch(() =>
        toast.error('Incorrect email address or password', {
          duration: 4000,
        })
      );
  };

  return (
    <>
      {isLoading && <Loader />}
      <h2>You are welcome!</h2>
      <FormLogin onSubmit={submit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <Label htmlFor=" password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={handleChange}
        />
        <BtnLogin type="submit">Log in</BtnLogin>
      </FormLogin>
    </>
  );
}

export default Login;
