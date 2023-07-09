import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, FAB, IconButton, Tooltip } from 'react-native-paper'
import { mainStyle } from '../../styles/styles'
import TodayOutcome from './components/TodayOutcome'

type Props = {}

const HomeScreen = (props: Props) => {

    return (
        <View style={mainStyle.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styleSheet.profileContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar.Image size={60} source={require('../../../assets/profile.png')} style={mainStyle.profileImage} />
                            <Text style={mainStyle.profileName}>Hi, Irfan</Text>
                        </View>
                        <Tooltip title="Logout">
                            <IconButton icon='power' size={25} onPress={() => console.log('Logout')} />
                        </Tooltip>
                        {/* <Icon name='power-settings-new' size={25} /> */}
                    </View>
                </View>
                <TodayOutcome
                    todayOutcome={50000}
                    outcomeComparisan={20}
                />
            </ScrollView>
            <FAB
                icon="plus"
                style={mainStyle.fab}
                color='#767AE7'
                rippleColor={'#767AE7'}
                onPress={() => console.log('Pressed')}
            />
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