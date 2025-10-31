import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function App() {
const [Valor, setvalor] = usesState('');
conts [Valor, setvalor1] = useState (null);

  const calcularDesdeArea = () => {
    const n = parseFloat(valor);
    if (n > 0) setRadio(Math.sqrt(n / Math.PI));

       const calcularDesdeCircunf = () => {
    const n = parseFloat(valor);
    if (n > 0) setRadio(n / (2 * Math.PI));

    
  };
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Radio</Text>
 
            <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresa un número"
        value={valor}
        onChangeText={setValor}
      />

            <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresa un número"
        value={valor}
        onChangeText={setValor}
      />
      <Button title="Calcular desde Área" onPress={calcularDesdeArea} />
      <Button title="Calcular desde Circunferencia" onPress={calcularDesdeCircunf} />

            {radio && <Text style={styles.result}>Radio ≈ {radio.toFixed(4)}</Text>}
    </View>
  );
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 10, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#cd9999ff', padding: 8, marginBottom: 10, borderRadius: 6 },
  result: { marginTop: 15, fontSize: 18, textAlign: 'center', fontWeight: 'bold' }
});

  };

}
