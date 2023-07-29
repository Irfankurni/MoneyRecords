import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Avatar, FAB, IconButton, Tooltip } from 'react-native-paper'
import { mainStyle } from '../../styles/styles'
import TodayOutcome from './components/TodayOutcome'
import LoadingIndicator from '../../components/LoadingIndicator'
import { HomeTabScreenProps } from '../../navigation/types'
import { currencyFormat } from '../../common/currency-format'
import { getData } from '../../services/auth.service'

type Props = {}

const HomeScreen = ({route}: HomeTabScreenProps<'Home'>) => {
    const [loading, setLloading] = useState(true);
    const [user, setUser] = useState({
        firstName: '',
        lastName: ''
    });

    useEffect(() => {
        getData().then(data => setUser(data.data));
        setTimeout(() => {
            setLloading(false);
        }, 1000);
    }, [loading])


    return (
        <View style={mainStyle.mainContainer}>
            {loading ?
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <LoadingIndicator />
                </View>
                :
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <View style={styleSheet.profileContainer}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Avatar.Image source={require('../../../assets/profile.png')} style={mainStyle.profileImage}/>
                                    <Text style={mainStyle.profileName}>Hi, {user.firstName} {user.lastName}</Text>
                                </View>
                                <Tooltip title="Logout">
                                    <IconButton 
                                    icon='power' 
                                    size={25} 
                                    onPress={() => console.log('Logout')} 
                                    iconColor='black'/>
                                </Tooltip>
                                {/* <Icon name='power-settings-new' size={25} /> */}
                            </View>
                        </View>
                        <TodayOutcome
                            todayOutcome={currencyFormat(50000)}
                            outcomeComparisan={20} />
                    </ScrollView>
                    <FAB
                        icon="plus"
                        style={mainStyle.fab}
                        theme={{ colors: { primaryContainer: '#767AE7' } }}
                        rippleColor={'#767AE7'}
                        onPress={() => console.log('Pressed')} />
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