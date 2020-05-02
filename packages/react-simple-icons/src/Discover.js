import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Discover = forwardRef(function Discover({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M12 0A12 12 0 1 0 12 24A12 12 0 1 0 12 0Z" />
    </svg>
  );
});

Discover.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Discover;
