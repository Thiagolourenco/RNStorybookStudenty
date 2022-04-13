import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

import useStyles from './Text.style';

interface ITextRN {
  children: string;
  styleText?: StyleProp<TextStyle>;
}

type TextRNProps = ITextRN & TextProps;

const TextRN = ({children, styleText, ...props}: TextRNProps): JSX.Element => {
  const styles = useStyles();

  return (
    <Text style={[styles.text, styleText]} {...props}>
      {children}
    </Text>
  );
};

export default TextRN;
