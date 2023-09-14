// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { selectIsLoggedIn } from "redux/auth/auth-selectors";
import css from './Navigation.module.css';

const Navigation = () => {
    let activeClassName = {
        color: '#f87719',
      };

    // const { isLoggedIn } = useSelector(selectIsLoggedIn);

    return (
        <nav>
              <ul className={css.navigation}>
        <li className={css.navigation__item}>
          <NavLink
            className={css.navigation__link}
            to="/"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className={css.navigation__item}>
          <NavLink
            className={css.navigation__link}
            to="/contacts"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
            {/* <NavLink className={css.navigation__link} to='/' >
                Home
            </NavLink>
            {isLoggedIn && <NavLink className={css.navigation__link}
            to='/contacts'>Contacts</NavLink>} */}
        </nav>
    )
};

export default Navigation;