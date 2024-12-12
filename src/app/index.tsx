import { Steps, Welcome } from "@/components";
import React from "react";
import {  View } from 'react-native';
export default function Index(){
    return (
        <View style={{flex: 1, padding: 40, gap: 40}}>
            <Welcome />
            <Steps />
        </View>
    )
}