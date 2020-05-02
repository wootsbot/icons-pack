import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Hashnode = forwardRef(function Hashnode({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M3.84 0h16.32A3.84 3.84 0 0 1 24 3.84v16.32A3.84 3.84 0 0 1 20.16 24H3.84A3.84 3.84 0 0 1 0 20.16V3.84A3.84 3.84 0 0 1 3.84 0zm14.175 21.638l-.004-.001a2.577 2.577 0 0 0 .209-5.139l-4.917-8.682c-.719-1.292-2.108-1.236-2.609.598-.43 1.736-.319 3.372-.444 5.348-.001.013-.01.024-.023.027s-.026-.002-.033-.013l-4.39-8.751c.358-.281.568-.711.569-1.167a1.459 1.459 0 1 0-1.459 1.459c.069 0 .125-.014.18-.014 1.848 4.75 3.904 10.293 4.64 11.571.5 1.222 2.209.833 2.251-.486l.18-6.932c0-.042.055-.042.07-.014l3.526 8.389a2.573 2.573 0 0 0 2.254 3.806z" />
    </svg>
  );
});

Hashnode.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Hashnode;
