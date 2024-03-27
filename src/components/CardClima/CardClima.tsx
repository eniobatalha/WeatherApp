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

interface CardClimaProps {
    weatherType: string;
    temperatura: string;
    hora: string;
    selected: boolean;
    onPress: () => void;
}

const getWeatherIcon = (weatherType: string) => {
    switch (weatherType) {
        case 'clear_day':
            return <Clearday width={50} height={50} />;
        case 'none_day':
            return <Noneday width={50} height={50} />;
        case 'clear_night':
            return <ClearNight width={50} height={50} />;
        case 'none_night':
            return <NoneNight width={50} height={50} />;
        case 'cloud':
            return <Cloud width={50} height={50} />;
        case 'cloudly_day':
            return <CloudyDay width={50} height={50} />;
        case 'cloudly_night':
            return <CloudyNight width={50} height={50} />;
        case 'fog':
            return <Fog width={50} height={50} />;
        case 'hail':
            return <Hail width={50} height={50} />;
        case 'rain':
            return <Rain width={50} height={50} />;
        case 'snow':
            return <Snow width={50} height={50} />;
        case 'storm':
            return <Storm width={50} height={50} />;
        default:
            return null;
    }
};

const CardClima: React.FC<CardClimaProps> = ({ weatherType, temperatura, hora, selected, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.card, selected && styles.selectedCard]}>
                <Text style={styles.text}>{temperatura}º</Text>
                {getWeatherIcon(weatherType)}
                <Text style={styles.text}>{hora}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CardClima;
