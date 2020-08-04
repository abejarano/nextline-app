import * as React from 'react';
import Svg, {Defs, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const EditSvg = (props) => {
  return (
    <Svg width={17} height={16.219} viewBox="0 0 17 16.219" {...props}>
      <Defs />
      <G className="a" transform="translate(-4 -3.818)">
        <Path
          fill={props.color}
          d="M18,30h9.005"
          transform="translate(-6.505 -10.463)"
        />
        <Path
          fill={props.color}
          d="M16.423,4.87a1.865,1.865,0,0,1,2.649,0,1.894,1.894,0,0,1,0,2.667L8.033,18.648,4.5,19.537l.883-3.556Z"
          transform="translate(0 0)"
        />
      </G>
    </Svg>
  );
};

export default EditSvg;
