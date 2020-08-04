import * as React from 'react';
import Svg, {Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const HomeSvg = (props) => {
  return (
    <Svg width={30} height={25.5} viewBox="0 0 30 25.5" {...props}>
      <Defs />
      <Path
        fill={props.color}
        d="M15,30V21h6v9h7.5V18H33L18,4.5,3,18H7.5V30Z"
        transform="translate(-3 -4.5)"
      />
    </Svg>
  );
};

export default HomeSvg;
