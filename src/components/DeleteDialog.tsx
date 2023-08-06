import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Dialog, Text, Button } from 'react-native-paper'

type Props = {
    visible: boolean,
    onDismiss?: (() => void) | undefined
    onSubmit?: (() => void) | undefined
}

const DeleteDialog = ({visible, onDismiss, onSubmit}: Props) => {
  return (
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Content>
          <Text variant="bodyMedium">Are you want to delete this item?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Cancel</Button>
          <Button onPress={onSubmit}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
  )
}

export default DeleteDialog

const styles = StyleSheet.create({})