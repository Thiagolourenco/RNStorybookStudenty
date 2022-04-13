import React from 'react';
import {storiesOf} from '@storybook/react-native';
// import {action} from '@storybook/addon-actions';
import {StyleSheet, View} from 'react-native';

import TextRN from './TextRN';

const style = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

storiesOf('Text', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('default', () => <TextRN styleText={style.text}>Test</TextRN>);
