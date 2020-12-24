import * as React from 'react';

import { classnames } from 'src/utils';

import './accordion-details.style.scss';

function AccordionDetails({ className, children }) {
  return (
    <div className={classnames([className, 'accordion-details'])}>
      {children}
    </div>
  );
}

export default AccordionDetails;