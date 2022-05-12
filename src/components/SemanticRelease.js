import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Semanticrelease = forwardRef(function Semanticrelease(
  { color = 'currentColor', size = 24, title = 'semanticrelease', ...others },
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
      <path d="M11.952 14.4a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zm0-.72a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36zM8.304 3.12v1.728c.096.528 1.008 2.64 1.68 3.888C9.12 8.112 7.2 6.672 6.672 5.952a4.416 4.416 0 0 1-.816-1.392L2.448 6.48v4.128c.432.24 1.104.72 1.488.864.528.192 2.832.432 4.224.48-1.008.432-3.168 1.392-4.08 1.488-.768.144-1.296.048-1.632 0v4.08l3.312 1.872c.432-.192 1.152-.576 1.488-.816.432-.336 1.776-2.208 2.496-3.408-.096 1.056-.384 3.408-.72 4.272-.288.72-.624 1.104-.816 1.392L12 22.992l3.504-2.016c.048-.432.096-1.344 0-1.824-.048-.528-1.008-2.64-1.632-3.888.864.672 2.736 2.112 3.312 2.832.528.624.72 1.152.816 1.44l3.552-2.016v-4.032c-.384-.24-1.152-.72-1.632-.912-.48-.192-2.784-.432-4.176-.48 1.008-.48 3.168-1.392 4.08-1.488.864-.144 1.392-.048 1.728.048V6.48l-3.36-1.92-1.488.912c-.432.336-1.776 2.208-2.544 3.36.144-1.056.432-3.408.768-4.272.288-.72.624-1.152.864-1.392L12 1.008zM12 0l10.416 6v12L12 24 1.584 18V6z" />
    </svg>
  );
});

Semanticrelease.propTypes = {
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

export default Semanticrelease;