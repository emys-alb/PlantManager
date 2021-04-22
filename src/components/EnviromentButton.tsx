import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
    env: string;
    active?: boolean;
}

export function EnviromentButton( {env, active = false, ...rest}: EnviromentButtonProps) {
    return(
        <RectButton
            style={styles.container}
            {...rest}
        >

        <Text style={styles.text}>
            { env }
        </Text>

        </RectButton>
    )
}

const styles  = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        height: 40,
        width: 76,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    }
})