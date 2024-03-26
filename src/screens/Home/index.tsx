import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { BellRinging, Calendar, CaretDown, MapPin } from 'phosphor-react-native';
import { MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import CardClima from '../../components/CardClima';
import LineForecast from '../../components/LineForecast';
import { WeatherData } from '../../interfaces/WeatherTypes';
import { SvgFromUri } from 'react-native-svg';

export function Home() {
    const [cityName, setCityName] = useState('Jaboatão dos Guararapes');
    const [showCityInput, setShowCityInput] = useState(false);
    const [newCityName, setNewCityName] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [weatherIcon, setWeatherIcon] = useState('');

    useEffect(() => {
        fetchWeatherData('Jaboatão dos Guararapes');
    }, []);


    const fetchWeatherData = (city: string) => {
        const apiKey = '977e52a1';
        const encodedCity = encodeURIComponent(city);
        fetch(`https://api.hgbrasil.com/weather?key=${apiKey}&city_name=${encodedCity}`)
            .then(response => response.json())
            .then(data => {
                if (data.valid_key && data.results.temp) {
                    setWeatherData(data.results);
                    setCityName(data.results.city);
                    setWeatherIcon('https://assets.hgbrasil.com/weather/icons/conditions/' + data.results.condition_slug + '.svg');
                } else {
                    alert('Cidade não encontrada.');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar dados do clima:', error);
            });
    };

    const handleSaveCity = () => {
        if (newCityName.trim() !== '') {
            fetchWeatherData(newCityName);
            setShowCityInput(false);
        } else {
            alert('Por favor, digite o nome de uma cidade válida.');
        }
    };

    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

    const handleCardPress = (index: number) => {
        setSelectedCardIndex(index === selectedCardIndex ? null : index);
    };

    const getGradientColors = () => {
        if (weatherData && weatherData.currently === 'noite') {
            return ["#0C3573", "#1053D6"];
        } else {
            return ["#2BB4E0", "#2FCAED"];
        }
    };

    const getBoxBackgroundColor = () => {
        if (weatherData && weatherData.currently === 'noite') {
            return "#0f2a53";
        } else {
            return "#2A98CF";
        }
    };

    return (
        <LinearGradient colors={getGradientColors()} style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <MapPin color='#fff' size={25} />
                        <Text style={styles.headerLeftText}>{cityName}</Text>
                        <TouchableOpacity onPress={() => setShowCityInput((prev) => !prev)}>
                            <CaretDown color='#fff' size={25} />
                        </TouchableOpacity>
                    </View>
                    <BellRinging color='#fff' size={25} />
                </View>

                {/* Se o showCityInput for true, renderizar o componente de entrada de cidade */}
                {showCityInput && (
                    <View style={styles.cityInputContainer}>
                        <TextInput
                            style={styles.cityInput}
                            placeholder="Digite o nome da cidade"
                            placeholderTextColor={'#fff'}
                            onChangeText={text => setNewCityName(text)}
                        />
                        <TouchableOpacity style={styles.saveButton} onPress={handleSaveCity}>
                            <Text style={styles.saveButtonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {weatherData && (
                    <View style={styles.info}>
                        <SvgFromUri uri={weatherIcon} />
                        <Text style={styles.infoTextH1}>{weatherData.temp}º</Text>
                        <Text style={styles.infoTextH2}>{weatherData.description}</Text>
                        <Text style={styles.infoTextH2}>Max.: {weatherData.forecast[0].max}º Min.: {weatherData.forecast[0].min}º</Text>
                    </View>
                )}

                {weatherData && (
                    <View style={[styles.box, styles.box1, { backgroundColor: getBoxBackgroundColor() }]}>
                        <View style={styles.contentBox}>
                            <MaterialIcons name="grain" size={16} color="white" style={styles.icon} />
                            <Text style={styles.box1Text}>{weatherData.forecast[0].rain_probability}%</Text>
                        </View>
                        <View style={styles.contentBox}>
                            <FontAwesome name="thermometer-0" size={16} color="white" style={styles.icon} />
                            <Text style={styles.box1Text}>{weatherData.humidity}%</Text>
                        </View>
                        <View style={styles.contentBox}>
                            <FontAwesome5 name="wind" size={16} color="white" style={styles.icon} />
                            <Text style={styles.box1Text}>{weatherData.wind_speedy}</Text>
                        </View>
                    </View>
                )}

                {weatherData && (
                    <View style={[styles.box, styles.box2, { backgroundColor: getBoxBackgroundColor() }]}>
                        <View style={styles.box2Line1}>
                            <Text style={styles.boxTextBold}>Hoje</Text>
                            <Text style={styles.box2Text}>{weatherData.date}</Text>
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
                )}

                {weatherData && (
                    <View style={[styles.box, styles.box3, { backgroundColor: getBoxBackgroundColor() }]}>
                        <View style={styles.box3Line1}>
                            <Text style={styles.boxTextBold}>Próximas previsões</Text>
                            <Calendar color='#fff' size={25} />
                        </View>
                        <View style={styles.box3Line2}>
                            <LineForecast
                                diaDaSemana={weatherData.forecast[1].weekday}
                                temperaturaMax={weatherData.forecast[1].max}
                                temperaturaMin={weatherData.forecast[1].min}
                                weatherType="SunAndCloud"
                            />
                        </View>
                        <View style={styles.box3Line2}>
                            <LineForecast
                                diaDaSemana={weatherData.forecast[1].weekday}
                                temperaturaMax={weatherData.forecast[1].max}
                                temperaturaMin={weatherData.forecast[1].min}
                                weatherType="SunAndCloud"
                            />
                        </View>
                        <View style={styles.box3Line2}>
                            <LineForecast
                                diaDaSemana={weatherData.forecast[2].weekday}
                                temperaturaMax={weatherData.forecast[2].max}
                                temperaturaMin={weatherData.forecast[2].min}
                                weatherType="Sun"
                            />
                        </View>
                        <View style={styles.box3Line2}>
                            <LineForecast
                                diaDaSemana={weatherData.forecast[3].weekday}
                                temperaturaMax={weatherData.forecast[3].max}
                                temperaturaMin={weatherData.forecast[3].min}
                                weatherType="Sun"
                            />
                        </View>
                        <View style={styles.box3Line2}>
                            <LineForecast
                                diaDaSemana={weatherData.forecast[4].weekday}
                                temperaturaMax={weatherData.forecast[4].max}
                                temperaturaMin={weatherData.forecast[4].min}
                                weatherType="Sun"
                            />
                        </View>

                    </View>
                )}

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
    cityInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    cityInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#fff',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        color: '#fff',
        padding: 10,
    },
    saveButton: {
        backgroundColor: '#fff',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    saveButtonText: {
        color: '#0C3573',
        fontSize: 16,
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
        fontSize: 20,
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
        height: '6%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    box1Text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    box2: {
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingVertical: 15,
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
        paddingTop: 10,
        width: '100%',
    },
    box3: {
        height: 'auto',
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
