
    import * as React from 'react';

    export type CodereviewProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Codereview = React.forwardRef<SVGSVGElement, CodereviewProps>(function Codereview({color = 'currentColor', size = 24, title = "codereview", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M11.986 23.972C5.411 23.972 0 18.561 0 11.986 0 5.411 5.411 0 11.986 0c6.575 0 11.986 5.411 11.986 11.986a11.9 11.9 0 0 1-2.492 7.281l2.062 2.062c.293.293.458.691.458 1.106 0 .859-.706 1.565-1.565 1.565-.415 0-.813-.165-1.106-.458l-2.062-2.062a11.9 11.9 0 0 1-7.281 2.492Zm6.664-6.001a8.936 8.936 0 0 0 2.31-5.985c0-4.923-4.051-8.974-8.974-8.974-2.702 0-5.141 1.22-6.792 3.135h5.255v2.458H3.681a8.851 8.851 0 0 0-.536 1.844H9.22v2.459H3.06c.087.845.297 1.673.621 2.459h4.31v2.458H5.194c1.651 1.915 4.09 3.135 6.792 3.135 2.29 0 4.392-.877 5.985-2.31a1.59 1.59 0 0 1 .679-.679Zm-9.43-.146h7.376v-2.458H9.22v2.458Zm6.147-4.917h4.917v-2.459h-4.917v2.459Zm-4.918 0h3.074v-2.459h-3.074v2.459Zm1.844-4.303h4.918V6.147h-4.918v2.458Z" />
        </svg>
      );
    });

    export default Codereview
