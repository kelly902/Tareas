import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [diametro, setDiametro] = useState('');
  const [radio, setRadio] = useState(null);

  const calcularRadio = () => {
    const d = parseFloat(diametro);
    if (!isNaN(d) && d > 0) {
      setRadio(d / 2);
    } else {
      setRadio('Valor invalido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcula el Radio</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el diametro"
        keyboardType="numeric"
        value={diametro}
        onChangeText={setDiametro}
      />
      <Button title="Calcular" onPress={calcularRadio} />
      {radio !== null && <Text style={styles.result}>Radio: {radio}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, width: '25%', marginBottom: 20 },
  result: { fontSize: 20, marginTop: 20 }
});