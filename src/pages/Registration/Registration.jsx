import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { loginThunk } from 'components/redux/Auth/auth-thunk';
import { signUp } from 'components/fetchAPI';
import { authSelector } from 'components/redux/Auth/authSelector';

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
      <h2>Nice to meet you!</h2>
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

export default Registration;
