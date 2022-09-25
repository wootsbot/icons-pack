
    import * as React from 'react';

    export type SourcetreeProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Sourcetree = React.forwardRef<SVGSVGElement, SourcetreeProps>(function Sourcetree({color = 'currentColor', size = 24, title = "sourcetree", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M11.999 0C6.756 0 2.474 4.245 2.474 9.525c0 4.21 2.769 7.792 6.572 9.047v4.764c0 .37.295.664.664.664h4.506a.661.661 0 0 0 .664-.664v-4.764c.025-.008.049-.019.074-.027v.064c3.694-1.22 6.412-4.634 6.565-8.687.005-.124.007-.25.007-.375v-.022c0-.152-.006-.304-.013-.455C21.275 4.037 17.125 0 11.999 0Zm0 6.352a3.214 3.214 0 0 1 2.664 5.005v.002A3.218 3.218 0 0 1 12 12.775a3.212 3.212 0 0 1 0-6.424z" />
        </svg>
      );
    });

    export default Sourcetree
