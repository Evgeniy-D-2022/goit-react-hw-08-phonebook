
import { RestrictedRoute } from 'RestrictedRoute';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Contacts from "../../pages/Contacts/Contacts";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';
import { Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';
import { PrivateRoute } from 'PrivateRoute';
import { useAuth } from 'hooks/useAuth';

const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(()=> {
    dispatch(refreshUser());
  }, [dispatch]);

    return isRefreshing ? (
      <Loader />
    ) : (
      <Routes>
        <Route path='/' element={<AppBar />} />
        <Route index element={<Home />} />
        <Route 
        path='/register'
        element={<RestrictedRoute 
        component={Register} 
        redirectTo='/contacts' /> } />

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
      </Routes>
      )   
};

export default App;