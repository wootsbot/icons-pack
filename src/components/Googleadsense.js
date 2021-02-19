import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googleadsense = forwardRef(function Googleadsense(
  { color = 'currentColor', size = 24, title = 'Google AdSense', ...others },
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
      <path d="M22.056 8.447a3.894 3.894 0 0 0-5.313 1.419l-3.889 6.72a3.874 3.874 0 0 0 1.415 5.293l.01.005a3.894 3.894 0 0 0 5.312-1.42l3.889-6.718a3.875 3.875 0 0 0-1.416-5.294l-.008-.005m-14.7 12.168c-1.08 1.888-3.514 2.583-5.384 1.493-1.87-1.09-2.533-3.455-1.453-5.343s3.494-2.586 5.365-1.496c1.87 1.09 2.554 3.457 1.474 5.344m4.131-19.228a3.935 3.935 0 0 0-3.267 2.189l-3.67 6.279a4.638 4.638 0 0 0-.227.387l-2.746 4.737c1.345-.86 3.09-.993 4.55-.143a4.456 4.456 0 0 1 2.22 4.041l2.77-4.763c.082-.124.157-.252.224-.385l3.67-6.281a3.86 3.86 0 0 0-1.283-5.55 3.958 3.958 0 0 0-2.24-.511z" />
    </svg>
  );
});

Googleadsense.propTypes = {
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

export default Googleadsense;
