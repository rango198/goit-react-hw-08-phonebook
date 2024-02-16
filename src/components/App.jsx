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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

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
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactUser />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BackgroundHome>
  );
};
