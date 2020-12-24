import * as React from 'react';

import Container from '../Container';
import { Hamburger as HamburgerIcon } from '../icons';

import './layout.style.scss';

function Layout({ children }) {
  return (
    <main>
      <header className="header">
        <HamburgerIcon />
        <h6 className="header__title">
          Expandable Content
        </h6>
      </header>
      <section>
        <Container>
          {children}
        </Container>
      </section>
    </main>
  );
}

export default Layout;
