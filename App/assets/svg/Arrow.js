import * as React from 'react';
import Svg, {Defs, G, Path, Line} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const rotation = (direction) => {
  switch (direction) {
    case 'rigth':
      return '0';
    case 'left':
      return '180';
    case 'top':
      return '90';
    case 'bottom':
      return '270';
  }
};

export const SvgComponent = (props) => {
  return (
    <Svg width={15.535} height={23.606} viewBox="0 0 15.535 23.606" {...props}>
      <Defs />
      <G transform="translate(-1055.732 2361.261)">
        <Path
          fill={props.color}
          d="M1156.762-440.42l6,6-6,6"
          transform={`translate(1497.92 -1197.249) rotate(-${rotation(
            props.direction ? props.direction : 'rigth',
          )})`}
        />
        <Line
          fill={props.color}
          y2={19.595}
          transform="translate(1063.5 -2358.5)"
        />
      </G>
    </Svg>
  );
};

export default SvgComponent;
