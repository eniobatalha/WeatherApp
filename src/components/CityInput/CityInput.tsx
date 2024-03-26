import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

interface CityInputProps {
    show: boolean;
    cityName: string;
    onCityNameChange: (text: string) => void;
    onSaveCity: () => void;
}

const CityInput: React.FC<CityInputProps> = ({ show, cityName, onCityNameChange, onSaveCity }) => {
    if (!show) {
        return null;
    }

    return (
        <View style={styles.cityInputContainer}>
            <TextInput
                style={styles.cityInput}
                placeholder="Digite o nome da cidade"
                placeholderTextColor={'#fff'}
                onChangeText={onCityNameChange}
                value={cityName}
            />
            <TouchableOpacity style={styles.saveButton} onPress={onSaveCity}>
                <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CityInput;
