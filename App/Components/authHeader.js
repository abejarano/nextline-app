import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import InfoSvg from '../assets/svg/Info';
import globalStyles from '../styles';
import ArrowPointerSvg from '../assets/svg/ArrowPointer';

export const AuthHeader = ({navigation, onPress}) => {
  return (
    <View style={styles.view}>
      <View style={styles.back}>
				<Pressable
					style={styles.pressable}
					onPress={
						onPress
							? onPress
							: () => {
									navigation.goBack();
								}
					}>
					<ArrowPointerSvg
						color={globalStyles.WHITE_COLOR}
						direction="left"
						bold
					/>
				</Pressable>
			</View>

			<View style={styles.back}>
				<Text>AuthHeader</Text>
			</View>

      <Pressable style={styles.info}>
        <InfoSvg color={globalStyles.WHITE_COLOR} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
		flex: 1,
		backgroundColor: globalStyles.PRIMARY_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: '100%',
    // alignItems: 'center',
    // maxHeight: 45,
    // paddingTop: 10,
  },
  pressable: {},
  info: {
    // height: 33,
    // marginRight: '5%',
	},
	title: {
		color: globalStyles.GREEN_COLOR
	},
  back: {
    // padding: 10,
    // height: 45,
    // flex: 1,
    // maxWidth: 90,
    // marginLeft: '5%',
    // marginRight: 'auto',
  },
});
