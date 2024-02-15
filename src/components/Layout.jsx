import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <MainContainer>
        <Suspense fallback={<p>...Loading page</p>}>
          <Header />
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};

export default Layout;
