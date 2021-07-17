import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import ViaCep from '../service/ViaCep';

const Home = ({navigation}) => {
  const [cep, setCep] = useState('');
  const [cepMask, setCepMask] = useState('');
  const [endereco, setEndereco] = useState({});

  useEffect(() => {
    buscar();
  }, [cep]);

  const buscar = () => {
    if (cep.length == 8) {
      getCep(cep);
    }
  };

  const changeCep = cepTemp => {
    setCep(cepTemp.replace('-', ''));
    let newCep
    if(cepTemp.length == 8){
      newCep = cepTemp.substring(0, 5) + '-' + cepTemp.substring(5).replace('-', '');
    }else{
      newCep = cepTemp
    }
    setCepMask(newCep);
  };

  const ir = () => {
    if (!!endereco.endereco && cep.length == 8) {
      navigation.navigate('Resultado', {endereco2: endereco});
    } else {
      Alert.alert('CEP inválido', 'Por favor verifique o CEP informado!');
    }
  };

  const getCep = async cep => {
    let resposta = await ViaCep.get(`${cep}/json`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        Alert.alert('Erro do servidor', `status: ${error.heders}`);
      });
    setEndereco({
      cep: resposta.cep,
      endereco: resposta.logradouro,
      complemento: resposta.complemento,
      bairro: resposta.bairro,
      estado: resposta.uf,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInternoA}>
        <Text style={styles.text}>Informe seu cep:</Text>
        <TextInput
          onChangeText={changeCep}
          keyboardType="numeric"
          value={cepMask}
          style={styles.input}
          placeholder="CEP"
        />
      </View>
      <View style={styles.containerInternoB}>
        <TouchableOpacity style={styles.button} onPress={ir}>
          <Text style={styles.textButton}>PESQUISAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderColor: '#9400D3',
    borderWidth: 1,
    height: '40%',
    padding: 20,
    fontSize: 20,
    borderRadius: 100,
  },
  button: {
    backgroundColor: '#9400D3',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
  },
  containerInternoA: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  containerInternoB: {
    alignItems: 'stretch',
  },
});

export default Home;
