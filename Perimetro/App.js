import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PerimetroCuadrado = () => {
  const [lado, setLado] = useState('');
  const [perimetro, setPerimetro] = useState(null);

  const calcularPerimetro = () => {
    const ladoNumerico = parseFloat(lado);
    if (!isNaN(ladoNumerico)) {
      setPerimetro(4 * ladoNumerico);
    } else {
      setPerimetro('Entrada inválida');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingresa la longitud del lado:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={lado}
        onChangeText={setLado}
      />
      <Button title="Calcular perímetro" onPress={calcularPerimetro} />
      {perimetro !== null && (
        <Text style={styles.result}>Perímetro: {perimetro}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  result: { fontSize: 20, marginTop: 20 },
});

export default PerimetroCuadrado;