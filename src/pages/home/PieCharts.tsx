import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'

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
                <Text style={{ fontSize: 18 }}>
                    Perbandingan Bulan Ini
                </Text>
                <PieChart
                    data={pieData}
                    width={180}
                    height={150}
                    chartConfig={{
                        backgroundGradientFrom: "#1E2923",
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: "#08130D",
                        backgroundGradientToOpacity: 0.5,
                        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                        strokeWidth: 2, // optional, default 3
                        barPercentage: 0.5,
                    }}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"16"}
                    center={[0, 0]}
                    hasLegend={false}
                    absolute
                />
            </View>
            <View style={{ justifyContent: 'center', gap: 16 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#A3D8F4', width: 10, height: 10, marginEnd: 8 }}></View>
                    <Text>Pengeluaran</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#767AE7', width: 10, height: 10, marginEnd: 8 }}></View>
                    <Text>Pemasukan</Text>
                </View>
            </View>
        </View>
    )
}

export default PieCharts

const styles = StyleSheet.create({})