
    import * as React from 'react';

    export type StadiaProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Stadia = React.forwardRef<SVGSVGElement, StadiaProps>(function Stadia({color = 'currentColor', size = 24, title = "stadia", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M6.5253 10.0302a18.279 18.279 0 0 1 15.7805.263c.263.1973.6575 0 .7233-.263l.9205-2.8273c.1315-.263 0-.6576-.3288-.789A22.3557 22.3557 0 0 0 .2788 8.6493a.6575.6575 0 0 0-.1972.8548l2.1698 4.7999c.1315.3287.526.526.8548.3945 2.4328-.9205 6.1807-1.841 9.9943-1.315-2.63.4602-4.6684 1.3807-6.3122 2.367a.6575.6575 0 0 0-.1972.8548L7.906 19.63c.1315.263.4603.3288.6575.1315.526-.526 1.052-.9205 1.5123-1.1835 2.104-1.1836 4.9972-2.1041 8.8765-1.9068a.6575.6575 0 0 0 .6576-.4603l.9862-2.9589c.1316-.263 0-.6575-.263-.789a20.0544 20.0544 0 0 0-13.8737-2.4328z" />
        </svg>
      );
    });

    export default Stadia
