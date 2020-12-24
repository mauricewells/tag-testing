import * as React from 'react';

import './loading-spinner.style.scss';

function LoadingSpinner() {
  return (
    <div className="lds-facebook"><div></div><div></div><div></div></div>
  );
}

export default LoadingSpinner;
