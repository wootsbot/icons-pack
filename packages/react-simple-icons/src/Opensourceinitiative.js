import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Opensourceinitiative = forwardRef(function Opensourceinitiative(
  { color = 'currentColor', size = 24, ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M-.102 12.53C.01 5.956 4.613 1.277 10.248.52c6.718-.9 12.371 3.67 13.456 9.735 1.03 5.75-2.13 11.133-7.339 13.263-.45.184-.697.082-.87-.373l-2.587-6.728c-.15-.392-.048-.64.34-.814 1.17-.532 1.901-1.423 2.095-2.7a3.46 3.46 0 0 0-3.122-3.98 3.463 3.463 0 0 0-3.75 2.89c-.253 1.598.536 3.084 2.027 3.76.464.214.556.418.377.892l-2.6 6.772c-.125.334-.4.45-.75.315a11.98 11.98 0 0 1-6.33-5.76c-1.206-2.383-1.22-4.247-1.297-5.263zm1.012-.092c.02.32.03.692.063 1.07.305 3.48 2.4 6.946 6.34 8.862.156.073.214.04.272-.11q1.082-2.84 2.178-5.68c.063-.16.03-.231-.116-.323-1.53-.963-2.29-2.348-2.207-4.163.048-1.045.45-1.96 1.152-2.725 1.452-1.583 3.727-1.927 5.59-.852a4.436 4.436 0 0 1 2.188 4.376c-.174 1.48-.934 2.609-2.212 3.378-.13.078-.17.14-.11.29q1.102 2.847 2.187 5.698c.058.15.116.184.27.11 1.72-.802 3.157-1.95 4.265-3.484 1.685-2.333 2.377-4.932 2.048-7.793-.663-5.687-5.78-10.397-12.368-9.584-5.135.63-9.453 4.96-9.54 10.93z" />
    </svg>
  );
});

Opensourceinitiative.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Opensourceinitiative;
