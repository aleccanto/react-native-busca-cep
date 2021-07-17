import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resultado = ({ route }) => {
  const { endereco2 } = route.params;

  const [endereco, setEndereco] = useState({});

  useEffect(() => {
    setEndereco(endereco2)
  }, [])

  if (endereco.complemento) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cep: {endereco.cep}</Text>
        <Text style={styles.text}>Endereço: {endereco.endereco}</Text>
        <Text style={styles.text}>Bairro: {endereco.bairro}</Text>
        <Text style={styles.text}>Complemento: {endereco.complemento}</Text>
        <Text style={styles.text}>Estado: {endereco.estado}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cep: {endereco.cep}</Text>
        <Text style={styles.text}>Endereço: {endereco.endereco}</Text>
        <Text style={styles.text}>Bairro: {endereco.bairro}</Text>
        <Text style={styles.text}>Estado: {endereco.estado}</Text>
      </View>
    );

  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-evenly',
  },
  text: {
    backgroundColor: '#dddd',
    fontSize: 20,
    color: '#9400D3'
  }
});

export default Resultado;
