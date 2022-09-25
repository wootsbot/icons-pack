
    import * as React from 'react';

    export type SemanticuireactProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Semanticuireact = React.forwardRef<SVGSVGElement, SemanticuireactProps>(function Semanticuireact({color = 'currentColor', size = 24, title = "semanticuireact", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M11.857 23.995C4.52 23.9-.237 17.431.012 11.775-.004 6.167 4.646.066 12.111 0c6.254.027 11.978 5.271 11.885 12.202-.072 6.813-5.84 11.973-12.14 11.793zm.175-4.92c.988.93 3.497 3.166 5.362 1.957 1.434-.93 1.157-3.975.75-5.5 1.597-.365 4.44-1.76 4.37-3.506-.078-2-2.615-3.057-4.408-3.545.347-1.495.913-4.317-.745-5.527-1.637-1.195-4.302.88-5.354 1.969-1.025-.879-3.361-3.096-5.22-2.046-1.46.824-1.513 3.087-.875 5.598-1.441.34-4.459 1.532-4.42 3.546.04 2.183 3.342 3.175 4.397 3.553-.495 1.639-.768 4.596.884 5.55 1.88 1.085 4.39-1.292 5.26-2.048zm-5.244-3.321c.126.039.216.054.362.113.035-.362.268-.685.486-.875-.221-.005-.544-.066-.615-.113.172-.562.439-1.357.657-1.782.25.375.393.674.6 1.1a3.35 3.35 0 0 1 .66-.68c-.645-1.294-1.514-2.837-1.896-4.38.227-.112.426-.116.618-.15.053-.324.162-.638.288-.95-.378-.003-.764.097-1.15.19-.525-1.693-.604-4.156.511-4.624 1.354-.48 3.525 1.331 4.052 2.013l-.337.351c.668-.123 1.305-.107 1.988.013a2.52 2.52 0 0 0-.358-.382c1.172-1.273 3.307-2.653 4.306-1.81.906.852.681 2.98.286 4.456-.466-.083-.72-.138-1.065-.194-.097.51-.163.523-.366.83.317.035.617.065 1.188.234-.19.624-.387 1.202-.662 1.776-.273-.415-.473-.829-.932-1.55l-.565.74c.725 1.284 1.45 2.526 2.143 4.79-.196.114-.309.103-.604.165a4.16 4.16 0 0 1-.333.96c.451-.087.794-.142 1.182-.233.4 1.242.676 3.872-.423 4.554-1.172.677-3.229-.943-4.141-1.918.086-.13.11-.172.26-.274-.594.062-1.29.082-1.779.044.13.108.169.163.207.245-1.43 1.496-3.372 2.559-4.275 1.822-.887-.724-.77-2.846-.293-4.481zm6.072 1.5c2.67-.512 3.576-3.241 2.114-4.976-.405-.48-1.479-1.024-2.257-1.275-1.523-.49-2.556-1.136-1.716-1.962.826-.81 2.851.083 3.182.503l1.155-1.49c-1.161-1.105-2.702-1.52-4.337-1.222C9.54 7.1 8.488 8.336 8.418 9.308c-.155 2.168.875 2.764 2.821 3.598 1.592.682 2.139.913 2.051 1.487-.246 1.618-2.867.959-3.977-.09l-1.361 1.58c1.696 1.405 3.33 1.653 4.908 1.371zM2.404 12.055c-.097-1.216 2.43-2.463 3.731-2.682.318.892.625 1.788 1.031 2.608-.412.86-.737 1.764-1.042 2.679-1.08-.236-3.616-1.31-3.72-2.605zm14.455-.082c.452-1.08.812-2.016 1.013-2.64 1.2.252 3.78 1.37 3.724 2.668-.061 1.442-2.362 2.165-3.703 2.669a29.043 29.043 0 0 0-1.034-2.697z" />
        </svg>
      );
    });

    export default Semanticuireact
