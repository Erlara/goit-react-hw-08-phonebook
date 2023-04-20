import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <StyledLink to="/">HOME</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">CONTACTS</StyledLink>}
    </nav>
  );
};
