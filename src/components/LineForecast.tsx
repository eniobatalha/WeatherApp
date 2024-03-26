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

interface LineForecastProps {
    weatherType: string;
    temperaturaMax: string;
    temperaturaMin: string;
    diaDaSemana: string;
}

const getWeatherIcon = (weatherType: string) => {
    switch (weatherType) {
        case 'Sun':
            return <Sun width={20} height={20} />;
        case 'Moon':
            return <Moon width={20} height={20} />;
        case 'SunAndCloud':
            return <SunAndCloud width={20} height={20} />;
        case 'MoonAndCloud':
            return <MoonAndCloud width={20} height={20} />;
        case 'Cloud':
            return <Cloud width={20} height={20} />;
        case 'SunAndHail':
            return <SunAndHail width={20} height={20} />;
        case 'MoonAndHail':
            return <MoonAndHail width={20} height={20} />;
        case 'SunAndRain':
            return <SunAndRain width={20} height={20} />;
        case 'MoonAndRain':
            return <MoonAndRain width={20} height={20} />;
        case 'SunAndStorm':
            return <SunAndStorm width={20} height={20} />;
        case 'MoonAndStorm':
            return <MoonAndStorm width={20} height={20} />;
        case 'SunAndSnow':
            return <SunAndSnow width={20} height={20} />;
        case 'MoonAndSnow':
            return <MoonAndSnow width={20} height={20} />;
        case 'SunAndWind':
            return <SunAndWind width={20} height={20} />;
        case 'MoonAndWind':
            return <MoonAndWind width={20} height={20} />;
        default:
            return null;
    }
};

const LineForecast: React.FC<LineForecastProps> = ({ weatherType, temperaturaMax, temperaturaMin, diaDaSemana }) => {
    return (
        <TouchableOpacity>
            <View style={[styles.linha]}>
                <Text style={styles.text}>{diaDaSemana}</Text>
                {getWeatherIcon(weatherType)}
                <View style={styles.temperaturasContainer}>
                    <Text style={styles.temperaturaText}>{temperaturaMax}º</Text>
                    <Text style={styles.temperaturaText}>{temperaturaMin}º</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 10,
        width: '100%',
    },
    temperaturasContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    temperaturaText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        paddingVertical: 5,
    },
});

export default LineForecast;
