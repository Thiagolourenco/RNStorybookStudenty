import {StyleSheet, TextStyle} from 'react-native';

interface ITextRNStyle {
  text: TextStyle;
}

export default (): ITextRNStyle => {
  return StyleSheet.create({
    text: {
      fontSize: 12,
      color: '#fff',
      fontWeight: 'normal',
    },
  });
};
