import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native'
import {Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { 
    Nearbyjobs, 
    Popularjobs, 
    ScreenHeaderBtn, 
    Welcome 
} from '../components'

export default function Home() {
    const router = useRouter();

    return (
        <SafeAreaView stlye={{flex:1, backgroundcolor: COLORS.lightWhite}}>
          <Stack.Screen options={{headerStyle: {backgroundcolor: COLORS.lightWhite},}} />
        </SafeAreaView>
    )
} 