import * as React from 'react';
import Svg, {G, Rect} from 'react-native-svg';
import globalStyles from '../../styles';
/* SVGR has dropped some elements not supported by react-native-svg: style */
function CloseSvg({scale = 1, style}) {
  const width = 18.385;
  const height = 18.385;
  return (
    <Svg
      width={width * scale}
      height={height * scale}
      style={style}
      viewBox={`0 0 ${width} ${height}`}>
      <G
        translate={
          ('transform',
          'scale(' +
            scale +
            ', ' +
            scale +
            ') translate(' +
            -width / 2 +
            ',' +
            -height / 2 +
            ') ')
        }>
        <G transform="translate(-316.808 -124.396)">
          <Rect
            fill={globalStyles.PRIMARY_COLOR}
            width={24}
            height={2}
            rx={1}
            transform="rotate(45 8.952 446.326)"
          />
          <Rect
            fill={globalStyles.PRIMARY_COLOR}
            width={2}
            height={2}
            rx={1}
            transform="translate(325 132.588)"
          />
          <Rect
            fill={globalStyles.PRIMARY_COLOR}
            width={24}
            height={2}
            rx={1}
            transform="rotate(-45 329.048 -311.738)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default CloseSvg;
