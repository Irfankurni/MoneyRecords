import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, FAB, IconButton, Tooltip } from 'react-native-paper'
import { mainStyle } from '../../styles/styles'
import TodayOutcome from './components/TodayOutcome'
import LoadingIndicator from '../../components/LoadingIndicator'

type Props = {}

const HomeScreen = (props: Props) => {
    const [loading, setLloading] = useState(true);

    const numberFormat = (value: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(value);
    }

    useEffect(() => {
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
                                    <Text style={mainStyle.profileName}>Hi, Irfan</Text>
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
                            todayOutcome={numberFormat(50000)}
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