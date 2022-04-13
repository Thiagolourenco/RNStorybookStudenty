import React from 'react';
import {Pressable} from 'react-native';

import useStyles from './Button.style';

interface IButton {
  children?: JSX.Element;
  color: string;
}

export default ({children, color}: IButton): JSX.Element => {
  const styles = useStyles({color});

  return <Pressable style={styles.button}>{children}</Pressable>;
};
