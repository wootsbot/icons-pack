
    import * as React from 'react';

    export type StylusProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Stylus = React.forwardRef<SVGSVGElement, StylusProps>(function Stylus({color = 'currentColor', size = 24, title = "stylus", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M13.671 8.861c-.445-.354-1.697.239-2.05 1.118-.446 1.116-1.105 2.746-1.752 3.46-.683.75-.751.17-.683-.262.158-1.02 1.153-3.381 1.696-4.047-.202-.3-1.52-.256-2.435 1.166-.342.536-1.122 2.325-1.99 3.734-.19.305-.427.092-.243-.621.207-.825.818-3.089 1.604-4.871 2.064-.409 4.254-.696 5.933-.702.226-.06.377-.263 0-.275-1.447-.049-3.62.122-5.652.38.391-.782.812-1.404 1.239-1.667-.464-.293-1.404-.177-1.94.617a10.547 10.547 0 00-.702 1.244c-1.49.232-2.765.494-3.412.739-.671.256-.598 1.068-.19.915.85-.317 1.996-.647 3.272-.94-.812 1.831-1.447 3.992-1.599 4.87-.379 2.137.946 2.124 1.593 1.282.702-.922 2.166-4.163 2.392-4.504.067-.116.16-.055.11.048-1.635 3.265-1.496 4.529-.17 4.248.597-.128 1.629-1.153 1.897-1.684.055-.128.171-.116.146-.061-1.037 2.692-2.355 4.87-3.24 5.554-.805.616-1.404-.72 1.446-2.637.422-.286.226-.677-.25-.543-1.47.232-5.681 1.568-7.53 2.85-.142.098-.27.177-.264.379.006.116.208.073.306.012 2.393-1.435 4.351-1.995 6.597-2.466.03.013.067.019.097.007.104-.025.098.03.031.073a3.99 3.99 0 01-.342.177c-1.513.591-2.429 1.897-2.105 2.563.275.574 1.758.366 2.46-.012 1.72-.934 2.971-2.765 3.826-5.292.745-2.24 1.685-4.778 1.904-4.852zM3.7 16.094c.623-.745.696-1.514.214-2.942-.305-.903-.812-1.599-.44-2.16.397-.598 1.24-.019.538.78l.14.098c.842.098 1.257-1.056.628-1.386-1.66-.866-3.113.8-2.472 2.729.275.817.66 1.684.348 2.374-.268.592-.787.94-1.135.952-.726.037-.244-1.63.592-2.045.073-.036.177-.085.08-.207-1.032-.116-1.636.36-1.984 1.025-1.013 1.934 1.922 2.649 3.49.782zm19.974-2.064c-2.8-.366-8.842.122-11.509.831-.794.207-.574.628-.171.549.006 0 .177-.043.183-.043 2.191-.427 7.507-.8 10.607-.207.372.067 1.49-1.05.89-1.13zm-9.22-.329c.78-.39 1.94-2.808 2.702-4.131.055-.098.153-.02.098.048-1.928 3.32-1.11 3.705-.348 3.656 1.02-.061 1.96-1.526 2.167-1.856.086-.128.135-.024.086.068-.05.152-.226.421-.391.787-.232.519.012.72.214.812.317.153 1.183.055 1.317-.476-.865-.018 1.209-4.108 1.423-4.358-.58-.336-1.477.031-1.886.836-.872 1.727-1.605 3.119-2.063 3.143-.89.049 1.026-3.85 1.337-3.973-.19-.275-1.404-.159-2.082.89-.244.38-1.732 3.016-2.099 3.45-.647.769-.696.11-.513-.66.061-.262.165-.598.3-.97.427-.964.885-1.27 1.166-1.581 1.885-2.093 2.966-3.79 2.538-4.455-.378-.592-1.642-.33-2.453.89-1.496 2.241-2.874 5.31-3.051 6.715-.171 1.403.847 1.506 1.537 1.165zm7.372-3.296c.238.586.598 1.166.384 1.679-.177.439-.41.623-.665.665-.36.06-.263-1.068.354-1.404.055-.03.134-.177.06-.262-.78-.043-1.22.33-1.458.824-.69 1.447 1.563 1.842 2.667.42.44-.567.458-1.128.036-2.147-.267-.647-.676-1.13-.42-1.557.275-.45.933-.061.44.544l.11.06c.64.037.902-.817.414-1.03-1.287-.55-2.49.835-1.922 2.208zm-6.579-.811c.067-.153.11-.195.226-.452.67-1.477 1.514-3.033 2.093-3.759.36-.379.866.134-.049 1.538a14.165 14.165 0 01-1.812 2.264v.006c-.171.189-.324.348-.391.44-.049.06-.104.049-.067-.037z" />
        </svg>
      );
    });

    export default Stylus
