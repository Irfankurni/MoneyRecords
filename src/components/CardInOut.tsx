import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

type Props = {
    date: string,
    total: string,
    type: string,
    detailAction?: () => void
    deleteAction?: () => void
}

const CardInOut = ({ date, total, type, detailAction, deleteAction }: Props) => {

    return (
        <Pressable onPress={detailAction} android_ripple={{ color: 'rgba(217, 217, 217, 0.30)' }} style={[style.historyCard]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Icon name={type === 'Pemasukkan' ? 'call-received' : 'north-east'} color={'#83D290'} size={26} />
                <Text style={style.text}>
                    {date}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Text style={style.text}>
                    {total}
                </Text>
                <Pressable onPress={deleteAction}>
                    <Icon name='delete-forever' color={'#FF7171'} size={26} />
                </Pressable>
            </View>
        </Pressable>
    )
}

export default CardInOut

const style = StyleSheet.create({
    historyCard: {
        width: '100%',
        height: 51,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        borderRadius: 12,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        marginBottom: 16
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#767AE7'
    }
})