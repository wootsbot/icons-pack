import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Clyp = forwardRef(function Clyp({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M12 17.958a1.137 1.137 0 01-1.138-1.136V7.233a1.137 1.137 0 012.276 0v9.59c0 .627-.51 1.135-1.138 1.135m7.439 2.44A1.137 1.137 0 0118.3 19.26V4.794a1.137 1.137 0 012.276 0v14.467c0 .627-.51 1.136-1.138 1.136M15.719 24a1.137 1.137 0 01-1.138-1.136V1.136a1.137 1.137 0 012.276 0v21.728c0 .627-.509 1.136-1.138 1.136m-7.438-3.16a1.137 1.137 0 01-1.138-1.136V4.296a1.137 1.137 0 012.276 0v15.408c0 .628-.51 1.137-1.138 1.137m-3.72-4.989a1.137 1.137 0 01-1.138-1.136V9.284a1.137 1.137 0 012.276 0v5.432c0 .627-.51 1.136-1.138 1.136Z" />
    </svg>
  );
});

Clyp.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Clyp;
