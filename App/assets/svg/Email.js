import * as React from 'react';
import Svg, {Defs, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function EmailSvg(props) {
  return (
    <Svg width={17} height={13.6} viewBox="0 0 17 13.6" {...props}>
      <Defs />
      <Path
        className="a"
        fill={props.color}
        d="M18.3,6H4.7A1.7,1.7,0,0,0,3.009,7.7L3,17.9a1.7,1.7,0,0,0,1.7,1.7H18.3A1.7,1.7,0,0,0,20,17.9V7.7A1.7,1.7,0,0,0,18.3,6Zm0,3.4-6.8,4.25L4.7,9.4V7.7l6.8,4.25L18.3,7.7Z"
        transform="translate(-3 -6)"
      />
    </Svg>
  );
}

export default EmailSvg;
