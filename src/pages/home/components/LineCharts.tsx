import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LineChart } from 'react-native-chart-kit'
import { mainStyle } from '../../../styles/styles'

type Props = {
    data: any
}

const LineCharts = (props: Props) => {
    const numberFormat = (value: number) => {
        return new Intl.NumberFormat('id-ID').format(value);
    }

    const data = {
        labels: props.data.week.map((item: any) => item.day),
        datasets: [
            {
                data: props.data.week.map((item: any) => item.total)
            }
        ]
    };
    

    return (
        <View>
            <Text style={mainStyle.title}>Pengeluaran Minggu Ini</Text>
            <LineChart
                data={data}
                width={Dimensions.get("window").width - 18} // from react-native
                height={220}
                formatYLabel={(value) => numberFormat(parseInt(value))}
                chartConfig={styles.chartConfig}
                fromZero
                bezier
                style={{
                    marginTop: 8,
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
        propsForLabels: {
            fontFamily: 'Poppins-Regular',
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#767AE7"
        }
    }
})