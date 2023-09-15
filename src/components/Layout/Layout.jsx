import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';


const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
            <Loader color={'#0f84dd'} size={'100'} />
        }>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;