import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { mainStyle } from '../../styles/styles'
import { HomeTabScreenProps } from '../../navigation/types'
import CardInOut from '../../components/CardInOut'
import { currencyFormat } from '../../common/currency-format'
import { Button, Dialog, Text } from 'react-native-paper'
import DeleteDialog from '../../components/DeleteDialog'
import LoadingIndicator from '../../components/LoadingIndicator'
import { getDataByUser, deleteHistory } from '../../services/history.service'

type Props = {}

const IncomeScreen = ({ route }: HomeTabScreenProps<'Income'>) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [idIncome, setIdIncome] = useState("");

  const hideDialog = () => setVisible(false);
  const showDialog = (id: string) => {
    setVisible(true);
    setIdIncome(id);
  };
  const [data, setData] = useState([
    {
      id: "",
      type: "",
      date: "",
      total: 0,
      details: [
        {
          name: "",
          price: 0
        },
      ]
    },
  ]);

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (refresh) {
      getData();
    }
  }, [refresh])

  const getData = () => {
    getDataByUser('Pemasukkan').then(res => {
      setData(res);
      setLoading(false);
    });
    setRefresh(false);
  }

  const deleteData = () => {
    setLoading(true);
    deleteHistory(idIncome).then(() => {
      setVisible(!visible);
      setLoading(!loading);
      onRefresh();
    });
  }

  const onRefresh = () => {
    setRefresh(true)
  }

  const renderItem = ({ item }: any) => {
    return (
      <CardInOut date={new Date(item.date).toDateString()} total={currencyFormat(item.total)} type={item.type} deleteAction={() => showDialog(item.id)} />
    )
  }


  return (
    <View style={mainStyle.mainContainer}>
      {loading ?
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <LoadingIndicator />
        </View> :
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            // keyExtractor={data => data.id}
            onRefresh={onRefresh}
            refreshing={refresh}
          />
        </View>
      }
      <DeleteDialog visible={visible} onDismiss={hideDialog} onSubmit={deleteData} />
    </View>
  )
}

const style = StyleSheet.create({

})

export default IncomeScreen