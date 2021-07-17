import React from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

const ViaCep = axios.create({
  baseURL: 'http://viacep.com.br/ws/',
});

export default ViaCep;
