import * as React from 'react';
import Svg, {Defs, Rect, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function LockSvg(props) {
  return (
    <Svg width={17} height={17.272} viewBox="0 0 17 17.272" {...props}>
      <Defs />
      <Rect className="a" width={17} height={17} />
      <Path
        className="b"
        fill={props.color}
        d="M7.557,8.636A2.159,2.159,0,1,1,5.4,10.8,2.165,2.165,0,0,1,7.557,8.636Zm0-6.477A2.165,2.165,0,0,0,5.4,4.318H9.716A2.165,2.165,0,0,0,7.557,2.159Zm5.4,15.113H2.159A2.165,2.165,0,0,1,0,15.113V6.477A2.165,2.165,0,0,1,2.159,4.318h1.08a4.318,4.318,0,1,1,8.636,0h1.08a2.165,2.165,0,0,1,2.159,2.159v8.636A2.165,2.165,0,0,1,12.954,17.272Z"
        transform="translate(1.08)"
      />
    </Svg>
  );
}

export default LockSvg;
