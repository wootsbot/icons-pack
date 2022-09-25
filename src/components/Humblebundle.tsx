
    import * as React from 'react';

    export type HumblebundleProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Humblebundle = React.forwardRef<SVGSVGElement, HumblebundleProps>(function Humblebundle({color = 'currentColor', size = 24, title = "humblebundle", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M17.895 19.341c-3.384 0 1.826-19.186 1.826-19.186L16.233.151s-1.427 4.515-2.37 9.533h-3.005c.078-1.032.116-2.076.099-3.114-.135-8.26-4.974-6.73-7.14-4.835C1.758 3.538.033 6.962 0 9.6c.328-.016 1.624-.022 1.624-.022S2.702 4.66 6.086 4.66c3.385 0-1.834 19.187-1.834 19.187l3.49.002s1.803-5.136 2.7-10.872l2.87-.017c-.167 1.485-.22 3.124-.196 4.646.136 8.26 4.956 6.488 7.122 4.593 2.166-1.896 3.782-5.9 3.762-7.822.002-.002-1.645.013-1.665.013.006.152-1.056 4.951-4.44 4.951z" />
        </svg>
      );
    });

    export default Humblebundle
