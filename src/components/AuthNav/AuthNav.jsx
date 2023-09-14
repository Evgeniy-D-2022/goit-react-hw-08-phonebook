import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div className={css.nav}>
            <NavLink className={css.nav__link} to='/register'>
                Register
            </NavLink>
            <NavLink className={css.nav__link} to='/login'>
                Log In
            </NavLink>
        </div>
    )
};

export default AuthNav;