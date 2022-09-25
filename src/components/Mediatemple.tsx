
    import * as React from 'react';

    export type MediatempleProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Mediatemple = React.forwardRef<SVGSVGElement, MediatempleProps>(function Mediatemple({color = 'currentColor', size = 24, title = "mediatemple", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M4.839 10.145v.57h.034c1.021-.615 2.07-.666 2.7-.666 1.695 0 2.28.479 2.49.66.39-.225 1.229-.676 2.685-.676 2.896 0 2.896 1.141 2.896 1.59v2.7H13.32v-2.384c0-.494 0-1.045-1.24-1.045-.612 0-1.242.187-1.463.46-.206.234-.291.446-.291.964v2.021H8.001v-2.303c0-.711.015-1.14-1.206-1.14-.615 0-1.242.162-1.48.405-.186.185-.307.379-.307.996v2.04H2.67v-4.2h2.16l.009.008zm16.431.929h-1.69v1.68c0 .593 0 .786.691.786.328 0 .618-.037.929-.096l.07-.009.22.854c-.817.15-1.711.166-1.966.166-.76 0-1.742-.111-2.105-.425-.309-.255-.346-.506-.346-1.141v-1.82h-1.145v-.877h1.144v-.827l2.52-.65v1.479h1.696v.877l-.018.003zM1.54 16.71C.615 15.313 0 13.65 0 11.979 0 10.005.775 8.4 1.561 7.27h.936c-.695 1.54-1.168 2.85-1.168 4.752 0 2.182.774 3.865 1.125 4.627.012 0 .034.045.034.061H1.54zm20.919-9.42C23.385 8.688 24 10.35 24 12.021c0 1.971-.776 3.58-1.561 4.709h-.936c.694-1.541 1.17-2.85 1.17-4.752 0-2.184-.777-3.863-1.129-4.629-.012-.01-.031-.049-.031-.06h.946z" />
        </svg>
      );
    });

    export default Mediatemple
