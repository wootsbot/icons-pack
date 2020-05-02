import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Theregister = forwardRef(function Theregister({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M22.368,12.858c-0.846,0.639-1.719,1.243-2.612,1.818c-0.893,0.568-1.683,0.977-2.378,1.219 c-0.695,0.246-1.167,0.199-1.413-0.131c-0.23-0.417-0.242-1.028-0.028-1.826c0.21-0.802,0.508-1.628,0.893-2.485 c0.381-0.782,0.711-1.58,0.989-2.39c0.278-0.81,0.413-1.632,0.401-2.458c-0.012-0.826-0.266-1.648-0.758-2.47 c-0.433-0.671-1.08-1.175-1.941-1.509c-0.862-0.337-1.822-0.504-2.882-0.492c-1.06,0.012-2.112,0.206-3.148,0.58 C8.683,3.02,7.94,3.488,7.261,4.116c-0.675,0.627-1.207,1.409-1.6,2.346c-0.135,0.341-0.222,0.794-0.27,1.346 C5.34,8.356,5.312,8.852,5.308,9.297C5.304,9.742,5.3,9.976,5.304,9.996c-0.433,0.298-0.925,0.663-1.481,1.096 c-0.556,0.429-1.104,0.949-1.64,1.552c-0.564,0.663-1.044,1.326-1.437,1.973c-0.393,0.655-0.635,1.155-0.727,1.505 c-0.048,0.143-0.008,0.532,0.119,1.183c0.127,0.643,0.457,1.386,1.001,2.227s1.417,1.62,2.616,2.331 c0.012,0.012,0.044-0.012,0.091-0.067c0.052-0.052,0.079-0.079,0.083-0.087c-0.02-0.012-0.167-0.171-0.429-0.476 c-0.262-0.302-0.516-0.699-0.758-1.175c-0.246-0.484-0.345-0.993-0.31-1.521c0.048-0.731,0.512-1.398,1.394-2.005 c0.885-0.611,2.394-1.143,4.53-1.592c0.607-0.155,1.132-0.385,1.58-0.707c0.449-0.314,0.687-0.492,0.707-0.532 c-0.167,1.703,0.139,3.26,0.901,4.653c0.651,1.179,1.493,2.239,2.537,3.176l9.906-9.878L24,11.6 C23.528,11.969,22.988,12.39,22.368,12.858L22.368,12.858z M9.437,7.363c-0.155,0.413-0.31,0.826-0.465,1.243 C8.822,9.023,8.738,9.257,8.726,9.313C8.754,9.361,8.853,9.476,9.008,9.65C9.171,9.821,9.262,9.936,9.29,9.992 c0.012,0.099-0.044,0.337-0.171,0.707c-0.123,0.369-0.373,0.647-0.738,0.838c-0.48,0.179-0.929,0.214-1.346,0.103 c-0.417-0.103-0.75-0.242-1.008-0.413c-0.254-0.175-0.389-0.266-0.397-0.286L9.663,6.55l0.016,0.143 C9.671,6.728,9.592,6.951,9.437,7.363z" />
    </svg>
  );
});

Theregister.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Theregister;
