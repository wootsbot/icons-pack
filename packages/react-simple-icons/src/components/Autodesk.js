import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Autodesk = forwardRef(function Autodesk(
  { color = 'currentColor', size = 24, title = 'Autodesk', ...others },
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
      <title>{title}</title>
      <path d="m14.574 1.0203c-0.097-0.096997-0.29099-0.58198-0.97097-0.58198h-6.7038s0.97097 0.096997 1.36 1.068c0 0 1.069 2.5269 2.0399 4.9558 2.8179 6.6068 7.1898 17.099 7.1898 17.099h6.5108c0.097-0.097-9.3267-22.443-9.4247-22.54zm-8.8407 0.87497-5.3438 12.631c-0.29199 0.87497-0.097997 1.9439 1.457 1.9439h4.1779l3.6919-8.8417c-1.166-2.9149-2.1359-5.2478-2.1359-5.2478-0.096997-0.29199-0.38899-1.069-0.97197-1.069-0.58298 0-0.77698 0.48598-0.87397 0.58298zm-0.097997 15.643h-4.4689c-0.77698 0-1.166-0.48598-1.166-0.48598 0.77698 1.36 3.0119 5.6358 3.0119 5.6358 0.38899 0.48598 0.77698 0.77698 1.36 0.77698 1.263 0 3.2069-1.263 3.2069-1.263l7.4808-4.6639z" />
    </svg>
  );
});

Autodesk.propTypes = {
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

export default Autodesk;
