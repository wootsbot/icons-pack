import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Renault = forwardRef(function Renault({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M12 0c-.747 0-2.32.013-2.693.053-.347.04-.44.147-.64.4C8.4.813 6.107 4.68 4.92 6.827c-.867 1.546-2.227 4.24-2.347 4.533-.12.253-.173.467-.173.64 0 .187.053.4.173.64.28.627 1.147 2.333 2.347 4.533 1.253 2.28 3.52 6.054 3.76 6.387.253.347.427.36.653.387.347.026 1.854.053 2.667.053.867 0 2.44-.04 2.667-.053.213-.014.4-.04.653-.387.227-.32 2.667-4.387 3.76-6.387 1.053-1.92 2.213-4.226 2.347-4.533.146-.333.173-.507.173-.64 0-.107-.027-.333-.173-.64a105.647 105.647 0 00-2.347-4.533C17.813 4.547 15.56.773 15.307.44c-.254-.333-.4-.36-.627-.373h-.04C14.307.013 12.867 0 12 0zm2.347.92c.093 0 .146.013.16.04-.4.787-1.414 2.773-2.134 4.6a111.067 111.067 0 012.907 5.747c.16.346.24.52.24.693 0 .173-.08.347-.24.693-1.227 2.64-4.093 8.054-5.28 10.067-.12.2-.253.307-.347.307-.093 0-.146-.014-.16-.04.4-.787 1.414-2.774 2.134-4.6A111.062 111.062 0 018.72 12.68c-.16-.347-.24-.52-.24-.693 0-.174.08-.347.253-.694C9.933 8.653 12.8 3.24 14 1.227c.12-.2.253-.307.347-.307Z" />
    </svg>
  );
});

Renault.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Renault;
