import React from 'react';
import PropTypes from 'prop-types';

const Powerbi = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M14.064 12.537c-.725 0-1.313.545-1.313 1.217v5.353c0 .672.589 1.217 1.314 1.217.726 0 1.314-.545 1.314-1.218v-5.352c0-.672-.589-1.217-1.315-1.217zm4.132-4.888c-.726 0-1.314.545-1.314 1.218V19.07c0 .672.59 1.217 1.314 1.217.726 0 1.314-.545 1.314-1.217V8.867c0-.673-.588-1.218-1.314-1.218zm-8.262 3.035c-.725 0-1.313.545-1.313 1.218v7.205c0 .672.589 1.217 1.315 1.217.725 0 1.313-.545 1.313-1.218v-7.205c0-.672-.589-1.217-1.315-1.217zm-4.13 4.398h-.001c-.726 0-1.314.546-1.314 1.218l.001 2.807c0 .672.588 1.217 1.314 1.217.726 0 1.314-.545 1.313-1.218V16.3c0-.673-.588-1.218-1.314-1.218zM24 6.3v9.163c0 1.447-1.27 2.624-2.831 2.624h-.484v-.897h.484c1.027 0 1.863-.775 1.863-1.727V6.3c0-.952-.836-1.726-1.863-1.726H2.831C1.804 4.574.968 5.348.968 6.3v9.163c0 .952.836 1.727 1.863 1.727h.484v.897H2.83C1.27 18.086 0 16.909 0 15.462V6.3c0-1.446 1.27-2.623 2.83-2.623h18.34C22.73 3.676 24 4.853 24 6.3Z" />
    </svg>
  );
};

Powerbi.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Powerbi.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Powerbi;
