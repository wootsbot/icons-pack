
    import * as React from 'react';

    export type UnderscoredotjsProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Underscoredotjs = React.forwardRef<SVGSVGElement, UnderscoredotjsProps>(function Underscoredotjs({color = 'currentColor', size = 24, title = "underscoredotjs", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M13.704 9.96a1.244 1.244 0 0 0-.3.047 1.016 1.016 0 0 0-.696.586c-.074.16-.08.202-.08.613 0 .413.006.453.08.61a1.047 1.047 0 0 0 .478.508c.158.076.204.085.507.085.452 0 .564-.025.564-.125 0-.076-.003-.076-.143-.052-.277.045-.652.027-.8-.04-.286-.13-.476-.424-.512-.798-.061-.597.155-1.057.579-1.214.183-.067.545-.067.752.003.133.045.167.05.188.015.067-.107-.005-.155-.304-.21a1.545 1.545 0 0 0-.313-.026zm-2.227.01a.692.692 0 0 0-.16.017.765.765 0 0 0-.469.358.745.745 0 0 0-.033.244c0 .314.142.46.646.653.512.2.603.28.603.55 0 .42-.515.59-1.213.4-.064-.016-.07-.011-.062.068.01.08.026.093.178.125.242.05.634.047.817-.005.182-.055.362-.2.42-.34a.835.835 0 0 0 .042-.277c0-.3-.14-.453-.562-.615-.55-.212-.687-.316-.693-.537a.4.4 0 0 1 .216-.403c.116-.066.173-.08.354-.08.116 0 .296.027.393.056.183.055.228.043.23-.064 0-.074-.43-.154-.706-.15zm4.233 0a1.044 1.044 0 0 0-.226.02c-.507.106-.8.55-.8 1.201 0 .453.142.817.4 1.024.205.16.326.196.68.196.258-.004.329-.016.457-.078.383-.188.593-.59.593-1.14 0-.549-.216-.957-.593-1.13a1.39 1.39 0 0 0-.51-.094zm7.536.001a1.027 1.027 0 0 0-.257.026.707.707 0 0 0-.41.307.78.78 0 0 0 0 .563c.07.13.263.252.64.391.48.182.629.36.543.645-.069.23-.32.37-.657.37a2.087 2.087 0 0 1-.527-.076c-.094-.02-.1-.018-.1.054 0 .12.155.16.61.16.354 0 .388-.007.537-.086a.605.605 0 0 0 .29-.793c-.08-.177-.229-.277-.677-.45-.426-.162-.533-.262-.533-.5 0-.194.07-.303.248-.395.152-.08.48-.08.71-.003.16.055.166.055.206 0 .061-.085.052-.097-.12-.15a1.907 1.907 0 0 0-.503-.063Zm-18.367.04v2.39l.48-.013c.423-.012.5-.02.666-.09.48-.196.67-.559.643-1.214-.02-.506-.17-.77-.535-.95-.2-.1-.204-.1-.728-.11Zm4.08 0v2.382h.152V11.36h.593l.304.517c.296.509.305.518.405.518h.1l-.097-.176a18.403 18.403 0 0 0-.32-.537l-.216-.362.15-.076a.64.64 0 0 0 .335-.737c-.049-.204-.11-.293-.277-.39-.133-.08-.16-.08-.633-.09zm-8.958.01.009.903c.01.876.013.912.08 1.05.157.32.463.472.888.442.37-.024.583-.155.733-.449.07-.134.075-.158.083-1.043l.013-.904h-.19v.843c0 .52-.012.892-.032.968-.05.178-.254.362-.454.41-.31.077-.653-.017-.8-.217-.134-.18-.144-.264-.144-1.155v-.85H.095Zm2.44 0v2.373h.152l.005-1.054.01-1.056.7 1.052c.637.96.71 1.058.786 1.058h.083V10.02h-.154v2.084l-.693-1.04c-.67-1.014-.695-1.043-.79-1.046Zm4.657 0v2.373h1.31v-.152H7.251l.007-.513.01-.508.54-.009.54-.007v-.152h-1.1l.01-.45.01-.447.572-.008c.544-.007.568-.01.568-.067 0-.06-.02-.06-.653-.06zm10.173 0v2.373h.152V11.36h.602l.3.517c.29.5.302.516.4.518.05 0 .097-.005.097-.018 0-.008-.14-.25-.307-.535a5.972 5.972 0 0 1-.298-.525 1.248 1.248 0 0 1 .133-.073c.234-.12.35-.313.35-.594a.6.6 0 0 0-.453-.6 3.688 3.688 0 0 0-.542-.03zm1.947 0v2.373h1.31v-.152h-1.126v-1.037h1.067v-.152h-1.067v-.912h.564c.542 0 .563-.003.563-.06 0-.058-.02-.06-.653-.06zm2.59 0v1.264c0 1.079-.008 1.283-.048 1.368-.066.137-.17.183-.4.177-.172-.004-.193.003-.193.054 0 .084.133.13.33.11.206-.02.334-.097.413-.25.06-.12.064-.17.073-1.427l.01-1.297h-.091zm-12.7.11.33.021c.18.013.373.037.432.055.325.097.44.54.21.8-.129.142-.31.2-.674.2h-.295v-.538zm-3.885.013a4.267 4.267 0 0 1 .376.03c.43.047.667.197.803.498.061.133.07.204.07.52 0 .34-.006.377-.085.54a1.008 1.008 0 0 1-.21.28c-.182.16-.35.208-.775.222l-.375.016v-1.034c0-.57.01-1.043.022-1.052.013-.015.077-.02.174-.02zm12.387 0c.09 0 .213.01.346.026.295.034.432.107.503.26.12.263.036.556-.196.69-.11.06-.175.072-.483.081l-.36.012v-.515c0-.282.01-.526.023-.536.012-.013.073-.02.165-.018zm-1.858 0a1.197 1.197 0 0 1 .334.044.873.873 0 0 1 .458.472c.058.14.067.23.067.532 0 .401-.045.573-.21.79-.21.274-.703.36-1.06.188-.334-.16-.462-.44-.46-.993 0-.288.014-.38.07-.523.077-.194.296-.42.467-.472a1.14 1.14 0 0 1 .333-.036zm5.352 1.98c-.052 0-.072.018-.097.07-.048.11.01.232.11.232.098 0 .147-.066.134-.19-.01-.087-.02-.1-.107-.11a.379.379 0 0 0-.04-.001zm-9.082 1.308c-6.59 0-11.99.01-11.999.02a1.2 1.2 0 0 0-.021.305v.283H24v-.608z" />
        </svg>
      );
    });

    export default Underscoredotjs
