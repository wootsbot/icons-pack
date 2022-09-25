
    import * as React from 'react';

    export type StellarProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Stellar = React.forwardRef<SVGSVGElement, StellarProps>(function Stellar({color = 'currentColor', size = 24, title = "stellar", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12.283 1.851A10.154 10.154 0 001.846 12.002c0 .259.01.516.03.773A1.847 1.847 0 01.872 14.56L0 15.005v2.074l2.568-1.309.832-.424.82-.417 14.71-7.496 1.653-.842L24 4.85V2.776l-3.387 1.728-2.89 1.473-13.955 7.108a8.376 8.376 0 01-.07-1.086 8.313 8.313 0 0112.366-7.247l1.654-.843.247-.126a10.154 10.154 0 00-5.682-1.932zM24 6.925L5.055 16.571l-1.653.844L0 19.15v2.072L3.378 19.5l2.89-1.473 13.97-7.117a8.474 8.474 0 01.07 1.092A8.313 8.313 0 017.93 19.248l-.101.054-1.793.914a10.154 10.154 0 0016.119-8.214c0-.26-.01-.522-.03-.78a1.848 1.848 0 011.003-1.785L24 8.992Z" />
        </svg>
      );
    });

    export default Stellar
