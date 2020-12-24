import * as React from 'react';

import { classnames } from 'src/utils';
import AccordionContext from './AccordionContext';

import './accordion.style.scss';

function AccordionDetails({
  children: childrenProp,
  className,
  defaultExpanded = false,
  disabled = false,
  expanded: expandedProp,
  onChange,
}) {
  const [expanded, setExpanded] = React.useState(defaultExpanded || !!expandedProp);
  const [height, setHeight] = React.useState(defaultExpanded || !!expandedProp ? '100%' : '0px');

  const content = React.useRef(null);

  const handleChange = React.useCallback((event) => {
    setExpanded(!expanded);
    setHeight(expanded ? '0px' : `${content.current.scrollHeight}px`);

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpanded]);

  const [summary, ...children] = React.Children.toArray(childrenProp);
  const contextValue = React.useMemo(() => ({
    expanded,
    disabled,
    toggle: handleChange,
  }), [expanded, disabled, handleChange]);

  return (
    <div className={classnames(['accordion', className])}>
      <AccordionContext.Provider value={contextValue}>{summary}</AccordionContext.Provider>
      <div ref={content} className="accordion__content" style={{ maxHeight: height }}>
        {children}
      </div>
    </div>
  );
}

export default AccordionDetails;