import * as React from 'react';
import Svg, {Defs, Path, G} from 'react-native-svg';
import {StyleSheet} from 'react-native';
import globalStyles from '../../styles';

function SolidLogin(props) {
  return (
    <Svg
      width={props.width ? props.width : 184.762}
      height={props.height ? props.height : 156.588}
      viewBox="0 0 184.762 156.588"
      style={[styles.logo, props.style]}
      {...props}>
      <Defs />

      {props.withText && (
        <Path
          fill={props.color}
          d="M13.102 150.547v5.949h-.927v-5.949H10.02v-.832h5.337v.832zM23.798 154.103h-3.573a1.785 1.785 0 00.477 1.337 1.491 1.491 0 001.084.408 1.844 1.844 0 001.258-.44l.37.634a1.663 1.663 0 01-.624.352 3.393 3.393 0 01-1.176.194 2.2 2.2 0 01-1.588-.633 2.494 2.494 0 01-.727-1.88 2.651 2.651 0 01.745-1.968 2.166 2.166 0 011.579-.662 2.259 2.259 0 011.662.6 2.041 2.041 0 01.583 1.522 1.972 1.972 0 01-.07.536zm-2.134-1.917a1.389 1.389 0 00-1.415 1.279h2.745a1.252 1.252 0 00-.333-.889 1.3 1.3 0 00-.997-.39zM29.605 155.094v-5.588h.88v5.439a.842.842 0 00.229.628.808.808 0 00.6.23v.786q-1.711-.001-1.709-1.495zM41.246 154.103h-3.57a1.784 1.784 0 00.477 1.337 1.491 1.491 0 001.084.408 1.844 1.844 0 001.258-.44l.37.634a1.653 1.653 0 01-.624.352 3.394 3.394 0 01-1.176.194 2.2 2.2 0 01-1.588-.633 2.5 2.5 0 01-.727-1.88 2.652 2.652 0 01.747-1.968 2.161 2.161 0 011.578-.662 2.258 2.258 0 011.662.6 2.041 2.041 0 01.583 1.522 1.919 1.919 0 01-.074.536zm-2.134-1.917a1.389 1.389 0 00-1.415 1.279h2.745a1.253 1.253 0 00-.333-.889 1.3 1.3 0 00-.997-.39zM50.721 151.941l-.435.62a1.3 1.3 0 00-.474-.254 1.993 1.993 0 00-.669-.121 1.409 1.409 0 00-1.139.5 2.07 2.07 0 00-.422 1.377 1.869 1.869 0 00.43 1.327 1.567 1.567 0 001.2.456 1.972 1.972 0 001.193-.458l.348.74a3.156 3.156 0 01-1.753.458 2.237 2.237 0 01-1.677-.68 2.529 2.529 0 01-.662-1.842 2.635 2.635 0 01.689-1.9 2.626 2.626 0 012.714-.556 2.377 2.377 0 01.657.333zM56.092 154.005a2.708 2.708 0 01.618-1.852 2.288 2.288 0 013.28-.029 3.294 3.294 0 01-.015 3.774 2.3 2.3 0 01-3.292-.008 2.815 2.815 0 01-.591-1.885zm.926 0q0 1.867 1.319 1.866a1.114 1.114 0 00.965-.5 2.343 2.343 0 00.35-1.366q0-1.841-1.315-1.842a1.132 1.132 0 00-.961.49 2.252 2.252 0 00-.358 1.352zM71.984 156.496v-3.138q0-1.171-1.015-1.172a1.018 1.018 0 00-.6.2 1.054 1.054 0 00-.379.448v3.666h-.88v-3.523a.685.685 0 00-.275-.576 1.17 1.17 0 00-.729-.211 1.01 1.01 0 00-.562.2 1.244 1.244 0 00-.424.449v3.656h-.88v-4.958h.575l.292.575a1.541 1.541 0 011.273-.667 1.632 1.632 0 011.49.662 1.143 1.143 0 01.551-.472 1.925 1.925 0 01.828-.19 1.542 1.542 0 011.191.456 1.82 1.82 0 01.42 1.281v3.314zM79.687 151.539v3.162q0 1.147 1 1.148a1.37 1.37 0 00.8-.251 1.2 1.2 0 00.477-.577v-3.482h.879v4.958h-.879v-.684a1.367 1.367 0 01-.595.534 1.817 1.817 0 01-.872.243 1.615 1.615 0 01-1.249-.468 1.883 1.883 0 01-.433-1.328v-3.255zM91.83 156.496v-2.879a1.911 1.911 0 00-.238-1.109.938.938 0 00-.8-.318 1.31 1.31 0 00-.63.181 1.39 1.39 0 00-.5.445v3.684h-.88v-4.958h.6l.278.64a1.523 1.523 0 011.42-.732q1.631 0 1.631 1.981v3.07zM99.12 156.496v-4.213h-.679v-.741H100v4.958zm.481-6.833a.528.528 0 01.387.16.521.521 0 01.161.382.548.548 0 11-.548-.542zM109.874 151.941l-.435.62a1.318 1.318 0 00-.476-.254 1.988 1.988 0 00-.669-.121 1.409 1.409 0 00-1.139.5 2.07 2.07 0 00-.42 1.377 1.863 1.863 0 00.429 1.327 1.566 1.566 0 001.195.456 1.975 1.975 0 001.195-.458l.346.74a3.15 3.15 0 01-1.754.458 2.233 2.233 0 01-1.675-.68 2.529 2.529 0 01-.662-1.842 2.634 2.634 0 01.687-1.9 2.628 2.628 0 012.715-.556 2.417 2.417 0 01.663.333zM118.374 155.928a1.941 1.941 0 01-1.616.661 1.388 1.388 0 01-1.012-.423 1.424 1.424 0 01-.428-1.053 1.573 1.573 0 01.659-1.276 2.64 2.64 0 011.682-.521 2 2 0 01.63.12q0-1.2-1.073-1.2a1.714 1.714 0 00-1.269.444l-.371-.736a2.179 2.179 0 01.692-.35 2.717 2.717 0 01.844-.145 1.768 1.768 0 012.056 2.051v1.777a.911.911 0 00.388.871v.44a1.648 1.648 0 01-.8-.153.851.851 0 01-.382-.507zm-.085-1.867a3.207 3.207 0 00-.583-.091 1.672 1.672 0 00-1.089.342 1.019 1.019 0 00-.42.81q0 .773.91.773a1.5 1.5 0 001.181-.635zM129.034 151.941l-.435.62a1.319 1.319 0 00-.476-.254 1.982 1.982 0 00-.667-.121 1.41 1.41 0 00-1.14.5 2.071 2.071 0 00-.42 1.377 1.864 1.864 0 00.429 1.327 1.566 1.566 0 001.195.456 1.975 1.975 0 001.194-.458l.346.74a3.15 3.15 0 01-1.754.458 2.236 2.236 0 01-1.676-.68 2.529 2.529 0 01-.662-1.842 2.64 2.64 0 01.687-1.9 2.629 2.629 0 012.716-.556 2.417 2.417 0 01.663.333zM135.154 156.496v-4.213h-.68v-.741h1.56v4.958zm.481-6.833a.545.545 0 11-.54.542.537.537 0 01.54-.542zM141.847 154.005a2.708 2.708 0 01.618-1.852 2.288 2.288 0 013.28-.029 3.291 3.291 0 01-.013 3.774 2.3 2.3 0 01-3.293-.008 2.821 2.821 0 01-.592-1.885zm.926 0q0 1.867 1.319 1.866a1.117 1.117 0 00.966-.5 2.343 2.343 0 00.35-1.366q0-1.841-1.316-1.842a1.129 1.129 0 00-.959.49 2.243 2.243 0 00-.36 1.352zM155.05 156.496v-2.879a1.912 1.912 0 00-.237-1.109.94.94 0 00-.8-.318 1.309 1.309 0 00-.629.181 1.391 1.391 0 00-.5.445v3.684h-.88v-4.958h.6l.277.64a1.524 1.524 0 011.421-.732q1.629 0 1.629 1.981v3.07zM166.097 154.103h-3.573a1.789 1.789 0 00.476 1.337 1.493 1.493 0 001.084.408 1.841 1.841 0 001.258-.44l.371.634a1.669 1.669 0 01-.625.352 3.388 3.388 0 01-1.176.194 2.2 2.2 0 01-1.588-.633 2.5 2.5 0 01-.727-1.88 2.652 2.652 0 01.747-1.968 2.163 2.163 0 011.578-.662 2.259 2.259 0 011.662.6 2.042 2.042 0 01.583 1.522 1.968 1.968 0 01-.07.536zm-2.134-1.917a1.389 1.389 0 00-1.417 1.279h2.745a1.253 1.253 0 00-.333-.889 1.3 1.3 0 00-.995-.39zM171.508 156.2l.312-.834a2.392 2.392 0 001.184.482q.815 0 .815-.686c0-.326-.263-.608-.788-.842a6.469 6.469 0 01-.817-.421 1.778 1.778 0 01-.366-.327 1.367 1.367 0 01-.233-.39 1.271 1.271 0 01-.075-.441 1.135 1.135 0 01.445-.954 1.841 1.841 0 011.161-.342 3.72 3.72 0 011.365.342l-.25.815a1.688 1.688 0 00-1.05-.417.91.91 0 00-.53.149.438.438 0 00-.215.374.782.782 0 00.54.723l.63.286a2.186 2.186 0 01.842.6 1.327 1.327 0 01.266.847 1.266 1.266 0 01-.469 1.044 2.007 2.007 0 01-1.295.377 2.958 2.958 0 01-1.472-.385z"
        />
      )}
      {props.withText && (
        <G>
          <Path
            fill={props.color}
            d="M22.877 141.008L4.59 115.135v25.39H-.001v-35.392h1.939l17.8 24.472v-24.472h4.589v35.875zM53.004 128.036h-18.65q0 4.541 2.488 6.981a7.791 7.791 0 005.653 2.126 9.633 9.633 0 006.571-2.3l1.933 3.31a8.639 8.639 0 01-3.261 1.835 17.612 17.612 0 01-6.136 1.015 11.448 11.448 0 01-8.286-3.309 12.979 12.979 0 01-3.792-9.809 13.825 13.825 0 013.889-10.267 11.3 11.3 0 018.239-3.455q5.532 0 8.672 3.117a10.654 10.654 0 013.044 7.948 10.259 10.259 0 01-.364 2.808zm-11.137-10a7.252 7.252 0 00-7.392 6.668H48.8a6.535 6.535 0 00-1.739-4.639 6.788 6.788 0 00-5.194-2.031zM73.949 140.526l-7.055-9.423-6.3 9.423H55.23l9.4-13.239-8.623-12.635h5.163l5.8 8.89 6.5-8.89h5.074l-9.4 12.635 10.291 13.239zM84.626 118.275h-3v-3.623h3v-5.411l4.591-1.763v7.174h7.1v3.623h-7.1v12.853q0 3.261 1.1 4.638a4.258 4.258 0 003.539 1.377 8.492 8.492 0 003.648-.893l.676 4.034a25.418 25.418 0 01-6.258.724 6.789 6.789 0 01-5.18-2.282 8.146 8.146 0 01-2.116-5.762zM103.639 105.012l6.04-1.448v29.086q0 4.783 2.85 5.7a4.962 4.962 0 01-4.783 2.657q-4.107 0-4.107-5.7zM118.811 140.53v-20.921h-3.31v-4.953h9.422v25.874zm3.116-35.9a3.506 3.506 0 11-2.476 1.027 3.373 3.373 0 012.479-1.027zM148.597 140.526v-14.954q0-3.31-1.269-4.831a5.1 5.1 0 00-4.143-1.522 6.428 6.428 0 00-2.838.748 6.536 6.536 0 00-2.355 1.861v18.7h-6.041V114.65h4.349l1.111 2.415q2.464-2.9 7.272-2.9a9.651 9.651 0 017.285 2.767q2.67 2.767 2.669 7.718v15.873zM184.254 129.437h-18.481a6.561 6.561 0 002.126 4.807 7.706 7.706 0 005.267 1.715q4.131 0 6.281-2.15l2.343 4.614q-3.187 2.587-9.518 2.585-5.919 0-9.361-3.466t-3.442-9.675a13.417 13.417 0 013.781-9.905 13.255 13.255 0 0118.106-.435 11.5 11.5 0 013.407 8.552 16.873 16.873 0 01-.509 3.358zm-18.263-4.542h12.707q-.628-5.677-6.282-5.677-5.169 0-6.425 5.677z"
          />
        </G>
      )}
      <Path
        translateY={!props.withText && 30}
        fill={props.color}
        d="M44.49 27.94l6.795 6.754.827.822h16.054a63.263 63.263 0 00-8.941 6.821l6.61 6.767.013.012.492.5.012-.017 7.732 7.454 6.991 7.468 5.25-14.905-15.529-4.224c3.581-2.63 9.591-5.835 19.083-7.626l3.9-10.5s-.225-.008-.63 0h-31.91c15.767-10.724 35.59-10.328 35.59-10.328l4.065-10.163C64.644 4.564 44.49 27.94 44.49 27.94z"
      />
      <G>
        <Path
          translateY={!props.withText && 30}
          fill={props.color}
          d="M103.219 39.246l-8.96 1.234c5.617-19.686 21.663-29.228 36.88-40.481 0 2.229.1 3.866-.016 5.486-.681 9.591-1.52 19.169-2.027 28.767a10.362 10.362 0 001.681 5.613 75.144 75.144 0 006.388 8.5c1.381 1.64 1.16 3.059.716 5-1.736 7.6-5.551 12.795-12.856 16.617-9.345 4.89-14.6 13.976-18.024 23.829-.937 2.7-2.205 3.462-4.9 3.348-4.8-.2-9.613.067-14.418-.037-1.727-.037-4.428-.029-4.968-1-1.385-2.479-3.035-5.811-2.411-8.247 4.425-17.26 10.172-34.009 22.575-47.528.13-.143.132-.411.34-1.101zM87.883 78.794c2.217 3.307 4.1 6.118 6.316 9.42l6.335-9.42zm13.353-24.872c9.5 2.388 13.865.172 15.36-7.655z"
        />
      </G>
    </Svg>
  );
}

export default SolidLogin;

const styles = StyleSheet.create({
  logo: {
    ...globalStyles.DEBUG,
  },
});
