import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'
import { mainStyle } from '../../../styles/styles'

type Props = {}

const PieCharts = (props: Props) => {
    const pieData = [
        {
            name: "Income",
            population: 2500000,
            color: "#767AE7",
        },
        {
            name: "Outcome",
            population: 5000000,
            color: "#A3D8F4",
        }
    ]

    return (
        <View style={{ marginTop: 56, flexDirection: 'row' }}>
            <View>
                <Text style={mainStyle.title}>
                    Perbandingan Bulan Ini
                </Text>
                <PieChart
                    data={pieData}
                    width={180}
                    height={150}
                    chartConfig={styles.chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"16"}
                    center={[16, 0]}
                    hasLegend={false}
                    absolute
                />
            </View>
            <View style={styles.legendContainer}>
                <View style={styles.legend}>
                    <View style={{ backgroundColor: '#A3D8F4', width: 10, height: 10, marginEnd: 8 }}></View>
                    <Text>Pengeluaran</Text>
                </View>
                <View style={styles.legend}>
                    <View style={{ backgroundColor: '#767AE7', width: 10, height: 10, marginEnd: 8 }}></View>
                    <Text>Pemasukan</Text>
                </View>
            </View>
        </View>
    )
}

export default PieCharts

const styles = StyleSheet.create({
    chartConfig: {
        backgroundColor: "#F2F2F2",
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
    },
    legendContainer: {
        justifyContent: 'center',
        start: -30,
        gap: 16
    },
    legend: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})