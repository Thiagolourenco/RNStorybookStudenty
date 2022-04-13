import {StyleSheet, ViewStyle} from 'react-native';

interface IButtonStyle {
  button: ViewStyle;
}

type IButtonStyleProps = {
  color: string;
};

export default ({color}: IButtonStyleProps): IButtonStyle => {
  return StyleSheet.create({
    button: {
      height: 52,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: 320,
      borderRadius: 15,
      marginTop: 14,
    },
  });
};
