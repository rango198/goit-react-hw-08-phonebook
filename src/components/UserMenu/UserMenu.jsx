import { useDispatch } from 'react-redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'components/redux/Auth/authSlice';
import { delToken } from 'components/fetchAPI';

const UserMenu = ({ name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logOut());
    delToken();
    navigate('/');
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

export default UserMenu;
