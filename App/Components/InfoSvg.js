import * as React from 'react';
import Svg, {Defs, Path, G} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const InfoSvg = (props) => {
  const svgStyles = {
    fill: 'none',
    stroke: props.color,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '3px',
  };
  return (
    <Svg width={25.512} height={25.512} viewBox="0 0 25.512 25.512" {...props}>
      <Defs />
      <G transform="translate(-1.5 -1.5)">
        <Path
          {...svgStyles}
          d="M25.512,14.256A11.256,11.256,0,1,1,14.256,3,11.256,11.256,0,0,1,25.512,14.256Z"
        />
        <Path
          {...svgStyles}
          d="M18,22.5V18"
          transform="translate(-3.744 -3.744)"
        />
        <Path
          {...svgStyles}
          d="M18,12h0"
          transform="translate(-3.744 -2.246)"
        />
      </G>
    </Svg>
  );
};

export default InfoSvg;
