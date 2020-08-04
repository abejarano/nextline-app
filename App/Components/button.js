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
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={!disabled && onPress}
      style={{...styles.button, backgroundColor}}
      accessibilityLabel="Learn more about this purple button">
      <Text style={{...styles.text, color, ...styleText}}>
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
    backgroundColor: globalStyles.GRAY_COLOR,
    width: '80%',
    padding: 15,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    width: '80%',
    color: globalStyles.WHITE_COLOR,
  },
  icon: {
    width: '10%',
  },
});
