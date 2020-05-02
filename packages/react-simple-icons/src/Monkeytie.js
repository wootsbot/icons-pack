import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Monkeytie = forwardRef(function Monkeytie({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M20.001 0h-16C1.791 0 0 1.791 0 4.001v15.998C0 22.209 1.791 24 4.001 24h16C22.209 24 24 22.209 24 19.999V4.001C24 1.791 22.209 0 20.001 0zm-7.666 16.295l-.866-6.759-2.579 4.638-2.583-4.623-.858 6.744h-1.93l1.4-10.086H6.43L8.888 10.8l2.454-4.591h1.514l1.397 10.086h-1.918zm6.529-5.736h-1.585v3.257c0 1.095.087 1.151 1.096 1.151h.49l-.171 1.472h-1.293c-1.354 0-1.93-.95-1.93-1.89v-3.997h-1.027l.156-1.47h.855V7.504l1.79-.188v1.775h1.588v1.467h.031zm1.677 5.88h-1.484l.159-1.485h1.487l-.172 1.479.01.006z" />
    </svg>
  );
});

Monkeytie.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Monkeytie;
