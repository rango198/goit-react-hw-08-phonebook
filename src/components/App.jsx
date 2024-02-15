import ContactUser from 'pages/ContactUser/ContactUser';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Layout from './Layout';
import Home from 'pages/Home/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from './redux/Auth/authSelector';
import { getProfileThunk } from './redux/Auth/auth-thunk';
import { setToken } from './fetchAPI';

import { useEffect } from 'react';
import BackgroundHome from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const { token, isLoad } = useSelector(authSelector);

  useEffect(() => {
    if (isLoad) {
      setToken(token);
      dispatch(getProfileThunk());
    } else {
      return;
    }
  }, [token, isLoad, dispatch]);

  return (
    <BackgroundHome>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/contacts" element={<ContactUser />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BackgroundHome>
  );
};
