import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import { useAuth } from "hooks/useAuth";

const Navigation = () => {
  
    const { isLoggedIn } = useAuth();

    return (
      <nav>
            <NavLink className={css.navigation__link} to='/' >
                Home
            </NavLink>
            {isLoggedIn && <NavLink className={css.navigation__link} to='/contacts'>
                Contacts
            </NavLink>}
        </nav>
    )
};

export default Navigation;