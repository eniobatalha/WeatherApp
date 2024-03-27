import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Clearday from "../../assets/svg/clear_day.svg";
import Noneday from "../../assets/svg/none_day.svg";
import ClearNight from "../../assets/svg/clear_night.svg";
import NoneNight from "../../assets/svg/none_night.svg";
import Cloud from "../../assets/svg/cloud.svg";
import CloudyDay from "../../assets/svg/cloudly_day.svg";
import CloudyNight from "../../assets/svg/cloudly_night.svg";
import Fog from "../../assets/svg/fog.svg";
import Hail from "../../assets/svg/hail.svg";
import Rain from "../../assets/svg/rain.svg";
import Snow from "../../assets/svg/snow.svg";
import Storm from "../../assets/svg/storm.svg";
import styles from './styles';

interface LineForecastProps {
    weatherType: string;
    temperaturaMax: string;
    temperaturaMin: string;
    diaDaSemana: string;
}

const getWeatherIcon = (weatherType: string) => {
    switch (weatherType) {
        case 'clear_day':
            return <Clearday width={20} height={20} />;
        case 'none_day':
            return <Noneday width={20} height={20} />;
        case 'clear_night':
            return <ClearNight width={20} height={20} />;
        case 'none_night':
            return <NoneNight width={20} height={20} />;
        case 'cloud':
            return <Cloud width={20} height={20} />;
        case 'cloudly_day':
            return <CloudyDay width={20} height={20} />;
        case 'cloudly_night':
            return <CloudyNight width={20} height={20} />;
        case 'fog':
            return <Fog width={20} height={20} />;
        case 'hail':
            return <Hail width={20} height={20} />;
        case 'rain':
            return <Rain width={20} height={20} />;
        case 'snow':
            return <Snow width={20} height={20} />;
        case 'storm':
            return <Storm width={20} height={20} />;
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

export default LineForecast;
