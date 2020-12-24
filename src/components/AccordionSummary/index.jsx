import * as React from 'react';

import { classnames } from 'src/utils';
import AccordionContext from '../Accordion/AccordionContext';

import './accordion-summary.style.scss';

function AccordionSummary({
  children,
  className,
  expandIcon,
  onClick,
}) {
  const { disabled = false, expanded, toggle } = React.useContext(AccordionContext);

  const handleChange = (event) => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={classnames([className, 'accordion-summary', expanded && 'expanded'])} disabled={disabled} onClick={handleChange}>
      <div className="accordion-summary__content">
        {children}
      </div>
      {expandIcon && (
        <div className={classnames(['accordion-summary__icon', expanded && 'expanded'])}>
          {expandIcon}
        </div>
      )}
    </button>
  );
}

export default AccordionSummary;
