import {StyleSheet, ViewStyle} from 'react-native';

interface ITextInputStyle {
  input: ViewStyle;
}

interface ITextInputStyleProps {
  color?: string;
}

export default ({color}: ITextInputStyleProps): ITextInputStyle => {
  return StyleSheet.create({
    input: {
      borderWidth: 1.5,
      borderColor: color || '#0000',
      borderRadius: 10,
      height: 42,
      marginHorizontal: 32,
      marginTop: 5,
    },
  });
};
