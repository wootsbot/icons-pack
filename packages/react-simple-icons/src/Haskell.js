import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Haskell = forwardRef(function Haskell({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M.006 20.47L5.649 12 .006 3.531h4.235l5.674 8.47-5.674 8.468zm5.643 0L11.29 12 5.65 3.531h4.266l11.253 16.938h-4.224l-3.535-5.34-3.495 5.34zM19.3 15.525l-1.877-2.827h6.571v2.826zm-2.826-4.235l-1.877-2.827h9.387v2.827z" />
    </svg>
  );
});

Haskell.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Haskell;
