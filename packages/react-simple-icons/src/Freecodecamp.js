import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Freecodecamp = forwardRef(function Freecodecamp({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M23.967 12.317c0 2.5-.854 4.718-2.598 6.681-.635.729-1.143 1.076-1.488 1.076-.121 0-.256-.033-.346-.125-.092-.096-.15-.223-.15-.35 0-.188.225-.475.674-.889 1.814-1.736 2.727-3.895 2.727-6.456 0-2.846-.943-5.152-2.816-6.936-.374-.342-.57-.627-.57-.852 0-.12.061-.256.164-.345.105-.09.225-.149.346-.149.418 0 1.049.509 1.842 1.527C23.25 7.402 24 9.694 24 12.345l-.033-.028zM0 11.682c0-2.499.854-4.719 2.598-6.681.635-.729 1.143-1.076 1.49-1.076.119 0 .254.033.344.125.09.095.15.189.15.314 0 .188-.225.477-.674.918-1.781 1.744-2.711 3.895-2.711 6.462 0 2.847.951 5.158 2.821 6.935.38.344.569.633.569.854 0 .127-.061.256-.16.348-.099.094-.225.16-.352.16-.436 0-1.033-.51-1.828-1.518C.734 16.654 0 14.373 0 11.682zm17.699 6.869H6.715c-.35 0-.668-.287-.668-.666 0-.383.285-.668.668-.668h10.984c.348 0 .668.285.668.668-.006.385-.287.666-.668.666zm-6-8.919c.197-.025.344.615.361.749.046.353-.071.693-.231 1.003-.597 1.165-1.978 2.104-1.612 3.575.166.635.494 1.076 1.514 1.619-.345.119-.824-.111-1.094-.301-1.199-.816-1.963-2.156-1.888-3.619.03-.464.12-.92.239-1.368.375-1.281 1.139-2.401 1.588-3.647.225-.599.39-1.324.211-1.953-.09-.309-.255-.599-.465-.849-.061-.076-.404-.465-.539-.42.6-.225 1.139-.016 1.662.299.404.24.72.585.959.975.449.719.629 1.542.719 2.381.031.345-.015 1.184.39 1.35.419.179.749-.525.839-.81.195-.645-.06-1.259-.314-1.858.061.121.285.255.389.346l.36.344c.435.449.704 1.004.884 1.604.164.539.24 1.093.27 1.633.074 1.123-.18 2.278-.629 3.311-.195.463-.449.898-.779 1.273-.319.373-.748.613-1.093.957.808-.809 1.238-2.127 1.123-3.131-.06-.553-.239-1.063-.659-1.572 0 0 .045.358.087.583.075.495-.255 1.02-.644.959-.285-.029-.136-.643-.105-.838.105-.584-.03-1.154-.244-1.693-.209-.509-.6-.914-1.198-.823l-.101-.079z" />
    </svg>
  );
});

Freecodecamp.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Freecodecamp;
