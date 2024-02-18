import UserMenu from 'components/UserMenu/UserMenu';
import { LogoHome, NavMenu } from './Header.styled';
import { FaHome } from 'react-icons/fa';
import { useAuth } from 'hook/useAuthSelector';

function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <NavMenu>
        <LogoHome to="/">
          <FaHome />
          {isLoggedIn && <LogoHome to="/contacts">Contacts</LogoHome>}
        </LogoHome>

        <div>
          {isLoggedIn ? (
            <>
              <UserMenu />
            </>
          ) : (
            <>
              <LogoHome to="/register">SignUp</LogoHome>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <LogoHome to="/login">LogIn</LogoHome>
            </>
          )}
        </div>
      </NavMenu>
    </header>
  );
}

export default Header;
