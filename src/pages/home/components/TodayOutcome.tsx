import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { mainStyle } from '../../../styles/styles'
import LineCharts from './LineCharts'
import PieCharts from './PieCharts'

type Props = {
    todayOutcome: string,
    outcomeComparisan: number
}

const TodayOutcome = (props: Props) => {
    return (
        <View>
            <Text style={mainStyle.title}>
                Pengeluaran Hari Ini
            </Text>
            <View style={styles.outcomeContainer}>
                <Text style={{ fontSize: 30 }}>{props.todayOutcome}</Text>
                <Text style={{ fontSize: 14 }}>+{props.outcomeComparisan}% dibanding kemarin</Text>
                <Pressable
                    style={styles.detailContainer}
                    onPress={() => console.log('Details')}>
                    <Text style={{ fontSize: 16, marginEnd: 4 }}>
                        Selengkapnya
                    </Text>
                    <Icon name='chevron-right' size={16} />
                </Pressable>
            </View>
            <View style={styles.divider}></View>
            <LineCharts />
            <PieCharts />
        </View>
    )
}

export default TodayOutcome

const styles = StyleSheet.create({
    outcomeContainer: {
        marginTop: 12,
        backgroundColor: "#767AE7",
        width: 338,
        height: 167,
        borderRadius: 14,
        padding: 22
    },
    detailContainer: {
        width: 316,
        height: 33,
        marginTop: 20,
        paddingEnd: 20,
        backgroundColor: "#FFFFFF",
        borderTopStartRadius: 14,
        borderBottomEndRadius: 8,
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    divider: {
        width: 72,
        height: 6,
        borderRadius: 9,
        backgroundColor: "#9AB3F5",
        marginTop: 12,
        marginBottom: 12,
        alignSelf: "center"
    },
})