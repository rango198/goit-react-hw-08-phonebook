import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { authSelector } from 'components/redux/Auth/authSelector';

function Header() {
  const { profile } = useSelector(authSelector);

  return (
    <header>
      <div>
        <NavLink to={profile ? '/contacts' : '/'}>Home</NavLink>
        <div>
          {profile && <UserMenu name={profile.name} />}
          {!profile && (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Log In</NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
