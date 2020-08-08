import * as React from 'react';
import Svg, {Defs, G, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function CloseSvg(props) {
  return (
    <Svg width={18.385} height={18.385} viewBox="0 0 18.385 18.385" {...props}>
      <Defs></Defs>
      <G transform="translate(-316.808 -124.396)">
        <Rect
          className="prefix__a"
          width={24}
          height={2}
          rx={1}
          transform="rotate(45 8.952 446.326)"
        />
        <Rect
          className="prefix__a"
          width={2}
          height={2}
          rx={1}
          transform="translate(325 132.588)"
        />
        <Rect
          className="prefix__a"
          width={24}
          height={2}
          rx={1}
          transform="rotate(-45 329.048 -311.738)"
        />
      </G>
    </Svg>
  );
}

export default CloseSvg;
