import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Openid = forwardRef(function Openid({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M14.54 .887L10.91 2.66V20.83C6.76 20.31 3.64 18.05 3.64 15.33C3.64 12.75 6.44 10.58 10.27 9.92V7.61C4.42 8.32 0 11.5 0 15.33C0 19.29 4.74 22.57 10.91 23.11L14.54 21.4V.886M15.18 7.61V9.92C16.61 10.17 17.89 10.62 18.94 11.23L16.97 12.34L24 13.87L23.5 8.66L21.63 9.72C19.89 8.66 17.67 7.91 15.18 7.61Z" />
    </svg>
  );
});

Openid.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Openid;
