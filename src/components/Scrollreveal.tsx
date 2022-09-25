
    import * as React from 'react';

    export type ScrollrevealProps = React.ComponentPropsWithoutRef<'svg'> & {
      /**
       * Hex color or color name
       */
      title?: string;
      /**
       * The size of the Icon.
       */
      color?: string;
      /**
       * The title provides an accessible short text description to the SVG
       */
      size?: string | number;
    };

    const Scrollreveal = React.forwardRef<SVGSVGElement, ScrollrevealProps>(function Scrollreveal({color = 'currentColor', size = 24, title = "scrollreveal", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M1.714 2.857A1.71 1.71 0 0 0 0 4.571v6.858c0 .95.765 1.714 1.714 1.714a1.71 1.71 0 0 0 1.715-1.714V4.57a1.71 1.71 0 0 0-1.715-1.714zm6.857 0a1.71 1.71 0 0 0-1.714 1.714v1.143c0 .95.765 1.715 1.714 1.715a1.71 1.71 0 0 0 1.715-1.715V4.571A1.71 1.71 0 0 0 8.57 2.857zm6.858 0a1.71 1.71 0 0 0-1.715 1.714V19.43c0 .95.765 1.714 1.715 1.714a1.71 1.71 0 0 0 1.714-1.714V4.57a1.71 1.71 0 0 0-1.714-1.714zm6.857 0a1.71 1.71 0 0 0-1.715 1.714v6.858c0 .95.765 1.714 1.715 1.714A1.71 1.71 0 0 0 24 11.429V4.57a1.71 1.71 0 0 0-1.714-1.714zm-13.715 8a1.71 1.71 0 0 0-1.714 1.714v6.858c0 .95.765 1.714 1.714 1.714a1.71 1.71 0 0 0 1.715-1.714V12.57a1.71 1.71 0 0 0-1.715-1.714zm-6.857 5.714A1.71 1.71 0 0 0 0 18.286v1.143c0 .95.765 1.714 1.714 1.714a1.71 1.71 0 0 0 1.715-1.714v-1.143a1.71 1.71 0 0 0-1.715-1.715zm20.572 0a1.71 1.71 0 0 0-1.715 1.715v1.143c0 .95.765 1.714 1.715 1.714A1.71 1.71 0 0 0 24 19.429v-1.143a1.71 1.71 0 0 0-1.714-1.715Z" />
        </svg>
      );
    });

    export default Scrollreveal
