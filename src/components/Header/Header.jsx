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
        <LogoHome>
          <NavLink to={profile ? '/contacts' : '/'}>Home</NavLink>
        </LogoHome>
        <div>
          {profile && <UserMenu name={profile.name} />}
          {!profile && (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Log In</NavLink>
            </>
          )}
        </div>
      </NavMenu>
    </header>
  );
}

export default Header;
