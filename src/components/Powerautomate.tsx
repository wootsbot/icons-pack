
    import * as React from 'react';

    export type PowerautomateProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Powerautomate = React.forwardRef<SVGSVGElement, PowerautomateProps>(function Powerautomate({color = 'currentColor', size = 24, title = "powerautomate", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="m20.079 7.235 3.666 4.097c.34.38.34.956 0 1.336l-7.63 8.528c-.19.213-.462.334-.748.334H7.289l12.79-14.295ZM6.789 21.53H1.005c-.867 0-1.326-1.025-.748-1.671L15.748 2.545c.139.057.265.145.367.259l3.631 4.058a.478.478 0 0 0-.039.039L6.916 21.197a.497.497 0 0 0-.127.333Zm8.356-19.06-8.192 9.155L.257 4.141c-.578-.646-.119-1.671.748-1.671h14.14Z" />
        </svg>
      );
    });

    export default Powerautomate
