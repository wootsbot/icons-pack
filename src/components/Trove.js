import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Trove = forwardRef(function Trove({ color = 'currentColor', size = 24, title = 'Trove', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M19.692 12.775v8.529c0 .55-.54.945-1.058.735l-4.911-1.946a.786.786 0 0 1-.488-.735V7.882c0-.435.352-.79.786-.79h4.722v-2.75H5.27v2.75h4.72a.79.79 0 0 1 .788.79v11.476a.786.786 0 0 1-.489.735l-4.91 1.946a.778.778 0 0 1-1.059-.735v-8.522H.035v8.999S.035 24 2.11 24h19.765c2.076 0 2.076-2.219 2.076-2.219v-8.992zM21.808 0H2.219C.146 0 .035 2.087.035 2.087v9.117h4.938c.434 0 .787.353.787.789v8.214l3.486-1.394V8.658H4.553a.789.789 0 0 1-.787-.79V3.566a.79.79 0 0 1 .787-.79h14.882c.434 0 .786.354.786.79v4.316a.777.777 0 0 1-.786.776h-4.668v10.155l3.487 1.394v-8.214c0-.436.353-.789.787-.789h4.91V2.087S23.885 0 21.808 0z" />
    </svg>
  );
});

Trove.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Trove;