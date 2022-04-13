import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';

import useStyle from './TextInput.style';

interface ITextInput {
  onChangeText?: () => void;
  color?: string;
}

type ColorsType = {
  default?: string;
  danger?: string;
  success?: string;
};

type TextInputType = ITextInput & TextInputProps;

const colors: ColorsType = {
  default: '#000000',
  danger: '#EB3200',
  success: '#3CDB27',
};

export default ({onChangeText, color, ...props}: TextInputType) => {
  const borderColor = colors[color] || '#00000';

  const styles = useStyle({color: borderColor});

  return (
    <View>
      <TextInput {...props} onChange={onChangeText} style={styles.input} />
    </View>
  );
};
