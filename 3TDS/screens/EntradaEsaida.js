import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function EntradaESaida() {
  const [entrada, setEntrada] = useState('');
  const [saida, setSaida] = useState('');

  const limparCampo = () => {
    setEntrada("");
    setSaida("");
  };

  const processar = () => {
    setSaida(entrada.toUpperCase());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={entrada}
        onChangeText={setEntrada}
      />
      
      <View style={styles.containerBotoes}>
        <TouchableOpacity style={styles.botaoDeProcessar} onPress={processar}>
            <Text style={styles.textoBotao}>Processar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoDeLimpar} onPress={limparCampo}>
            <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.saida}>Saída: {saida}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 20, 
    width: '80%',
    fontSize: "x-large"
  },
  saida: { 
    marginTop: 20, 
    backgroundColor: "rgba(0,255,0,0.2)", 
    padding: 10, 
    borderRadius: 5,
    fontSize: "x-large"
  },
  botaoDeLimpar: { 
    backgroundColor: "#ff0000", 
    padding: 10, 
    borderRadius: 5 
  },
  botaoDeProcessar: { 
    backgroundColor: "#00aaaa", 
    padding: 10, 
    borderRadius: 5 
  },
  textoBotao: { 
    color: "#fff", 
    fontWeight: "bold", 
    textAlign: "center",
    fontSize: "x-large"
  },
  containerBotoes: { 
    display: 'flex',
    flexDirection: "row",
    columnGap: "400px",
  },
});
