import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { LineChart, PieChart, ProgressChart } from 'react-native-chart-kit'
import LineCharts from './LineCharts'
import PieCharts from './PieCharts'
import Icon from 'react-native-vector-icons/MaterialIcons'

type Props = {}

const HomeScreen = (props: Props) => {

    return (
        <ScrollView style={{ flex: 1, marginBottom: 8 }} showsVerticalScrollIndicator={false}>
            <View style={styleSheet.mainContainer}>
                <View style={styleSheet.profileContainer}>
                    <Image source={require('../../../assets/profile.png')} style={styleSheet.profileImage} />
                    <Text style={styleSheet.profileName}>Hi, Irfan</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18 }}>
                        Pengeluaran Hari Ini
                    </Text>
                    <View style={styleSheet.outcomeContainer}>
                        <Text style={{ fontSize: 30 }}>Rp. 500.000</Text>
                        <Text style={{ fontSize: 14 }}>+20% dibanding kemarin</Text>
                        <View style={styleSheet.detailContainer}>
                            <Text style={{ fontSize: 16, marginEnd: 4 }}>
                                Selengkapnya
                            </Text>
                            <Icon name='chevron-right' size={16}/>
                        </View>
                    </View>
                    <View style={styleSheet.divider}></View>
                    <LineCharts />
                    <PieCharts />
                </View>
            </View>
        </ScrollView>
    )
}

const styleSheet = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 28
    },
    profileContainer: {
        flexDirection: 'row',
        marginBottom: 16
    },
    profileImage: {
        width: 60,
        height: 60,
        marginEnd: 16
    },
    profileName: {
        fontSize: 20,
        fontWeight: "bold"
    },
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
    }
})

export default HomeScreen