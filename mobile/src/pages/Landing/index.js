import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Landing() {
  return (
      <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="menu" size={28} color="#19286D" />
                </TouchableOpacity>
              <TextInput style={styles.input} placeholder="Buscar" />
                <TouchableOpacity>
                    <Feather name="shopping-cart" size={28} color="#19286D" />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
            <Image source={logoImg} />
            </View>
    </View>
  );
}