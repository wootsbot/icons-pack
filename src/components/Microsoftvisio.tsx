
    import * as React from 'react';

    export type MicrosoftvisioProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Microsoftvisio = React.forwardRef<SVGSVGElement, MicrosoftvisioProps>(function Microsoftvisio({color = 'currentColor', size = 24, title = "microsoftvisio", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M24 7.609v9.556q0 .424-.302.726-.303.303-.726.303h-5.19q-.072 1.149-.556 2.135-.484.986-1.264 1.717-.78.732-1.803 1.15-1.022.417-2.159.417-1.016 0-1.96-.35-.943-.352-1.705-.969-.762-.617-1.295-1.47-.532-.852-.713-1.856H1.028q-.423 0-.726-.303Q0 18.363 0 17.94V7.609q0-.424.302-.726.303-.302.726-.302h5.238q-.072-.182-.072-.387 0-.424.302-.726L11.274.69q.303-.303.726-.303t.726.303l4.778 4.778q.302.302.302.726 0 .205-.072.387h5.238q.423 0 .726.302.302.302.302.726zM12 2.153l-4.04 4.04.387.388h3.012q.423 0 .726.302.302.302.302.726v2.238l3.653-3.653zM7.161 16.84l3.085-8.13H8.238q-.508 1.489-1.028 2.952-.52 1.464-1.004 2.964-.496-1.488-.992-2.958-.496-1.47-1.004-2.957H2.153l3.037 8.129zM12 22.065q.883 0 1.657-.333t1.355-.913q.58-.581.913-1.355.333-.774.333-1.658 0-.81-.302-1.548-.303-.738-.823-1.318-.52-.581-1.228-.944-.707-.363-1.518-.423v4.367q0 .423-.302.725-.303.303-.726.303H7.923q.206.677.593 1.246.387.568.92.98.532.41 1.185.64.653.23 1.379.23zm10.452-5.42V8.13h-6.158q-.133.133-.441.454-.309.32-.714.725-.405.406-.847.853-.441.448-.828.823-.387.375-.684.641-.296.266-.393.302v.097q.968.036 1.845.411t1.578.998q.702.623 1.186 1.446t.677 1.766Z" />
        </svg>
      );
    });

    export default Microsoftvisio
