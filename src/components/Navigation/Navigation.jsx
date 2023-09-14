import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";
import css from './Navigation.module.css';

const Navigation = () => {
  
    const { isLoggedIn } = useSelector(selectIsLoggedIn);

    return (
      <nav>
            <NavLink className={css.navigation__link} to='/' >
                Home
            </NavLink>
            {isLoggedIn && <NavLink className={css.navigation__link}
            to='/contacts'>Contacts</NavLink>}
        </nav>
    )
};

export default Navigation;