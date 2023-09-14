import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";
import css from './AppBar.module.css';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";


const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (

<div className={css.container}>
    <header className={css.header}>
        < Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>

    <main>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </main>
</div>
);
};

export default AppBar;