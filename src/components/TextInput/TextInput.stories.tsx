import React, {useState} from 'react';
import {storiesOf} from '@storybook/react-native';
// import {action} from '@storybook/addon-actions';
import {View} from 'react-native';

import TextInput from './TextInput';

const value = 'Olá';

storiesOf('TextInput', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('default', args => {
    // console.log('ARGS => ');
    return <TextInput color="danger" value={value} />;
  });
