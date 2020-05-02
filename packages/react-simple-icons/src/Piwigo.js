import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Piwigo = forwardRef(function Piwigo({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M16.712 12.777A4.713 4.713 0 0112 17.49a4.713 4.713 0 01-4.713-4.713A4.713 4.713 0 0112 8.065a4.713 4.713 0 014.712 4.712zM19.112 0c-2.572.058-2.358 1.544-8.237 1.555h-4.15A5.947 5.947 0 00.777 7.502v10.55A5.947 5.947 0 006.725 24h10.55a5.947 5.947 0 005.948-5.947V4.08l-.008-.018c0-.014.004-.028.004-.043 0-2.227-1.88-4.02-4.108-4.02zm.09 2.545a1.409 1.409 0 011.407 1.41 1.409 1.409 0 01-1.408 1.408 1.409 1.409 0 01-1.41-1.408 1.409 1.409 0 011.41-1.41zM12 6.12a6.656 6.656 0 016.656 6.656A6.656 6.656 0 0112 19.434a6.656 6.656 0 01-6.656-6.657A6.656 6.656 0 0112 6.121z" />
    </svg>
  );
});

Piwigo.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Piwigo;
