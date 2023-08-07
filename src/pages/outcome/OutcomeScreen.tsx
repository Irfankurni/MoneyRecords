import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardInOut from '../../components/CardInOut'
import { currencyFormat } from '../../common/currency-format'
import { mainStyle } from '../../styles/styles'
import { HomeTabScreenProps } from '../../navigation/types'
import { deleteHistory, getDataByUser } from '../../services/history.service'
import DeleteDialog from '../../components/DeleteDialog'
import LoadingIndicator from '../../components/LoadingIndicator'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'

type Props = {}

const OutcomeScreen = ({ navigation }: HomeTabScreenProps<'Outcome'>) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [idOutcome, setIdOutcome] = useState("");

  const hideDialog = () => setVisible(false);
  const showDialog = (id: string) => {
    setVisible(true);
    setIdOutcome(id);
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
    getDataByUser('Pengeluaran').then(res => {
      setData(res);
      setLoading(false);
    });
    setRefresh(false);
  }

  const deleteData = () => {
    setLoading(true);
    deleteHistory(idOutcome).then(() => {
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
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#767AE7" />
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

export default OutcomeScreen

const styles = StyleSheet.create({})