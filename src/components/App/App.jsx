
import { RestrictedRoute } from 'RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import Layout from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('../../pages/Home/Home'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));

const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(()=> {
    dispatch(refreshUser());
  }, [dispatch]);

    return isRefreshing ? (
      <Loader />
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route 
        path='/register'
        element={<RestrictedRoute 
        component={Register} 
        redirectTo='/contacts' />} />

        <Route
        path='/login'
        element={<RestrictedRoute
        component={Login}
        redirectTo='/contacts' />} />

        <Route 
        path='/contacts' 
        element={<PrivateRoute
        component={Contacts}
        redirectTo='/login' />} />
        </Route>
      </Routes>
      )   
};

export default App;