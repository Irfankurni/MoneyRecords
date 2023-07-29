import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { mainStyle } from '../../styles/styles'
import { HomeTabScreenProps } from '../../navigation/types'
import CardInOut from '../../components/CardInOut'
import { currencyFormat } from '../../common/currency-format'
import { Button, Dialog, Text } from 'react-native-paper'

type Props = {}

const IncomeScreen = ({ route }: HomeTabScreenProps<'Income'>) => {
  const date: Date = new Date;

  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(false);
  const showDialog = () => setVisible(true);

  return (
    <View style={mainStyle.mainContainer}>
      <CardInOut date={date.toDateString()} total={currencyFormat(50000)} type='Pemasukkan' deleteAction={showDialog} />
      <CardInOut date={date.toDateString()} total={currencyFormat(50000)} type='Pemasukkan' deleteAction={showDialog} />
      <CardInOut date={date.toDateString()} total={currencyFormat(50000)} type='Pemasukkan' deleteAction={showDialog} />
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Content>
          <Text variant="bodyMedium">Are you want to delete this item?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={() => console.log('Ok')}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  )
}

const style = StyleSheet.create({

})

export default IncomeScreen