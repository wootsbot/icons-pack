import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Andela = forwardRef(function Andela({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M18.166 7.911l.24-2.315-2.316.238-.64-2.16c0-.001 3.664-.308 4.04-.341.37-.03.727-.071.992.18v-.001a.106.106 0 01.003.003l.003.003c.25.266.208.623.178.991l-.339 4.042zM5.834 16.09l-.238 2.315 2.315-.238.64 2.16-4.04.34c-.37.03-.728.072-.993-.179l-.003-.002-.004-.003h.001c-.25-.265-.208-.623-.177-.993.03-.376.338-4.04.338-4.04zm13.418-2.62L21.058 12l-1.806-1.468 1.075-1.981s2.808 2.374 3.098 2.616c.281.241.564.464.574.829H24V12a.01.01 0 000 .004c-.01.365-.294.588-.576.827l-3.097 2.618zM4.749 10.532L2.943 12l1.806 1.468-1.076 1.981-3.096-2.617c-.283-.24-.566-.464-.576-.829V12L0 11.995h.001c.01-.364.293-.587.576-.827L3.673 8.55zm11.34 7.634l2.316.24-.239-2.316 2.161-.64.34 4.04c.03.37.071.727-.18.992h.001a.012.012 0 00-.003.003l-.003.003c-.265.25-.623.208-.991.178l-4.042-.34zM7.911 5.834l-2.315-.238.239 2.315-2.162.64-.338-4.04c-.031-.37-.073-.728.178-.993 0-.002.002-.003.002-.003l.003-.004.001.001c.265-.25.622-.208.993-.178l4.04.339zm2.62 13.418L12 21.058l1.468-1.806 1.981 1.075-2.616 3.098c-.241.281-.464.564-.829.574V24H12h-.004c-.365-.01-.588-.294-.827-.575L8.55 20.327zm2.937-14.503L12 2.943 10.532 4.75l-1.98-1.076L11.167.577c.24-.284.464-.566.829-.576h.008c.364.01.587.292.827.576l2.617 3.096zm-1.466 7.785H10.58L12 9.09v.003-.003l.002.003v-.003l1.42 3.445zm3.967 3.04l-3.302-8.17c-.073-.213-.263-.575-.668-.575-.404 0-.593.362-.667.575l-3.3 8.17c0 .005-.127.277-.102.312.025.035.067.053.121.053h1.013c.1 0 .169-.052.218-.167l.81-1.986h3.811l.816 1.986c.048.115.117.167.218.167h1.013c.053 0 .096-.018.12-.053.026-.035-.101-.307-.101-.311Z" />
    </svg>
  );
});

Andela.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Andela;
