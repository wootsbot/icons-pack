
    import * as React from 'react';

    export type DataikuProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Dataiku = React.forwardRef<SVGSVGElement, DataikuProps>(function Dataiku({color = 'currentColor', size = 24, title = "dataiku", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm6.527 15.34H12.5v-.934h6.026zm-.739-8.73s-.412.543-.193 1.995c.41 2.724-1.02 5.15-3.56 5.15h-1.87s-1.835-.092-2.933 1.01c-3.263 3.269-4.04 4.116-4.274 4.233-.15.08-.188-.093-.188-.093l9.644-11.891c-.203-2.145 2.34-2.715 3.278-1.13l.884-.248zm-1.599-.614a.476.476 0 1 0 .47.474.476.476 0 0 0-.47-.474z" />
        </svg>
      );
    });

    export default Dataiku
