import { useDispatch } from 'react-redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'components/redux/Auth/authSlice';
import { delToken } from 'components/fetchAPI';
import { MenuUser, MenyBtn, UserName } from './UserMenu.styled';
import { ImExit } from 'react-icons/im';

const UserMenu = ({ name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logOut());
    delToken();
    navigate('/');
  };

  return (
    <MenuUser>
      <UserName>{name}</UserName>
      <MenyBtn onClick={onClick}>
        <ImExit />
        Logout
      </MenyBtn>
    </MenuUser>
  );
};

export default UserMenu;
