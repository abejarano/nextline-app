import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import InfoSvg from '../assets/svg/Info';
import globalStyles from '../styles';
import ArrowPointerSvg from '../assets/svg/ArrowPointer';

export const AuthHeader = ({navigation, onPress, title}) => {
  return (
    <View style={styles.view}>
      <View style={styles.back}>
				<Pressable
					style={styles.pressable, globalStyles.DEBUG}
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
				<Text style={styles.title}>{title}</Text>
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
    justifyContent: 'space-between',
		width: '100%',
    maxHeight: 45,
    paddingTop: 10,
	},
	back: {
    marginLeft: '5%',
  },
	pressable: {},
	title: {
		marginTop: '2%',
		color: globalStyles.WHITE_COLOR
	},
  info: {
    marginRight: '5%',
	},
});
