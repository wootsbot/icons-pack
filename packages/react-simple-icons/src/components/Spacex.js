import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Spacex = forwardRef(function Spacex({ color = 'currentColor', size = 24, title = 'SpaceX', ...others }, ref) {
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
      <path d="M23.952 6.965c-.005-.002-.009-.006-.014-.006-.009 0-.016.006-.023.009C8.787 8.491 1.676 15.07 0 16.688l.223.35h2.644c6.872-6.908 16.156-9.201 21.065-9.956l.006.002c.004 0 .006-.004.01-.004.029-.006.052-.028.052-.059 0-.029-.021-.049-.048-.056z M.38 10.508l-.16.302 3.245 2.366a31.761 31.761 0 0 1 2.012-1.073L3.3 10.508H.38zM7.592 13.65c-.536.395-1.084.818-1.674 1.313l2.852 2.078h2.957l.123-.273-4.258-3.118z" />
    </svg>
  );
});

Spacex.propTypes = {
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

export default Spacex;