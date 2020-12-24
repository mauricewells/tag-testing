import * as React from 'react';

function Hamburger() {
  return (
    <svg width="18px" height="12px" viewBox="0 0 18 12" version="1.1">
      <title>Menu</title>
      <defs>
        <linearGradient x1="0%" y1="52.4691358%" x2="100%" y2="47.5308642%" id="linearGradient-1">
          <stop stopColor="#F77062" offset="0%"></stop>
          <stop stopColor="#FE5196" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Expandable" transform="translate(-20.000000, -46.000000)">
          <rect id="Bg" fill="#F9FAFB" x="0" y="0" width="360" height="610"></rect>
          <rect id="Bg" fill="url(#linearGradient-1)" x="0" y="0" width="360" height="80"></rect>
          <g id="Group" transform="translate(20.000000, 46.000000)" fill="#FFFFFF">
            <path d="M0,12 L18,12 L18,10 L0,10 L0,12 Z M0,7 L18,7 L18,5 L0,5 L0,7 Z M0,0 L0,2 L18,2 L18,0 L0,0 Z" id="Shape"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Hamburger;
