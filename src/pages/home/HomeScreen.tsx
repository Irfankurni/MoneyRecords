import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Avatar, FAB, IconButton, Tooltip } from 'react-native-paper'
import { mainStyle } from '../../styles/styles'
import TodayOutcome from './components/TodayOutcome'
import LoadingIndicator from '../../components/LoadingIndicator'
import { HomeTabScreenProps } from '../../navigation/types'
import { currencyFormat } from '../../common/currency-format'
import { clearData, getData, getId, logout } from '../../services/auth.service'
import { getAnalysis } from '../../services/history.service'
import LineCharts from './components/LineCharts'
import PieCharts from './components/PieCharts'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'

type Props = {}

const HomeScreen = ({ route, navigation }: HomeTabScreenProps<'Home'>) => {
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [user, setUser] = useState({
        fullName: ''
    });
    const [analysis, setAnalysis] = useState({
        today: 0,
        yesterday: 0,
        week: [],
        month: {
            income: 0,
            outcome: 0
        }
    })

    useEffect(() => {
        getData().then(data => setUser(data.data));
        getDataAnalysis();
    }, [])

    useEffect(() => {
        if (refresh) {
            getDataAnalysis();
        }
    }, [refresh])

    const getDataAnalysis = () => {
        getAnalysis().then(data => {
            setAnalysis(data)
            setLoading(false);
        })
        setRefresh(false);
    }

    const onRefresh = () => {
        setRefresh(true)
    }

    const comparison = () => {
        const dividerToday = (analysis.today + analysis.yesterday) == 0 ? 1 : (analysis.today + analysis.yesterday)
        const data = (Math.abs(analysis.today - analysis.yesterday)/ dividerToday) * 100;
        return Math.floor(data);
    }

    const doLogout = async () => {
        await logout().then(res => {
            clearData();
            navigation.navigate('Login');
        });
    }

    const goToForm = () => {
        navigation.navigate('Add');
    }

    return (
        <View style={mainStyle.mainContainer}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
            {loading ?
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <LoadingIndicator />
                </View>
                :
                <View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
                    >
                        <View>
                            <View style={styleSheet.profileContainer}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Avatar.Image source={require('../../../assets/profile.png')} style={mainStyle.profileImage} />
                                    <Text style={mainStyle.profileName}>Hi, {user.fullName}</Text>
                                </View>
                                <Tooltip title="Logout">
                                    <IconButton
                                        icon='power'
                                        size={25}
                                        onPress={doLogout}
                                        iconColor='black' />
                                </Tooltip>
                                {/* <Icon name='power-settings-new' size={25} /> */}
                            </View>
                        </View>
                        <TodayOutcome
                            todayOutcome={currencyFormat(analysis.today)}
                            outcomeComparisan={comparison()} />
                        <LineCharts data={analysis} />
                        <PieCharts data={analysis}/>
                    </ScrollView>
                    <FAB
                        icon="plus"
                        style={mainStyle.fab}
                        theme={{ colors: { primaryContainer: '#767AE7' } }}
                        rippleColor={'#767AE7'}
                        onPress={goToForm} />
                </View>
            }

        </View>
    )
}

const styleSheet = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        justifyContent: 'space-between'
    },
})

export default HomeScreen