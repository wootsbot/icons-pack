import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Invision = forwardRef(function Invision({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M21.825 0H2.175C.975 0 0 .975 0 2.175v19.65C0 23.025.975 24 2.175 24h19.65c1.2 0 2.175-.975 2.175-2.175V2.175C24 .975 23.025 0 21.825 0zM8.02 4.667c.798 0 1.468.63 1.468 1.44 0 .82-.67 1.444-1.468 1.444v.027c-.803 0-1.454-.65-1.454-1.455s.65-1.455 1.455-1.455zm9.816 13.815c-1.484 0-2.204-.885-2.204-2.09 0-.346.044-.713.15-1.08l.71-2.545c.088-.28.11-.54.11-.775 0-.82-.5-1.315-1.296-1.315-1.013 0-1.68.727-2.025 2.13l-1.38 5.535H9.487l.432-1.74c-.708 1.166-1.695 1.885-2.91 1.885-1.467 0-2.157-.842-2.157-2.113.004-.365.047-.73.13-1.085v.002l1.1-4.49H4.375l.518-1.905h4.1l-1.62 6.405c-.105.41-.15.75-.15.986 0 .41.202.53.517.604.195.04 1.725.012 2.56-1.84l1.06-4.25H9.637l.52-1.875h3.72l-.48 2.16c.647-1.2 1.937-2.355 3.212-2.355 1.35 0 2.475.975 2.475 2.82 0 .534-.08 1.065-.24 1.575l-.69 2.476c-.06.254-.104.465-.104.66 0 .434.18.645.494.645s.735-.24 1.2-1.56l.943.36c-.555 1.964-1.576 2.774-2.85 2.774z" />
    </svg>
  );
});

Invision.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Invision;
