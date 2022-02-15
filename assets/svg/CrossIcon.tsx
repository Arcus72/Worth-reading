import React from 'react';

function CrossIcon({ isVisible }: { isVisible: boolean }) {
  return (
    <svg display={isVisible ? 'block' : 'none'} viewBox='0 0 131 127' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <line x1='12' y1='115.979' x2='119.979' y2='8' stroke='black' strokeWidth='15' strokeLinecap='round' />
      <line x1='11.3139' y1='8.20728' x2='119.293' y2='116.186' stroke='black' strokeWidth='15' strokeLinecap='round' />
    </svg>
  );
}

export default CrossIcon;
