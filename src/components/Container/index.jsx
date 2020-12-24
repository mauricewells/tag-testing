import * as React from 'react';

import './container.style.scss';

function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export default Container;
