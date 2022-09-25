
    import * as React from 'react';

    export type TestinProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Testin = React.forwardRef<SVGSVGElement, TestinProps>(function Testin({color = 'currentColor', size = 24, title = "testin", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M5.052 9.923H3.067v5.232H1.985V9.923H0V8.841h5.052v1.082zm3.459 1.74c.413.788.326 1.696.326 1.696H5.31c.134.391.461.718 1.182.718h2.172v1.083H6.492c-1.028 0-1.587-.451-1.874-.829-.304-.399-.471-.936-.471-1.513 0-1.165.806-2.345 2.345-2.345.897-.001 1.616.421 2.019 1.19zm-.895.659c-.152-.35-.469-.767-1.124-.767-.74 0-1.046.411-1.173.767h2.297zm4.971-.05H10.89a.344.344 0 0 1-.344-.344.4.4 0 0 1 .118-.279.322.322 0 0 1 .224-.099h2.47v-1.082h-2.44c-.429 0-.75.147-1.018.415a1.486 1.486 0 0 0-.436 1.045c0 .787.64 1.427 1.427 1.427h1.697c.212 0 .384.17.384.378 0 .19-.157.344-.35.344H9.719v1.083h2.902c.79 0 1.433-.64 1.433-1.426 0-.806-.658-1.462-1.467-1.462zm3.839-3.427h-1.083v1.624h-1.26v1.083h1.26v1.533c0 1.086 1.118 2.075 2.345 2.075v-1.083c-.68 0-1.263-.546-1.263-.992v-1.533h1.265v-1.083h-1.265V8.845zm1.981 6.31h1.083v-4.691h-1.083v4.691zm.542-6.311a.54.54 0 1 0 0 1.081.54.54 0 0 0 0-1.081zm3.112 1.617c-1.02 0-1.849.825-1.849 1.838v2.856h1.083v-2.856c0-.417.344-.755.767-.755.44 0 .857.367.857.755v2.856H24v-2.856c0-.996-.888-1.838-1.939-1.838z" />
        </svg>
      );
    });

    export default Testin
