import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Datadog = forwardRef(function Datadog({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M19.55 17.04l-1.99-1.32-1.66 2.78-1.93-.57-1.7 2.6.09.82 9.25-1.71-.54-5.79-1.52 3.19zm-8.63-2.5l1.48-.2c.24.11.41.15.69.22.45.12.97.23 1.74-.16.18-.09.55-.43.7-.63l6.08-1.11.62 7.53-10.41 1.88-.9-7.53zm11.29-2.71l-.6.11L20.46 0 .82 2.28l2.42 19.69 2.3-.33c-.18-.26-.47-.58-.96-.99-.68-.56-.44-1.52-.04-2.13.53-1.02 3.25-2.32 3.1-3.96-.06-.59-.15-1.37-.7-1.9-.02.22.02.43.02.43s-.23-.29-.34-.68c-.11-.15-.2-.2-.32-.4-.08.23-.07.5-.07.5s-.18-.44-.21-.81c-.11.17-.14.48-.14.48s-.24-.69-.19-1.06c-.11-.32-.43-.97-.34-2.42.6.42 1.92.32 2.43-.44.17-.24.29-.93-.08-2.28-.24-.87-.83-2.16-1.07-2.65l-.02.02c.12.4.37 1.22.47 1.63.29 1.22.37 1.64.23 2.2-.12.49-.4.81-1.1 1.16-.71.36-1.65-.51-1.71-.56-.69-.55-1.22-1.45-1.28-1.88-.06-.48.27-.77.44-1.16-.24.07-.51.2-.51.2s.32-.34.72-.63c.16-.11.26-.18.43-.32h-.46s.43-.22.86-.39c-.32-.01-.62 0-.62 0s.93-.42 1.67-.73c.51-.21 1-.15 1.28.26.37.53.75.82 1.56 1 .51-.23.66-.34 1.29-.51.55-.61.99-.69.99-.69s-.22.2-.27.51c.31-.25.66-.45.66-.45s-.13.16-.26.43l.03.04c.37-.22.8-.39.8-.39l-.27.36c.28 0 .84.01 1.05.04 1.28.03 1.55-1.37 2.04-1.55.62-.22.89-.35 1.94.68.9.89 1.6 2.48 1.25 2.83-.29.3-.87-.12-1.51-.92-.34-.42-.59-.93-.71-1.56-.1-.54-.49-.85-.49-.85s.23.51.23.96c0 .25.03 1.16.42 1.68-.04.08-.06.37-.1.43-.46-.55-1.44-.95-1.6-1.07.54.45 1.79 1.47 2.27 2.45.45.93.19 1.78.41 2 .07.06.97 1.2 1.15 1.77.3.99.02 2.04-.38 2.69l-1.11.17c-.16-.05-.27-.07-.42-.15.08-.14.24-.5.24-.57l-.06-.11c-.35.49-.93.97-1.41 1.25-.63.36-1.36.3-1.83.16-1.34-.42-2.62-1.33-2.92-1.57 0 0-.01.19.05.23.34.38 1.12 1.08 1.87 1.56l-1.6.18.76 5.91c-.34.05-.39.07-.75.12-.32-1.15-.94-1.9-1.62-2.33-.6-.38-1.42-.47-2.21-.31l-.05.06c.55-.06 1.19.02 1.86.44.65.41 1.18 1.48 1.37 2.12.25.82.42 1.7-.25 2.63-.47.66-1.86 1.03-2.98.24.3.48.7.88 1.25.95.81.11 1.57-.03 2.1-.57.45-.46.69-1.43.63-2.46l.71-.1.26 1.83 11.79-1.42-1-9.44zm-7.17-4.98c-.03.08-.08.12-.01.37v.01l.01.03.03.07c.14.29.29.56.55.7.07-.01.14-.02.21-.02.24-.01.39.03.49.08.01-.05.01-.12.01-.22-.02-.36.07-.98-.62-1.31-.26-.12-.63-.08-.75.07.02 0 .04.01.06.01.18.07.05.13.02.21m1.95 3.39c-.09-.05-.52-.03-.82.01-.57.07-1.19.27-1.32.37-.25.19-.13.52.05.66.51.38.96.64 1.43.58.29-.04.54-.5.73-.91.11-.3.11-.61-.07-.71M11.93 7.3c.16-.15-.8-.36-1.55.16-.55.37-.57 1.18-.04 1.64.05.05.1.08.14.1a4.857 4.857 0 011.39-.41c.11-.13.24-.35.21-.75-.05-.53-.46-.45-.15-.74" />
    </svg>
  );
});

Datadog.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Datadog;
