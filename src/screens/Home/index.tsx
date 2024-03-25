import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text } from 'react-native';
import { BellRinging, Calendar, CaretDown, MapPin } from 'phosphor-react-native';
import SunAndRain from "../../assets/10d.svg";
import { MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import CardClima from '../../components/CardClima';
import LineForecast from '../../components/LineForecast';

export function Home() {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

    const handleCardPress = (index: number) => {
        setSelectedCardIndex(index === selectedCardIndex ? null : index);
    };

    return (
        <LinearGradient colors={["#0C3573", "#1053D6"]} style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <MapPin color='#fff' size={25} />
                        <Text style={styles.headerLeftText}>Jaboatão dos Guararapes</Text>
                        <CaretDown color='#fff' size={25} />
                    </View>
                    <BellRinging color='#fff' size={25} />
                </View>

                <View style={styles.info}>
                    <SunAndRain width={200} height={200} />
                    <Text style={styles.infoTextH1}>28º</Text>
                    <Text style={styles.infoTextH2}>Precipitations</Text>
                    <Text style={styles.infoTextH2}>Max.:31º Min.: 25º</Text>
                </View>

                <View style={[styles.box, styles.box1]}>
                    <View style={styles.contentBox}>
                        <MaterialIcons name="grain" size={16} color="white" style={styles.icon} />
                        <Text style={styles.box1Text}>6%</Text>
                    </View>
                    <View style={styles.contentBox}>
                        <FontAwesome name="thermometer-0" size={16} color="white" style={styles.icon} />
                        <Text style={styles.box1Text}>90%</Text>
                    </View>
                    <View style={styles.contentBox}>
                        <FontAwesome5 name="wind" size={16} color="white" style={styles.icon} />
                        <Text style={styles.box1Text}>19km/h</Text>
                    </View>
                </View>

                <View style={[styles.box, styles.box2]}>
                    <View style={styles.box2Line1}>
                        <Text style={styles.boxTextBold}>Today</Text>
                        <Text style={styles.box2Text}>Mar, 9</Text>
                    </View>
                    <View style={styles.box2Line2}>
                        <CardClima
                            temperatura="28º"
                            weatherType="SunAndCloud"
                            hora="11:00"
                            selected={selectedCardIndex === 0}
                            onPress={() => handleCardPress(0)}
                        />
                        <CardClima
                            temperatura="30º"
                            weatherType="SunAndCloud"
                            hora="12:00"
                            selected={selectedCardIndex === 1}
                            onPress={() => handleCardPress(1)}
                        />
                        <CardClima
                            temperatura="31º"
                            weatherType="Cloud"
                            hora="13:00"
                            selected={selectedCardIndex === 2}
                            onPress={() => handleCardPress(2)}
                        />
                        <CardClima
                            temperatura="32º"
                            weatherType="Cloud"
                            hora="14:00"
                            selected={selectedCardIndex === 3}
                            onPress={() => handleCardPress(3)}
                        />
                    </View>
                </View>

                <View style={[styles.box, styles.box3]}>
                    <View style={styles.box3Line1}>
                        <Text style={styles.boxTextBold}>Next Forecast</Text>
                        <Calendar color='#fff' size={25} />
                    </View>
                    <View style={styles.box3Line2}>
                        <LineForecast
                            diaDaSemana="Monday"
                            temperaturaMax="31º"
                            temperaturaMin="25º"
                            weatherType="SunAndCloud"
                        />
                    </View>
                    <View style={styles.box3Line2}>
                        <LineForecast
                            diaDaSemana="Tuesday"
                            temperaturaMax="28º"
                            temperaturaMin="23º"
                            weatherType="SunAndRain"
                        />
                    </View>
                    <View style={styles.box3Line2}>
                        <LineForecast
                            diaDaSemana="Wednesday"
                            temperaturaMax="34º"
                            temperaturaMin="28º"
                            weatherType="Sun"
                        />
                    </View>
                </View>

            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingTop: 60,
        paddingHorizontal: 30,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerLeftText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    info: {
        paddingTop: 20,
        paddingBottom: 25,
        alignItems: 'center',
    },
    infoTextH1: {
        color: '#fff',
        fontSize: 64,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 10,
    },
    infoTextH2: {
        color: '#fff',
        fontSize: 16,
    },
    box2Text: {
        color: '#fff',
        fontSize: 16,
    },
    boxTextBold: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },
    box: {
        width: '100%',
        marginBottom: 20,
        borderRadius: 25,
    },
    contentBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
    },
    box1: {
        height: '7%',
        backgroundColor: '#0f2a53',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 35,
    },
    box1Text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    box2: {
        height: '22%',
        backgroundColor: '#0f2a53',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingVertical: 20,
    },
    box2Line1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 25,
    },
    box2Line2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: '100%',
    },
    box3: {
        height: '18%',
        backgroundColor: '#0f2a53',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingVertical: 20,
    },
    box3Line1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 25,
        marginBottom: 10,
    },
    box3Line2: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
});

export default Home;
