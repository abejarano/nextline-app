import * as React from 'react';
import Svg, {Defs, Rect, G} from 'react-native-svg';
import globalStyles from '../../styles';

/* SVGR has dropped some elements not supported by react-native-svg: style */

function HamburguerSvg(props) {
  return (
    <Svg width={24} height={38} viewBox="0 0 24 38" {...props}>
      <Defs />
      
      <G transform="translate(-314 -114.588)">
        <Rect width={24} height={2} rx={1} fill={'#fff'} transform={'translate(314 124.588)'} />
        <Rect width={24} height={2} rx={1} fill={'#fff'} transform={'translate(314 132.588)'} />
        <Rect width={24} height={2} rx={1} fill={'#fff'} transform={'translate(314 140.588)'} />
      </G>
    </Svg>
  );
}

export default HamburguerSvg; 