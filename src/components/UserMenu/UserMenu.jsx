import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUser);
    return (
        <div className={css.usermenu__wrap}>
            <p className={css.usermenu__name}>Welcome, {name}</p>
            <button className={css.usermenu__btn}
            onClick={() => dispatch(logOut())}>Log Out</button>
        </div>
    )
};

export default UserMenu;