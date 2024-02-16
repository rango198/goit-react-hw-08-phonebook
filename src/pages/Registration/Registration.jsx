import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { loginThunk } from 'components/redux/Auth/auth-thunk';
import { signUp } from 'components/fetchAPI';
import { authSelector } from 'components/redux/Auth/authSelector';
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

  const [info, setInfo] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = info;
  const { isLoading } = useSelector(authSelector);

  const handleChange = ({ target }) => {
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  const submit = e => {
    e.preventDefault();
    if (password.length < 8)
      return toast.error('Password shougth de longer 8 symbols ');
    signUp(info)
      .then(() => {
        dispatch(loginThunk({ email, password }))
          .then(() => {
            navigate('/contacts');
            toast.success('Registration successfuly', { duration: 3000 });
          })
          .catch(() => {
            toast.error('Failed to log in', { duration: 3000 });
          });
      })
      .catch(() => {
        toast.error('Incorrect input data', { duration: 3000 });
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <TitleReg>Nice to meet you!</TitleReg>
      <FormReg onSubmit={submit}>
        <LabelReg htmlFor="username">Name</LabelReg>
        <InputReg
          autoComplete="off"
          type="text"
          id="username"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
        <LabelReg htmlFor="useremail">Email</LabelReg>
        <InputReg
          autoComplete="off"
          type="text"
          id="useremail"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <LabelReg htmlFor="userpassword">Password</LabelReg>
        <InputReg
          autoComplete="off"
          type="password"
          name="password"
          id="userpassword"
          required
          value={password}
          onChange={handleChange}
        />
        <BtnReg type="submit">Log in</BtnReg>
      </FormReg>
    </>
  );
}

export default Registration;
