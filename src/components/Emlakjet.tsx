
    import * as React from 'react';

    export type EmlakjetProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Emlakjet = React.forwardRef<SVGSVGElement, EmlakjetProps>(function Emlakjet({color = 'currentColor', size = 24, title = "emlakjet", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M15.65 16.105v-.24a3.543 3.543 0 00-1.267-2.471c-.724-.663-1.69-.965-2.655-.904-1.87.12-3.378 1.747-3.378 3.615 0 .784.12 1.567.422 2.471H4.55V6.946l7.42-5.123 7.482 5.122v11.692h-4.223c.18-.663.422-1.688.422-2.532m5.068-10.244L12.452.136c-.301-.181-.663-.181-.905 0L3.222 5.86c-.242.12-.362.361-.362.663V19.48c0 .482.362.844.844.844H9.92a.824.824 0 00.844-.844c0-.06 0-.18-.06-.24l-.06-.182c-.302-.723-.664-1.627-.664-2.53v-.182c-.06-.542.12-1.084.482-1.446a2.095 2.095 0 011.388-.723c.543-.06 1.026.12 1.448.482.422.362.664.844.724 1.386v.18c.06 1.206-.724 2.954-.845 3.135l-1.146 2.17-.18-.362c-.122-.181-.302-.362-.483-.422-.182-.06-.423-.06-.604.06-.18.12-.362.301-.422.482s-.06.422.06.603l.905 1.687c.121.241.423.422.724.422.302 0 .604-.18.724-.422l1.81-3.375h5.732a.824.824 0 00.844-.843V6.524c-.06-.302-.18-.543-.422-.663" />
        </svg>
      );
    });

    export default Emlakjet
