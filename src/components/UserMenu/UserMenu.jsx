import { useDispatch } from 'react-redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuUser, MenyBtn, UserName } from './UserMenu.styled';
import { ImExit } from 'react-icons/im';
import { RxAvatar } from 'react-icons/rx';
import { useAuth } from 'hook/useAuthSelector';
import { logOutUser } from '../../redux/auth/auth-operation';

const UserMenu = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate('/');
  };

  return (
    <MenuUser>
      <UserName>
        <RxAvatar />
        {user.name}
      </UserName>
      <MenyBtn onClick={handleLogOut}>
        <ImExit />
        Logout
      </MenyBtn>
    </MenuUser>
  );
};

export default UserMenu;
