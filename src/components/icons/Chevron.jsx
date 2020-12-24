import * as React from 'react';

function Chevron() {
  return (
    <svg width="12px" height="10px" viewBox="0 0 12 10" version="1.1">
      <title>Dropdown</title>
      <defs>
        <rect id="path-1" x="0" y="90" width="360" height="100"></rect>
        <filter x="-1.9%" y="-5.0%" width="103.9%" height="114.0%" filterUnits="objectBoundingBox" id="filter-2">
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Expandable" transform="translate(-328.000000, -135.000000)">
          <g id="Bg">
            <use fill="black" fillOpacity="1" filter="url(#filter-2)"></use>
            <use fill="#FFFFFF" fillRule="evenodd"></use>
          </g>
          <g id="Group" transform="translate(328.000000, 135.500000)" fill="#E0E0E0">
            <polygon id="Shape" points="1.41 0.84 6 5.42 10.59 0.84 12 2.25 6 8.25 0 2.25"></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Chevron;
