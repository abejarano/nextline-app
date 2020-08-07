import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import globalStyles from '../styles';

export const ButtonStyled = ({
  onPress,
  color,
  text,
  backgroundColor,
  styleText,
  Icon,
  iconColor,
  disabled,
  loading,
  style,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={!disabled && onPress}
      style={[{...styles.button, backgroundColor}, style]}
      accessibilityLabel="Learn more about this purple button">
      <Text style={{...styles.text, color}}>
        {loading ? (
          <ActivityIndicator color={globalStyles.WHITE_COLOR} />
        ) : (
          text
        )}
      </Text>
      {Icon && <Icon style={styles.icon} color={iconColor} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: globalStyles.GRAY_COLOR,
    width: '80%',
    padding: '5%',
    borderRadius: 15,
    maxHeight: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: globalStyles.WHITE_COLOR,
    // fontWeight: 'bold',
    fontFamily: globalStyles.TREBUCHET_FONT,
  },
  icon: {
    flex: 1,
    width: 35,
    height: 35,
  },
});
