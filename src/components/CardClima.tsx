import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Sun from "../../src/assets/01d.svg";
import Moon from "../../src/assets/01n.svg";
import SunAndCloud from "../../src/assets/02d.svg";
import MoonAndCloud from "../../src/assets/02n.svg";
import Cloud from "../../src/assets/03d.svg";
import SunAndHail from "../../src/assets/09d.svg";
import MoonAndHail from "../../src/assets/09n.svg";
import SunAndRain from "../../src/assets/10d.svg";
import MoonAndRain from "../../src/assets/10n.svg";
import SunAndStorm from "../../src/assets/11d.svg";
import MoonAndStorm from "../../src/assets/11n.svg";
import SunAndSnow from "../../src/assets/13d.svg";
import MoonAndSnow from "../../src/assets/13n.svg";
import SunAndWind from "../../src/assets/50d.svg";
import MoonAndWind from "../../src/assets/50n.svg";

interface CardClimaProps {
    weatherType: string;
    temperatura: string;
    hora: string;
    selected: boolean;
    onPress: () => void;
}

const getWeatherIcon = (weatherType: string) => {
    switch (weatherType) {
        case 'Sun':
            return <Sun width={50} height={50} />;
        case 'Moon':
            return <Moon width={50} height={50} />;
        case 'SunAndCloud':
            return <SunAndCloud width={50} height={50} />;
        case 'MoonAndCloud':
            return <MoonAndCloud width={50} height={50} />;
        case 'Cloud':
            return <Cloud width={50} height={50} />;
        case 'SunAndHail':
            return <SunAndHail width={50} height={50} />;
        case 'MoonAndHail':
            return <MoonAndHail width={50} height={50} />;
        case 'SunAndRain':
            return <SunAndRain width={50} height={50} />;
        case 'MoonAndRain':
            return <MoonAndRain width={50} height={50} />;
        case 'SunAndStorm':
            return <SunAndStorm width={50} height={50} />;
        case 'MoonAndStorm':
            return <MoonAndStorm width={50} height={50} />;
        case 'SunAndSnow':
            return <SunAndSnow width={50} height={50} />;
        case 'MoonAndSnow':
            return <MoonAndSnow width={50} height={50} />;
        case 'SunAndWind':
            return <SunAndWind width={50} height={50} />;
        case 'MoonAndWind':
            return <MoonAndWind width={50} height={50} />;
        default:
            return null;
    }
};

const CardClima: React.FC<CardClimaProps> = ({ weatherType, temperatura, hora, selected, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.card, selected && styles.selectedCard]}>
                <Text style={styles.text}>{temperatura}</Text>
                {getWeatherIcon(weatherType)}
                <Text style={styles.text}>{hora}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 6,
        alignItems: 'center',
        marginHorizontal: 5,
        marginBottom: 5,
    },
    selectedCard: {
        backgroundColor: 'rgba(29, 105, 222, 0.1)',
        borderWidth: 1,
        borderColor: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        paddingVertical: 5,
    },
});

export default CardClima;
