
    import * as React from 'react';

    export type PubmedProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Pubmed = React.forwardRef<SVGSVGElement, PubmedProps>(function Pubmed({color = 'currentColor', size = 24, title = "pubmed", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M8.23 7.982l.006-1.005C7.846 1.417 5.096 0 5.096 0l.048 2.291C3.73 1.056 2.6 1.444 2.6 1.444l.118 15.307s4.218-1.796 5.428 5.505C10.238 13.535 21.401 24 21.401 24V9S10.52-.18 8.231 7.982zm9.79 9.941l-1.046-5.232-1.904 4.507h-.96l-1.72-4.301-1.046 5.04H9.321l2.093-9.39h.802l2.491 5.543 2.508-5.557h.869l2.075 9.39h-2.138z" />
        </svg>
      );
    });

    export default Pubmed
