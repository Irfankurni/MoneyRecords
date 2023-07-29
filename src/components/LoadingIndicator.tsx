import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

type Props = {}

const LoadingIndicator = (props: Props) => {
  return (
    <View>
      <ActivityIndicator 
        animating={true} 
        color={'#767AE7'}
        size={'large'} 
    />
    </View>
  )
}

export default LoadingIndicator

const styles = StyleSheet.create({})