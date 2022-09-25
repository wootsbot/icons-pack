
    import * as React from 'react';

    export type AudibleProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Audible = React.forwardRef<SVGSVGElement, AudibleProps>(function Audible({color = 'currentColor', size = 24, title = "audible", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12.008 17.362L24 9.885v2.028l-11.992 7.509L0 11.912V9.886l12.008 7.477zm0-9.378c-2.709 0-5.085 1.363-6.448 3.47.111-.111.175-.175.286-.254 3.374-2.804 8.237-2.17 10.883 1.362l1.758-1.124c-1.394-2.044-3.786-3.454-6.48-3.454m0 3.47a4.392 4.392 0 0 0-3.548 1.821 3.597 3.597 0 0 1 2.139-.697c1.299 0 2.455.666 3.232 1.79l1.679-1.045c-.729-1.157-2.028-1.87-3.501-1.87M3.897 8.412c4.943-3.897 11.929-2.836 15.652 2.344l.031.032 1.822-1.125a11.214 11.214 0 0 0-9.394-5.085c-3.897 0-7.366 1.996-9.394 5.085.364-.412.824-.903 1.283-1.251" />
        </svg>
      );
    });

    export default Audible
