import * as React from 'react';
import Svg, {Defs, Path, G} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function ChangePlanSvg({scale = 0}) {
  const width = 62.347;
  const height = 62.347;
  return (
    <Svg
      width={width * scale}
      height={height * scale}
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
        <Path
          d="M31.173 0a31.174 31.174 0 1031.174 31.174A31.173 31.173 0 0031.173 0zm0 58.45A27.277 27.277 0 1158.45 31.174 27.277 27.277 0 0131.173 58.45z"
          fill="#0090df"
        />
        <Path
          className="prefix__b"
          d="M37.02 13.637a1.954 1.954 0 000 2.767l3.093 3.08H19.487a3.9 3.9 0 00-3.9 3.9v3.9a1.948 1.948 0 001.948 1.948 1.948 1.948 0 001.952-1.955v-3.9h20.63l-3.088 3.088a1.943 1.943 0 000 2.747 1.943 1.943 0 002.747 0l6.42-6.42a1.948 1.948 0 000-2.747l-6.409-6.408a1.954 1.954 0 00-2.767 0zM42.863 38.967H22.23l3.41-3.41a1.487 1.487 0 000-2.1l-.644-.644a1.487 1.487 0 00-2.1 0l-6.742 6.742a1.948 1.948 0 000 2.747l6.74 6.74a1.489 1.489 0 002.106 0l.644-.644a1.489 1.489 0 000-2.1l-3.413-3.428H43.32a3.441 3.441 0 003.441-3.441v-4.813a1.493 1.493 0 00-1.493-1.493h-.911a1.493 1.493 0 00-1.493 1.493z"
          fill="#005FAB"
        />
      </G>
    </Svg>
  );
}

export default ChangePlanSvg;
