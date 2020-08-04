import * as React from 'react';
import Svg, {Defs, ClipPath, Rect, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const ProfileSvg = (props) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" {...props}>
      <Defs>
        <ClipPath id="a">
          <Rect fill={props.color} width={25} height={25} />
        </ClipPath>
      </Defs>
      <G className="b">
        <Path
          fill={props.color}
          d="M0,25V21.875c0-3.438,5.625-6.251,12.5-6.251S25,18.437,25,21.875V25ZM6.249,6.251A6.25,6.25,0,1,1,12.5,12.5,6.251,6.251,0,0,1,6.249,6.251Z"
        />
      </G>
    </Svg>
  );
};

export default ProfileSvg;
