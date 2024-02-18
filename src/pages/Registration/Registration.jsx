import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/auth-operation';
import {
  BtnReg,
  FormReg,
  InputReg,
  LabelReg,
  TitleReg,
} from './Registarstion.styled';

function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState({ name: false, email: false });
  const [passwordValid, setPasswordValid] = useState({ password: false });

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    if (user.name === '') {
      setQuery(prev => ({ ...prev, name: true }));
      return;
    }
    if (user.email === '') {
      setQuery(prev => ({ ...prev, email: true }));
      return;
    }

    if (user.password.length < 7 && user.password === '') {
      setPasswordValid(prev => ({ ...prev, password: true }));
      return;
    }
    console.log('form reg user: ', user);
    dispatch(registerUser(user));
    navigate('/login');
  };

  return (
    <>
      <TitleReg>Wecome to form signUp!</TitleReg>
      <FormReg onSubmit={handleSubmit}>
        <LabelReg htmlFor="username">Name</LabelReg>
        <InputReg
          autoComplete="off"
          type="text"
          id="username"
          name="name"
          required

          // onChange={handleChange}
        />
        <LabelReg htmlFor="useremail">Email</LabelReg>
        <InputReg
          autoComplete="off"
          type="text"
          id="useremail"
          name="email"
          required
          error={query.email}

          // onChange={handleChange}
        />
        <LabelReg htmlFor="userpassword">Password</LabelReg>
        <InputReg
          autoComplete="off"
          type="password"
          name="password"
          id="userpassword"
          required
          error={passwordValid.length < 7}

          // onChange={handleChange}
        />
        <BtnReg type="submit">Log in</BtnReg>
      </FormReg>
    </>
  );
}

export default Registration;
