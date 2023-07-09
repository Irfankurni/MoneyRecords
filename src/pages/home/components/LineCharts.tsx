import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { mainStyle } from '../../../styles/styles'

type Props = {}

const LineCharts = (props: Props) => {
    return (
        <View>
            <Text style={mainStyle.title}>Pengeluaran Minggu Ini</Text>
            <LineChart
                data={{
                    labels: ["Jan", "Feb", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={340} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={styles.chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )
}

export default LineCharts

const styles = StyleSheet.create({
    chartConfig: {
        backgroundColor: "#F2F2F2",
        backgroundGradientFrom: "#F2F2F2",
        backgroundGradientTo: "#F2F2F2",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 0.5) => `rgba(118, 122, 231, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForLabels: {
            fontFamily: 'Poppins-Regular'
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#767AE7"
        }
    }
})