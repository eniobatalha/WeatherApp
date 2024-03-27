import React from 'react';
import { View, Text } from 'react-native';
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
import styles from './styles'; // Certifique-se de que os estilos estão corretamente importados

interface MainInfoProps {
    weatherType: string;
    temp: string;
    description: string;
    max: string;
    min: string;
    sunrise: string;
    sunset: string;
}

const getWeatherIcon = (weatherType: string) => {
    switch (weatherType) {
        case 'clear_day':
            return <Clearday width={150} height={150} />;
        case 'none_day':
            return <Noneday width={150} height={150} />;
        case 'clear_night':
            return <ClearNight width={150} height={150} />;
        case 'none_night':
            return <NoneNight width={150} height={150} />;
        case 'cloud':
            return <Cloud width={150} height={150} />;
        case 'cloudly_day':
            return <CloudyDay width={150} height={150} />;
        case 'cloudly_night':
            return <CloudyNight width={150} height={150} />;
        case 'fog':
            return <Fog width={150} height={150} />;
        case 'hail':
            return <Hail width={150} height={150} />;
        case 'rain':
            return <Rain width={150} height={150} />;
        case 'snow':
            return <Snow width={150} height={150} />;
        case 'storm':
            return <Storm width={150} height={150} />;
        default:
            return null;
    }
};

const MainInfo: React.FC<MainInfoProps> = ({ weatherType, temp, description, max, min, sunrise, sunset  }) => {
    return (
        <View style={styles.info}>
            {getWeatherIcon(weatherType)}
            <Text style={styles.infoTextH1}>{temp}º</Text>
            <Text style={styles.infoTextH2}>{description}</Text>
            <Text style={styles.infoTextH3}>Max.: {max}º | Min.: {min}º</Text>
            <Text style={styles.infoTextH3}>Nascer: {sunrise} | Pôr: {sunset}</Text>
        </View>
    );
};

export default MainInfo;
