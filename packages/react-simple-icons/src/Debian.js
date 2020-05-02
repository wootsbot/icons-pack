import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Debian = forwardRef(function Debian({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M13.88 12.68c-.4 0 .08.2.6.28.14-.1.27-.22.39-.33a3 3 0 0 1-.99.05M16.02 12.15c.23-.33.4-.69.47-1.06-.06.27-.2.5-.33.73-.75.47-.07-.27 0-.56-.8 1.01-.11.6-.14.89M16.8 10.1c.05-.72-.14-.5-.2-.22.07.04.13.5.2.22M12.38.31c.2.04.45.07.42.12.23-.05.28-.1-.43-.12M12.8.43l-.15.03.14-.01V.43M19.42 10.37c.02.64-.2.95-.38 1.5l-.35.18c-.28.54.03.35-.17.78-.44.39-1.34 1.22-1.62 1.3-.2 0 .14-.25.19-.34-.59.4-.48.6-1.37.85l-.03-.06c-2.22 1.04-5.3-1.02-5.25-3.84-.03.17-.07.13-.12.2a3.55 3.55 0 0 1 2-3.5 3.36 3.36 0 0 1 3.73.48 3.34 3.34 0 0 0-2.72-1.3c-1.18.01-2.28.76-2.65 1.57-.6.38-.67 1.47-.93 1.66-.36 2.6.66 3.72 2.38 5.04.27.19.08.21.12.35a4.7 4.7 0 0 1-1.53-1.16c.23.33.47.66.8.91-.55-.18-1.27-1.3-1.48-1.35.93 1.66 3.78 2.92 5.26 2.3a6.2 6.2 0 0 1-2.33-.28c-.33-.16-.77-.51-.7-.57a5.8 5.8 0 0 0 5.9-.84c.44-.35.93-.94 1.07-.95-.2.32.04.16-.12.44.44-.72-.2-.3.46-1.24l.24.33c-.09-.6.74-1.32.66-2.26.19-.3.2.3 0 .97.29-.74.08-.85.15-1.46.08.2.18.42.23.63-.18-.7.2-1.2.28-1.6-.09-.05-.28.3-.32-.53 0-.37.1-.2.14-.28-.08-.05-.26-.32-.38-.86.08-.13.22.33.34.34-.08-.42-.2-.75-.2-1.08-.34-.68-.12.1-.4-.3-.34-1.09.3-.25.34-.74.54.77.84 1.96.98 2.46-.1-.6-.28-1.2-.49-1.76.16.07-.26-1.24.21-.37A7.82 7.82 0 0 0 17.7 1.6c.18.17.42.39.33.42-.75-.45-.62-.48-.73-.67-.61-.25-.65.02-1.06 0C15.08.73 14.86.8 13.8.4l.05.23c-.77-.25-.9.1-1.73 0-.05-.04.27-.14.53-.18-.74.1-.7-.14-1.43.03.17-.13.36-.21.55-.32-.6.04-1.44.35-1.18.07C9.6.68 7.85 1.3 6.87 2.22L6.84 2c-.45.54-1.96 1.61-2.08 2.31l-.13.03c-.23.4-.38.85-.57 1.26-.3.52-.45.2-.4.28-.6 1.22-.9 2.25-1.16 3.1.18.27 0 1.65.07 2.76-.3 5.46 3.84 10.77 8.36 12 .67.23 1.65.23 2.49.25-.99-.28-1.12-.15-2.08-.49-.7-.32-.85-.7-1.34-1.13l.2.35c-.97-.34-.57-.42-1.36-.67l.21-.27c-.31-.03-.83-.53-.97-.81l-.34.01c-.41-.5-.63-.87-.61-1.16l-.11.2c-.13-.21-1.52-1.9-.8-1.51-.13-.12-.31-.2-.5-.55l.14-.17c-.35-.44-.64-1.02-.62-1.2.2.24.32.3.45.33-.88-2.17-.93-.12-1.6-2.2l.15-.02c-.1-.16-.18-.34-.26-.51l.06-.6c-.63-.74-.18-3.1-.09-4.4.07-.54.53-1.1.88-1.98l-.21-.04c.4-.71 2.34-2.87 3.24-2.76.43-.55-.09 0-.18-.14.96-.99 1.26-.7 1.9-.88.7-.4-.6.16-.27-.15 1.2-.3.85-.7 2.42-.85.16.1-.39.14-.52.26 1-.49 3.15-.37 4.56.27 1.63.77 3.46 3.01 3.53 5.13l.08.02c-.04.85.13 1.82-.17 2.71l.2-.42M9.54 13.23l-.05.28c.26.35.47.73.8 1.01-.24-.47-.42-.66-.75-1.3M10.16 13.2c-.14-.15-.22-.34-.31-.52.08.32.26.6.43.88l-.12-.36M21.1 10.82l-.07.15c-.1.76-.34 1.51-.69 2.21.4-.73.65-1.54.75-2.36M12.45.12c.27-.1.66-.05.95-.12-.37.03-.74.05-1.1.1l.15.02M3.01 5.14c.07.57-.43.8.11.42.3-.66-.11-.18-.1-.42M2.38 7.8c.12-.39.15-.62.2-.84-.35.44-.17.53-.2.83" />
    </svg>
  );
});

Debian.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Debian;
