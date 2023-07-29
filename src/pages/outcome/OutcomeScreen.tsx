import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Dialog, Text, Button } from 'react-native-paper'
import CardInOut from '../../components/CardInOut'
import { currencyFormat } from '../../common/currency-format'
import { mainStyle } from '../../styles/styles'
import { HomeTabScreenProps } from '../../navigation/types'

type Props = {}

const OutcomeScreen = ({ navigation }: HomeTabScreenProps<'Income'>) => {
  const date: Date = new Date;

  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(false);
  const showDialog = () => setVisible(true);

  return (
    <View style={mainStyle.mainContainer}>
      <CardInOut date={date.toDateString()} total={currencyFormat(50000)} type='Pengeluaran' detailAction={() => navigation.navigate('Detail', {id: 'id'})} deleteAction={showDialog} />
      <CardInOut date={date.toDateString()} total={currencyFormat(50000)} type='Pengeluaran' deleteAction={showDialog} />
      <CardInOut date={date.toDateString()} total={currencyFormat(50000)} type='Pengeluaran' deleteAction={showDialog} />
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

export default OutcomeScreen

const styles = StyleSheet.create({})