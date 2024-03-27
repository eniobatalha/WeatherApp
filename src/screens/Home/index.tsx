import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity } from 'react-native';
import { BellRinging, Calendar, CaretDown, MapPin } from 'phosphor-react-native';
import { MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { WeatherData } from '../../interfaces/WeatherTypes';
import CityInput from '../../components/CityInput/CityInput';
import CardClima from '../../components/CardClima/CardClima';
import LineForecast from '../../components/LineForecast/LineForecast';
import MainInfo from '../../components/MainInfo/MainInfo';
import styles from './styles';

export function Home() {
    const [cityName, setCityName] = useState('Jaboatão dos Guararapes');
    const [showCityInput, setShowCityInput] = useState(false);
    const [newCityName, setNewCityName] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
    const [conditionSlugs, setConditionSlugs] = useState(['', '', '', '', '']);
    const [hour, setHour] = useState('');

    useEffect(() => {
        fetchWeatherData('Jaboatão dos Guararapes');
    }, []);

    // Função para buscar os dados do clima de uma cidade
    const fetchWeatherData = (city: string) => {
        const apiKey = 'SUA-CHAVE';
        const encodedCity = encodeURIComponent(city);
        fetch(`https://api.hgbrasil.com/weather?key=${apiKey}&city_name=${encodedCity}`)
            .then(response => response.json())
            .then(data => {
                if (data.valid_key && data.results.temp) {
                    setWeatherData(data.results);
                    setCityName(data.results.city);
                    const newConditionSlugs = data.results.forecast.slice(0, 5).map((item: { condition: any; }) => item.condition);
                    setConditionSlugs(newConditionSlugs);
                    setHour(data.results.time.split(':')[0] + ':00')
                } else {
                    alert('Cidade não encontrada.');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar dados do clima:', error);
            });
    };

    // Função para lidar com o salvamento de uma nova cidade
    const handleSaveCity = () => {
        if (newCityName.trim() !== '') {
            fetchWeatherData(newCityName);
            setShowCityInput(false);
        } else {
            alert('Por favor, digite o nome de uma cidade válida.');
        }
    };

    // Função para lidar com o pressionar de um card
    const handleCardPress = (index: number) => {
        setSelectedCardIndex(index === selectedCardIndex ? null : index);
    };

    // Função para retornar as cores do gradiente de acordo com o horário
    const getGradientColors = () => {
        if (weatherData && weatherData.currently === 'noite') {
            return ["#0C3573", "#1053D6"];
        } else {
            return ["#2BB4E0", "#2FCAED"];
        }
    };

    // Função para retornar a cor de fundo da caixa de acordo com o horário
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

                {/* Se o showCityInput for true, renderizar o componente CityInput */}
                {showCityInput && (
                    <CityInput
                        show={showCityInput}
                        cityName={newCityName}
                        onCityNameChange={setNewCityName}
                        onSaveCity={handleSaveCity}
                    />
                )}

                {weatherData && (
                    <MainInfo
                        weatherType={weatherData.condition_slug}
                        temp={weatherData.temp}
                        description={weatherData.description}
                        max={weatherData.forecast[0].max}
                        min={weatherData.forecast[0].min}
                        sunrise={weatherData.sunrise}
                        sunset={weatherData.sunset}
                    />
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
                            {[0, 1, 2, 3].map((index) => (
                                <CardClima
                                    key={index}
                                    temperatura={weatherData.temp}
                                    weatherType={weatherData.condition_slug}
                                    hora={((parseInt(hour.split(':')[0]) + index) % 24) + ':00'}
                                    selected={selectedCardIndex === index}
                                    onPress={() => handleCardPress(index)}
                                />
                            ))}
                        </View>
                    </View>
                )}

                {weatherData && (
                    <View style={[styles.box, styles.box3, { backgroundColor: getBoxBackgroundColor() }]}>
                        <View style={styles.box3Line1}>
                            <Text style={styles.boxTextBold}>Próximas previsões</Text>
                            <Calendar color='#fff' size={25} />
                        </View>
                        
                            {weatherData.forecast.slice(1, 6).map((forecastItem, index) => (
                                <View style={styles.box3Line2}>
                                    <LineForecast
                                        key={forecastItem.weekday}
                                        diaDaSemana={forecastItem.weekday}
                                        temperaturaMax={forecastItem.max}
                                        temperaturaMin={forecastItem.min}
                                        weatherType={conditionSlugs[index]}
                                    />
                                </View>
                            ))}
                        
                    </View>
                )}

            </View>
        </LinearGradient>
    );
}

export default Home;
