import ContactUser from 'pages/ContactPage/ContactPage';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import BackgroundHome from './App.styled';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Layout from './Layout';
import Home from 'pages/Home/HomePage';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { getCurrentUser } from '../redux/auth/auth-operation';
import Loader from './Loader/Loader';
import { useAuth } from 'hook/useAuthSelector';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <BackgroundHome>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/contacts" element={<ContactUser />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
          <Toaster />
        </BackgroundHome>
      )}
    </>
  );
};
