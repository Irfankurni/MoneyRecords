import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../../navigation/types'

type Props = {}

const DetailScreen = ({ route }: RootStackScreenProps<'Detail'>) => {
    return (
        <View>
            <Text>
                {route.params.id}
            </Text>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})