import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TrianguloArea = () => {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(null);

  const calcularArea = () => {
    const b = parseFloat(base);
    const h = parseFloat(altura);
    if (!isNaN(b) && !isNaN(h)) {
      const resultado = (b * h) / 2;
      setArea(resultado);
    } else {
      setArea('Por favor ingresa valores válidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Triángulo</Text>
      <TextInput
        style={styles.input}
        placeholder="Base"
        keyboardType="numeric"
        value={base}
        onChangeText={setBase}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <View style={styles.buttonContainer}>
        <Button title="Calcular Área" onPress={calcularArea} />
      </View>
      {area !== null && (
        <Text style={styles.result}>
          Área: {typeof area === 'number' ? `${area} unidades²` : area}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    color: '#333',
  },
});

export default TrianguloArea;
``
