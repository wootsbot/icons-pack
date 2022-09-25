
    import * as React from 'react';

    export type OpslevelProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Opslevel = React.forwardRef<SVGSVGElement, OpslevelProps>(function Opslevel({color = 'currentColor', size = 24, title = "opslevel", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M11.998 0L7.3027 2.7168v2.045l-4.875 2.7929v5.0098L.338 13.7735v5.4355l4.6973 2.7187 1.662-.9629L12 24l5.3008-3.0352 1.664.963 4.6973-2.7188v-5.4356l-2.0898-1.207V7.5547l-4.877-2.793V2.7168L11.998 0zm0 1.1953l3.127 1.8125L12 4.8028l-3.125-1.797 3.123-1.8105zM8.3398 3.8945l3.1426 1.8067V9.377L8.3398 7.5547V3.8945zm7.3184 0v3.6602L12.5195 9.373V5.6992l3.1387-1.8047zm1.0371 2.0625l3.8418 2.1973v3.8125l-1.5723-.9102-4.6972 2.7168v5.4356l1.998 1.1562L12 22.8047l-4.2637-2.4395 1.9961-1.1562v-5.4356l-4.6972-2.7168-1.5704.9082V8.1543l3.838-2.1953v2.1953h.0019L12 10.8711l4.6953-2.7168V5.957zM5.0352 12.254l3.125 1.8085-3.125 1.7969-3.125-1.7969.5175-.3008 2.6075-1.5078zm13.9296 0l2.6075 1.5097.5156.2988-3.123 1.7969-3.125-1.7969 3.125-1.8086zM1.377 14.9491l3.1425 1.8086v3.6758L1.377 18.6113v-3.662zm7.3183 0v3.6621l-3.0371 1.7578-.1016.0606v-3.6738l3.1387-1.8067zm6.6094 0l3.1445 1.8086v3.6758l-.1074-.0645-3.0371-1.7578v-3.662zm7.3183 0v3.6621l-3.1386 1.8184v-3.6719l3.1386-1.8086z" />
        </svg>
      );
    });

    export default Opslevel
