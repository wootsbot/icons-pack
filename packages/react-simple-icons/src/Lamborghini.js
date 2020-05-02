import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Lamborghini = forwardRef(function Lamborghini({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M11.865 0a31.57 31.57 0 0 0-3.712.245l-.272.037-.338.046c-.073.009-.18.026-.236.038a3.7 3.7 0 0 1-.206.036 7.728 7.728 0 0 0-.265.043l-.265.048c-.193.034-.763.15-1.051.215-1.064.238-2.245.594-2.73.824-.343.163-.772.506-.93.743a2.157 2.157 0 0 0-.287.777c-.029.158-.032.23-.034.832-.003.728.009 1.223.044 1.865.166 3.019.696 5.54 1.686 8a20.797 20.797 0 0 0 2.635 4.81c1 1.363 2.12 2.572 3.395 3.67.769.66 1.737 1.405 2.076 1.595.386.217.82.234 1.19.047.3-.153 1.382-.974 2.113-1.604a24.361 24.361 0 0 0 3.119-3.27c.51-.645 1.541-2.254 1.977-3.085 1.622-3.09 2.549-6.883 2.651-10.812.03-.642.045-1.224.03-1.529a4.107 4.107 0 0 0-.017-.228l.001-.397-.165-.343a1.683 1.683 0 0 0-.383-.533c-.196-.205-.372-.321-.783-.519-.997-.48-2.338-.858-3.958-1.118a25.346 25.346 0 0 0-1.552-.216l-.404-.048a7.685 7.685 0 0 0-.41-.037 41.827 41.827 0 0 0-1.988-.12 21.41 21.41 0 0 0-.931-.011zm.167.83c3.34-.007 6.128.436 8.399 1.332.84.33.99.433 1.16.792.128.27.13.31.094 1.691-.197 7.59-2.8 13.219-8.113 17.541-.644.525-1.316 1.003-1.484 1.056-.083.026-.235-.033-.483-.187-.492-.305-1.718-1.303-2.54-2.068-1.352-1.255-2.707-2.937-3.63-4.506-1.97-3.344-2.993-7.244-3.114-11.866-.035-1.35-.032-1.392.096-1.662.17-.357.322-.462 1.13-.777C5.777 1.303 8.132.9 11.357.837c.228-.004.453-.007.675-.007zm-.941.708l-.045.003c-.2.024-.448.206-.567.422-.273.495-.22 1.592.096 1.974.123.15.188.176.421.176.155 0 .334-.04.407-.093.073-.052.19-.207.26-.345.184-.36.188-1.265.007-1.668-.116-.257-.333-.443-.538-.466l-.022-.002h-.02zm1.094.06l-.017 1.233a59.48 59.48 0 0 0-.01 1.184.346.346 0 0 0 .02.06c.025.005.089.009.173.009h.182v-.529c0-.506.005-.527.126-.509.1.015.162.126.307.543l.182.524h.44l-.194-.564-.193-.565.158-.151c.193-.186.253-.456.17-.767-.091-.347-.322-.467-.891-.468zm2.376.06c-.505 0-.733.383-.73 1.228 0 .558.084.91.264 1.113.208.233.66.274.945.084.154-.102.252-.416.255-.808 0-.104-.004-.186-.018-.244-.033-.094-.13-.106-.407-.133l-.235-.023c-.041.024-.044.08-.044.204v.04l.001.018c.006.118.035.138.146.138.118 0 .146.03.146.154 0 .355-.28.512-.49.276-.288-.324-.223-1.56.087-1.66.13-.042.345.115.345.251 0 .052.072.08.205.08.234 0 .26-.079.118-.358a.605.605 0 0 0-.588-.36zm-5.199.038a2.322 2.322 0 0 0-.327.014l-.353.038-.016 1.249-.016 1.249.428-.042c.235-.024.49-.074.569-.111.241-.118.378-.366.383-.695.003-.23-.025-.329-.123-.429-.126-.128-.126-.13-.015-.316a.685.685 0 0 0 .024-.697c-.083-.163-.263-.249-.554-.26zm6.287.074v2.51l.205.024.206.025v-.557c0-.617-.019-.594.427-.519l.22.038v.556c0 .48.014.561.103.585.26.069.253.1.236-1.202l-.016-1.243-.161-.019-.162-.019v.968l-.25-.036c-.41-.058-.397-.04-.397-.562 0-.345-.02-.482-.073-.482a1.04 1.04 0 0 1-.206-.037l-.096-.027zm-7.408.032l-.2.024c-.197.023-.204.034-.357.541-.085.285-.19.626-.232.758l-.077.24-.191-.629c-.105-.346-.212-.652-.238-.68-.025-.028-.128-.033-.228-.01l-.182.04V3.31c0 1.165.005 1.223.113 1.223a.64.64 0 0 0 .19-.03c.058-.023.074-.14.06-.437a6.524 6.524 0 0 1 0-.643c.018-.22.036-.188.248.446l.229.685.212-.768.212-.767.009.36a.236.236 0 0 1 .003.14l.005.173c.014.578.03.667.107.637a.672.672 0 0 1 .204-.036c.108 0 .113-.058.113-1.246zm4.292.14l.248.033c.352.049.5.296.325.541-.08.11-.456.2-.53.125-.023-.024-.043-.192-.043-.372zm-1.462.025c.083.004.163.07.227.2.132.268.122 1.21-.016 1.425-.133.207-.305.207-.438 0-.076-.118-.11-.309-.122-.703-.015-.464 0-.571.105-.74.076-.125.161-.185.244-.182zm-2.007.11h.194c.235 0 .335.09.335.304 0 .19-.08.265-.338.315l-.19.037v-.328zm8.497.005a.083.083 0 0 0-.031.023v2.48l.162.025c.089.013.181.029.206.033.024.005.044-.541.044-1.215 0-.673-.02-1.235-.044-1.25a1.238 1.238 0 0 0-.206-.064zM5.582 2.3a.699.699 0 0 0-.137.025c-.18.05-.182.058-.4 1.025-.12.536-.256 1.13-.3 1.322l-.081.348.186-.04a1.36 1.36 0 0 0 .224-.063c.02-.012.055-.17.078-.352.045-.37.041-.364.334-.42l.213-.041.07.302c.07.296.076.301.258.266a.944.944 0 0 0 .21-.057c.03-.025-.528-2.253-.577-2.304-.01-.01-.039-.014-.078-.011zm12.771.018v1.226c0 .942.017 1.228.074 1.229.04 0 .132.017.204.037.128.035.13.026.147-.694l.016-.73.322.817c.176.45.362.842.411.871.234.14.24.106.224-1.18l-.016-1.24-.162-.043-.162-.044v.668c-.002.767-.008.764-.36-.14-.258-.662-.341-.778-.562-.778zm-14.6.539c-.012 0-.105.03-.207.065l-.185.066v.31l.017.988c.008.47.02.845.046 1.182.011.004.024.002.04-.005.057-.023.321-.122.588-.222.456-.169.485-.19.485-.354 0-.095-.009-.174-.02-.174-.011 0-.174.054-.362.12a5.96 5.96 0 0 1-.362.12c-.011 0-.02-.472-.02-1.048 0-.577-.01-1.048-.02-1.048zm16.502 0c-.011 0-.02.562-.02 1.249v1.249l.19.062c.106.035.198.065.206.069.008.003.015-.557.015-1.246V2.987l-.185-.066a1.991 1.991 0 0 0-.206-.065zm-10.948.206c.263.01.427.297.279.568-.063.115-.14.159-.303.173l-.219.018v-.356c0-.311.015-.36.124-.389a.406.406 0 0 1 .119-.014zm-3.852.003l.078.322c.043.18.057.265.041.316a.05.05 0 0 1-.02.037.13.13 0 0 1-.025.02c-.141.091-.238.063-.2-.06.02-.062.056-.23.08-.374zm6.879 1.66c-.555.013-1.034.17-1.306.446-.243.247-.27.51-.068.645.255.169.673.22 2.168.268 1.368.044 1.532.06 1.77.177.292.145.419.333.41.61-.006.23-.157.477-.293.477-.229 0-.989-.194-1.526-.39a5.355 5.355 0 0 0-.661-.205l-.038-.003c-.144.004-.318.121-.818.551-.22.189-.61.454-.867.59-.834.443-1.091.794-1.207 1.649-.063.463-.14.648-.499 1.187-.298.448-.508 1.05-.51 1.457 0 .197-.07.511-.184.839-.15.433-.184.627-.195 1.122-.012.514-.035.64-.163.879-.093.172-.166.43-.192.674-.037.36-.067.426-.33.74-.159.188-.289.375-.289.415 0 .022-.025.07-.063.128-.008.038-.026.065-.049.068a1 1 0 0 1-.066.083c-.224.26-.334.559-.24.654.049.05.089.034.157-.064.129-.188.203-.165.144.044-.034.12-.028.186.019.207.088.039.422-.014.597-.095.092-.043.16-.153.21-.34.04-.153.114-.327.164-.386.055-.066.101-.265.116-.506.022-.352.051-.431.25-.688.13-.166.267-.437.321-.632.053-.188.137-.423.188-.522.377-.74.62-1.168.663-1.168.13 0 .234.284.234.64 0 .28.024.386.094.426.085.048.086.073.009.228a1.978 1.978 0 0 0-.128.35c-.057.24-.245.497-.442.6-.09.048-.286.208-.436.357-.216.214-.273.31-.272.467.001.264.086.402.185.3.118-.12.172-.085.13.085-.038.154-.032.158.158.12.243-.05.463-.193.504-.327.017-.056.054-.142.082-.191.029-.05.137-.274.242-.5.13-.28.273-.478.453-.628.144-.12.3-.313.348-.428.139-.338.543-.628.543-.388 0 .14-.228.564-.394.733-.209.213-.37.499-.37.657 0 .139.082.18.147.075.064-.106.137-.064.105.06a.334.334 0 0 0-.007.035c.01.03.025.055.045.075.025.007.06.01.112.01.302 0 .587-.174.63-.385a1.5 1.5 0 0 1 .152-.375c.074-.124.1-.242.076-.341-.04-.161.068-.577.15-.577.06 0 .274.447.328.69a.823.823 0 0 0 .156.308c.108.121.155.128.683.098.547-.031.573-.04.715-.217.106-.134.156-.285.18-.547.042-.462.242-.776.7-1.104l.342-.244.084.134c.047.073.147.289.223.479.128.316.133.368.065.64-.041.164-.057.354-.036.423.022.07-.007.256-.065.42l-.045.128-.009.056a.61.61 0 0 0-.014.152l.103.11c.157.172.266.193.316.062.044-.12.155-.116.155.005 0 .127.115.08.248-.1.102-.14.103-.165.016-.416-.052-.148-.081-.315-.067-.371.014-.057 0-.219-.032-.36a2.63 2.63 0 0 1 .011-1.095c.057-.278.05-.339-.083-.63-.081-.177-.136-.334-.123-.347.014-.014.125.015.248.064.57.228 1.015.176 1.286-.15l.138-.167a.154.154 0 0 0 .004-.028l-.329-.03a6.802 6.802 0 0 1-.225-.025c-.199-.033-.286-.105-.604-.389-.294-.262-.304-.282-.273-.516.019-.139-.01-.442-.067-.701-.092-.422-.092-.483-.006-.784.051-.18.093-.407.093-.503 0-.29-.158-.736-.345-.973a1.535 1.535 0 0 1-.238-.462 1.843 1.843 0 0 0-.208-.458c-.136-.204-.14-.229-.059-.425a1.74 1.74 0 0 0 .086-.538c0-.287-.025-.359-.191-.551-.36-.418-.53-.457-2.25-.508-1.985-.06-2.297-.136-1.989-.483.126-.142.332-.138.76.014.469.166 1.042.207 1.377.099.288-.093.293-.088-.206-.194-.08-.017-.147-.06-.147-.097 0-.013.008-.022.021-.029.009-.018.051-.022.13-.013.036.002.078.006.128.013.769.104.897.112.897.053 0-.097-.516-.297-1.055-.408a3.533 3.533 0 0 0-.79-.074zm.213.491a.86.86 0 0 1 .232.054l.254.092-.182.003-.024.001-.031-.002a.627.627 0 0 1-.262-.05c-.103-.067-.08-.103.013-.098Z" />
    </svg>
  );
});

Lamborghini.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Lamborghini;
