import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <Header/>
      <Main>
        { children }
      </Main>
      <Footer/>
    </>
  );
}

export default Layout;
