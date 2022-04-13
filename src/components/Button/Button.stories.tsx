import React from 'react';
import {storiesOf} from '@storybook/react-native';
// import {action} from '@storybook/addon-actions';
import {StyleSheet, View} from 'react-native';

import Button from './Button';
import {TextRN} from '../Text';

const colors = {
  primary: '#B614E3',
  error: '#FD1D17',
  secondary: '#8C17FD',
};

const style = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

storiesOf('Button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Primary', () => (
    <Button color={colors.primary}>
      <TextRN styleText={style.text}>PRIMARY</TextRN>
    </Button>
  ))
  .add('Error', () => (
    <Button color={colors.error}>
      <TextRN styleText={style.text}>ERROR</TextRN>
    </Button>
  ))
  .add('Secondary', () => (
    <Button color={colors.secondary}>
      <TextRN styleText={style.text}>SECUNDÁRIO</TextRN>
    </Button>
  ));
