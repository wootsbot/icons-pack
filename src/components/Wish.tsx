
    import * as React from 'react';

    export type WishProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Wish = React.forwardRef<SVGSVGElement, WishProps>(function Wish({color = 'currentColor', size = 24, title = "wish", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M21.463 8.653c-.627 0-1.21.511-1.297 1.135l-.637 4.647c-.07.507-.313.945-.727 1.318-.415.372-.882.558-1.4.558-.504 0-.912-.182-1.224-.547-.313-.365-.433-.808-.361-1.329l.385-2.82a.965.965 0 0 0-.993-1.003h-1.525c-.582 0-1.127.44-1.27 1.003l-.397 2.82a2.11 2.11 0 0 1-.73 1.329c-.413.365-.871.547-1.375.547a1.55 1.55 0 0 1-1.234-.558c-.319-.372-.443-.811-.373-1.318l.854-6.166c.09-.6-.265-1.227-.808-1.482 0 0-6.43-2.68-6.85-2.853C1.078 3.76.597 4.15.433 4.8L.039 6.35c-.165.65.207 1.39.824 1.643l4.31 1.784-.646 4.66c-.217 1.562.15 2.899 1.1 4.008.95 1.11 2.203 1.663 3.76 1.663 1.436 0 2.748-.483 3.934-1.451.947.968 2.133 1.451 3.555 1.451 1.556 0 2.963-.554 4.22-1.663 1.258-1.11 1.995-2.446 2.211-4.009l.688-5.003c.059-.428-.406-.778-1.032-.778h-1.5z" />
        </svg>
      );
    });

    export default Wish
