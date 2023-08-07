import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

type Props = {
    message: string
    visible: boolean
}

const SnackBar = (props: Props) => {
  const [visible, setVisible] = React.useState(props.visible);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        action={{
          label: 'Dismiss',
          onPress: onDismissSnackBar,
        }}>
        {props.message}
      </Snackbar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default SnackBar;