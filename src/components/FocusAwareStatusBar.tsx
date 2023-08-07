import * as React from 'react';
import { ColorValue, StatusBar, StatusBarStyle } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

type Props ={
  barStyle?: StatusBarStyle | null | undefined
  backgroundColor?: ColorValue | undefined
}

function FocusAwareStatusBar(props: Props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default FocusAwareStatusBar