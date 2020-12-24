import * as React from 'react';

import Container from '../Container';
import { Hamburger as HamburgerIcon } from '../icons';

import './layout.style.scss';

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <HamburgerIcon />
        <h1 className="header__title">
          Expandable Content
        </h1>
      </header>
      <main>
        <Container>
          {children}
        </Container>
      </main>
    </>
  );
}

export default Layout;
