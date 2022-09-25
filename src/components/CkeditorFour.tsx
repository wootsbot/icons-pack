
    import * as React from 'react';

    export type CkeditorFourProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const CkeditorFour = React.forwardRef<SVGSVGElement, CkeditorFourProps>(function CkeditorFour({color = 'currentColor', size = 24, title = "ckeditor4", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M16.1237 3.7468a4.5092 4.5092 0 0 0-.469 2.009c0 2.5006 2.0271 4.5278 4.5278 4.5278a4.447 4.447 0 0 0 .0967-.001v6.3413a2.1307 2.1307 0 0 1-1.0654 1.8453l-8.0089 4.6239a2.1307 2.1307 0 0 1-2.1307 0l-8.0088-4.624A2.1307 2.1307 0 0 1 0 16.624V7.3761c0-.7613.4061-1.4647 1.0654-1.8453L9.0742.907a2.1307 2.1307 0 0 1 2.1307 0zM5.733 7.9753a.5327.5327 0 0 0-.5327.5327v.2542c0 .2942.2385.5327.5327.5327h8.9963a.5327.5327 0 0 0 .5327-.5327V8.508a.5327.5327 0 0 0-.5327-.5327zm0 3.281a.5327.5327 0 0 0-.5327.5326v.2542c0 .2942.2385.5327.5327.5327h6.5221a.5327.5327 0 0 0 .5327-.5327v-.2542a.5327.5327 0 0 0-.5327-.5327zm0 3.2809a.5327.5327 0 0 0-.5327.5327v.2542c0 .2942.2385.5326.5327.5326h8.9963a.5327.5327 0 0 0 .5327-.5326v-.2542a.5327.5327 0 0 0-.5327-.5327zm14.5383-5.1414c-2.0593 0-3.7287-1.6694-3.7287-3.7288 0-2.0593 1.6694-3.7287 3.7287-3.7287S24 3.6077 24 5.667c0 2.0594-1.6694 3.7288-3.7288 3.7288zm.6347-2.7825h.393v-.5904h-.397V4.139h-.8144l-1.1668 1.8623v.612H20.27v.5991h.636zm-.632-1.7277v1.1373h-.6928l.6807-1.1373Z" />
        </svg>
      );
    });

    export default CkeditorFour
