import { View, Text, KeyboardTypeOptions, StyleProp, TextStyle, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'
import React from 'react'
import { mainStyle } from '../styles/styles'
import { TextInput } from 'react-native-paper'

type Props = {
    placeholder: string | undefined,
    onChangeText: (((text: string) => void) & Function) | undefined
    keyboardType?: KeyboardTypeOptions | undefined,
    secureTextEntry?: boolean | undefined,
    value?: string | undefined,
    defaultValue?: string | undefined,
    onSubmitEditing?: ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void) | undefined,
    style?: StyleProp<TextStyle>
}

const Input = (props: Props) => {
    return (
        <View>
            <TextInput
                mode='outlined'
                style={[mainStyle.input]}
                placeholder={props.placeholder}
                placeholderTextColor={'#F1F0F2'}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                defaultValue={props.defaultValue}
                value={props.value}
                outlineStyle={{ borderRadius: 28, borderColor: '#767AE7' }}
                onSubmitEditing={props.onSubmitEditing}
                textColor='#F2F2F2' />
        </View>
    )
}

export default Input