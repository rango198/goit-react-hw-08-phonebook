import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { authSelector } from 'components/redux/Auth/authSelector';
import { LogoHome, NavMenu } from './Header.styled';

function Header() {
  const { profile } = useSelector(authSelector);

  return (
    <header>
      <NavMenu>
        <LogoHome to={profile ? '/contacts' : '/'}>Home</LogoHome>

        <div>
          {profile && <UserMenu name={profile.name} />}
          {!profile && (
            <>
              <LogoHome to="/register">Register</LogoHome>
              <LogoHome to="/login">Log In</LogoHome>
            </>
          )}
        </div>
      </NavMenu>
    </header>
  );
}

export default Header;
