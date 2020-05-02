import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googlestreetview = forwardRef(function Googlestreetview({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M18.285 0c-.11 0-.218.004-.326.01-.03.001-.062.005-.092.008a5.723 5.723 0 00-.549.064c-.037.006-.074.015-.111.022-.07.013-.138.027-.207.042l-.1.024a5.635 5.635 0 00-.273.074l-.023.008a5.67 5.67 0 00-.301.102c-.022.007-.043.017-.065.025a5.669 5.669 0 00-.22.09l-.096.043a5.765 5.765 0 00-.184.088l-.097.05c-.061.032-.122.064-.182.098l-.088.05c-.066.04-.13.082-.195.124l-.063.039a5.746 5.746 0 00-.488.367l-.072.063a5.803 5.803 0 00-.451.433 5.7 5.7 0 00-.14.156l-.06.07a5.692 5.692 0 00-1.33 3.664 5.712 5.712 0 009.143 4.571l.017-.014a5.778 5.778 0 00.452-.38l.062-.06a5.747 5.747 0 00.37-.39l.054-.062c.06-.07.116-.143.172-.217l.017-.021.002-.004c.06-.08.118-.163.174-.246.018-.026.034-.054.05-.08.04-.06.078-.12.114-.182l.051-.088c.035-.061.069-.123.102-.186.016-.03.033-.06.048-.091.03-.06.058-.121.086-.182l.047-.103c.031-.072.06-.144.088-.217l.025-.065c.036-.097.07-.195.1-.295l.02-.07c.022-.075.043-.15.062-.227a5.675 5.675 0 00.068-.313 5.758 5.758 0 00.086-.645l.008-.112a5.759 5.759 0 00-.056-1.191 5.677 5.677 0 00-.114-.559 5.655 5.655 0 00-.648-1.533 5.73 5.73 0 00-.477-.672A5.76 5.76 0 0021.248.826l-.086-.049a5.716 5.716 0 00-.398-.215A5.681 5.681 0 0018.285 0zM1.715 2.285A1.72 1.72 0 000 3.995v18.29L12.941 9.344a6.426 6.426 0 01-1.12-3.63c0-1.26.38-2.432 1.007-3.429H1.715zM4.857 4c.848 0 1.557.31 2.102.818l-.912.891a1.698 1.698 0 00-1.19-.459c-.818 0-1.512.551-1.76 1.295a1.889 1.889 0 000 1.195c.248.744.942 1.295 1.76 1.295.46 0 .808-.121 1.067-.297.396-.27.624-.722.623-1.025h-1.69V6.57h2.94c.045.197.078.386.078.645 0 .957-.342 1.765-.936 2.312-.52.48-1.233.758-2.082.758a3.142 3.142 0 110-6.285zm9.8 7.059l-2.452 2.45a12 12 0 014.428-1.56 6.456 6.456 0 01-1.977-.89zm7.058.113a6.601 6.601 0 01-1.774.775c.607.087 1.2.22 1.774.395v-1.17zm-3.43 1.4c-2.51 0-4.868.864-6.73 2.264-.425.34-.698.863-.698 1.45V24H20a1.72 1.72 0 001.715-1.715v-9.164a11.078 11.078 0 00-3.43-.549zm-8.025 2.883L1.715 24h8.392v-7.715c0-.292.063-.567.153-.83Z" />
    </svg>
  );
});

Googlestreetview.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Googlestreetview;
