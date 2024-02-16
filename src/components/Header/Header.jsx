import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { authSelector } from 'components/redux/Auth/authSelector';
import { LogoHome, NavMenu } from './Header.styled';
import { FaHome } from 'react-icons/fa';

function Header() {
  const { profile } = useSelector(authSelector);

  return (
    <header>
      <NavMenu>
        <LogoHome to={profile ? '/contacts' : '/'}>
          <FaHome />
        </LogoHome>

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
