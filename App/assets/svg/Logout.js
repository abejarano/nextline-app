import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const LogoutSvg = ({scale = 1, style}) => {
  const width = 23.561;
  const height = 23.56;
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
        <Path
          className="prefix__a"
          d="M22.824 11.044h-9.326a.736.736 0 110-1.473h9.326a.736.736 0 010 1.473zm0 0"
          fill="#005FAB"
        />
        <Path
          className="prefix__a"
          d="M19.143 14.724a.737.737 0 01-.52-1.257l3.161-3.161-3.161-3.161a.737.737 0 111.042-1.042l3.681 3.681a.736.736 0 010 1.042l-3.681 3.681a.731.731 0 01-.521.217zm0 0"
          fill="#005FAB"
        />
        <Path
          d="M14.97 7.853a.737.737 0 00.736-.736V2.7a2.7 2.7 0 00-2.7-2.7H1.964A1.965 1.965 0 000 1.963v17.67A1.981 1.981 0 001.337 21.5l5.908 1.968a2.025 2.025 0 00.609.091 1.965 1.965 0 001.963-1.963v-.982h3.191a2.7 2.7 0 002.7-2.7v-4.417a.736.736 0 10-1.472 0v4.417a1.229 1.229 0 01-1.227 1.227H9.818V3.927A1.981 1.981 0 008.481 2.06l-1.762-.587h6.289A1.229 1.229 0 0114.235 2.7v4.417a.736.736 0 00.735.736zm-6.967-4.4a.51.51 0 01.341.473v17.67a.492.492 0 01-.491.491.533.533 0 01-.16-.022l-5.88-1.959a.51.51 0 01-.341-.473V1.963a.492.492 0 01.491-.491.534.534 0 01.16.022z"
          fill="#0090df"
        />
      </G>
    </Svg>
  );
};

export default LogoutSvg;
