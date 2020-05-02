import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Topcoder = forwardRef(function Topcoder({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M20.514 16.517c.192-.026.376-.112.542-.21.345-.201.646-.473.936-.75.226-.214.444-.436.653-.67.12-.146.256-.296.376-.451.105-.143.21-.285.315-.436.076-.115.15-.23.212-.35.33-.598.601-1.336.361-2.016-.031-.094-.076-.185-.121-.27-.091-.154-.211-.291-.331-.413-.21-.201-.468-.36-.723-.489-.376-.188-.781-.313-1.201-.406-.603-.137-1.205-.201-1.821-.226-.842-.041-1.684-.006-2.512.076.105.109.196.225.301.338.195.226.392.467.571.723.227.3.437.631.647.962.602.992 1.054 2.075 1.383 3.173.105.33.182.662.255 1.008.031.12.048.256.077.391l.08.016zm-18.585-.151c.052-.204.105-.412.16-.616.08-.301.176-.6.266-.896.069-.217.15-.429.227-.645.09-.225.185-.45.277-.676.033-.076.061-.153.098-.23.102-.215.211-.427.322-.637.135-.242.256-.481.391-.707.18-.316.377-.602.586-.888l.016-.015c-.331-.016-.677-.016-1.008-.016-.24 0-.496.016-.736.045-.166.016-.33.031-.496.061-.121.016-.24.045-.361.075-.586.15-1.248.421-1.533 1.007-.031.076-.061.151-.091.242-.032.12-.047.27-.047.406 0 .211.045.421.089.632.091.315.242.617.393.902.285.496.646.962 1.022 1.398l.481.525-.056.033zm18.151-.045c-.492-2.302-1.546-4.532-3.194-6.236l-.083-.086-.041-.04c-.2.014-.399.045-.603.074-2.154.332-4.26.918-6.285 1.715.168.045.336.09.507.15.706.226 1.413.466 2.108.723 2.421.902 4.755 2.029 6.998 3.322l.586.347.007.031zm-17.706-.139l.873-.843c.15-.143.15-.142.301-.28 1.533-1.354 3.318-2.375 5.18-3.217-.275-.076-.549-.136-.824-.195-1.053-.241-2.113-.437-3.188-.527-.084.121-.166.227-.247.346-.181.271-.354.527-.517.813-.15.24-.271.481-.392.723-.104.195-.21.391-.286.586-.029.045-.045.105-.06.15-.091.226-.195.451-.286.677-.074.181-.135.36-.195.541-.09.286-.18.557-.255.843-.046.15-.091.301-.12.45l.016-.067zm6.914-4.587c.21-.091.417-.175.628-.255.233-.094.466-.182.7-.269 1.023-.376 2.061-.692 3.113-.947.873-.211 1.744-.376 2.633-.511l.06-.016c-.241-.226-.496-.421-.752-.617-.481-.36-1.007-.662-1.563-.902-1.295-.556-2.723-.736-4.105-.48-.753.134-1.491.39-2.167.752-1.067.571-2 1.383-2.768 2.315l-.03.016.466.044.572.076c.813.135 1.594.301 2.391.48.301.076.587.151.873.227l-.051.087z" />
    </svg>
  );
});

Topcoder.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Topcoder;
