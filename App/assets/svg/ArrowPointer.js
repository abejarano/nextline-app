import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const rotation = (direction) => {
  switch (direction) {
    case 'rigth':
      return 'rotate(0)';
    case 'left':
      return 'scale(-1,1)';
    case 'top':
      return 'rotate(90)';
    case 'bottom':
      return 'scale(-1,1)';
  }
};
function ArrowPointerSvg(props) {
  return (
    <Svg viewBox="0 0 172 172" {...props}>
      {props.bold ? (
        <G>
          <Path
            d="M51.858 17.11a11.468 11.468 0 00-6.92 20.885L112.147 86l-67.21 48.005a11.468 11.468 0 1013.325 18.656l80.266-57.333a11.468 11.468 0 000-18.656L58.263 19.34a11.468 11.468 0 00-6.405-2.229z"
            fill={props.color}
            transform={rotation(props.direction ? props.direction : '')}
          />
        </G>
      ) : (
        <G>
          <Path
            d="M67.832 28.488l-4.944 4.945L115.454 86l-52.568 52.568 4.945 4.944 55.04-55.04L125.239 86l-2.366-2.473z"
            fill={props.color}
            transform={rotation(props.direction ? props.direction : '')}
          />
        </G>
      )}
    </Svg>
  );
}

export default ArrowPointerSvg;
