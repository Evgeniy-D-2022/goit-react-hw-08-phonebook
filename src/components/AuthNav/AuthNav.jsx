import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';

const AuthNav = () => {
    
    return (
            <>
            <ul className={css.user__bar}>
                <li className={css.navigation__item}>
                <NavLink className={css.navigation__link} to='/register'>
                Register
            </NavLink>
                </li>
                <li className={css.navigation__item}>
                <NavLink className={css.navigation__link} to='/login'>
                Log In
            </NavLink>
                </li>
            </ul>
            </>
    )
};

export default AuthNav;