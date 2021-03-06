import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const CustomerServiceSvg = ({scale = 10}) => {
  const width = 67.57;
  const height = 67.57;
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
          }
          d="M62.291 30.63v-2.124a28.506 28.506 0 00-57.012 0v2.124A7.271 7.271 0 000 37.612V48.17a7.267 7.267 0 007.258 7.258h7.919a1.979 1.979 0 001.979-1.98V28.506a16.629 16.629 0 0133.257 0v24.943a1.979 1.979 0 001.979 1.98h3.3v2.244a1.982 1.982 0 01-1.98 1.98H40.7a5.948 5.948 0 00-5.6-3.959h-2.64a5.939 5.939 0 000 11.878h2.64a5.948 5.948 0 005.6-3.959h13.01a5.946 5.946 0 005.939-5.939V55.43h.66a7.267 7.267 0 007.259-7.258v-10.56a7.271 7.271 0 00-5.279-6.982zM35.1 63.61h-2.64a1.98 1.98 0 110-3.959h2.64a1.98 1.98 0 010 3.959zM13.2 51.469H7.261a3.3 3.3 0 01-3.3-3.3V37.612a3.3 3.3 0 013.3-3.3H13.2zM33.787 7.918A20.61 20.61 0 0013.2 28.506v1.848H9.241v-1.848a24.547 24.547 0 1149.093 0v1.848h-3.959v-1.848A20.61 20.61 0 0033.787 7.918zM63.61 48.17a3.3 3.3 0 01-3.3 3.3h-5.939V34.313h5.939a3.3 3.3 0 013.3 3.3zm0 0"
          fill="#0090df"
        />
        <Path
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
          }
          className="prefix__b"
          d="M37.797 49.69a1.979 1.979 0 003.247-1.52v-4.615h.66a4.625 4.625 0 004.619-4.619V28.374a4.625 4.625 0 00-4.62-4.619H25.866a4.625 4.625 0 00-4.619 4.619v10.558a4.625 4.625 0 004.619 4.619h4.562zm-12.59-10.758V28.374a.661.661 0 01.66-.66h15.837a.661.661 0 01.66.66v10.558a.661.661 0 01-.66.66h-2.64a1.979 1.979 0 00-1.979 1.98v2.372l-4.671-3.892a1.978 1.978 0 00-1.267-.459h-5.279a.661.661 0 01-.66-.66zm0 0"
          fill="#005FAB"
        />
        <Path
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
          }
          className="prefix__b"
          d="M36.424 35.632a1.98 1.98 0 100-3.959h-5.278a1.98 1.98 0 100 3.959zm0 0"
          fill="#005FAB"
        />
      </G>
    </Svg>
  );
};

export default CustomerServiceSvg;
