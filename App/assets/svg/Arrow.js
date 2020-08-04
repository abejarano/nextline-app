import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const ArrowSvg = ({color, direction}) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 172 172">
      <G>
        {direction ? (
          <Path
            d="M85.248 27.413A6.878 6.878 0 0079.12 34.4v86.323L56.437 98.254a6.897 6.897 0 00-4.944-2.042 6.874 6.874 0 00-6.45 4.34 6.893 6.893 0 001.72 7.592l34.4 33.97L86 146.953l4.838-4.838 34.4-33.97c2.727-2.674 2.781-7.055.107-9.782-2.674-2.728-7.055-2.782-9.782-.108L92.88 120.723V34.4a6.878 6.878 0 00-2.016-4.972 6.878 6.878 0 00-4.971-2.015 5.164 5.164 0 00-.645 0z"
            fill={color}
          />
        ) : (
          <Path
            d="M86 24.832l-4.838 4.945-34.077 33.97a6.918 6.918 0 009.782 9.783L79.12 51.17v86.43a6.84 6.84 0 003.413 6.033 6.817 6.817 0 006.934 0 6.84 6.84 0 003.413-6.033V51.17l22.253 22.36a6.918 6.918 0 009.782-9.782l-34.078-33.97z"
            fill={color}
          />
        )}
      </G>
    </Svg>
  );
};

export default ArrowSvg;
