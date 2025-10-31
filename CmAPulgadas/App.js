import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [cm, setCm] = useState('');
  const [pulgadas, setPulgadas] = useState(null);


 const convertir =() => {
  const valorcm = parseFloat (cm);
   if  (!isNaN(valorcm)&& valorcm > 0) {
    setpulgadas ((valorcm /2.54).toFixed(2));
   }else{
    setpulgadas('Numero invalido');
   }
 };

 return (
   
  <View style={styles.container}>
      <Text style={styles.title}>Convertir cm a pulgadas</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa centímetros"
        keyboardType="numeric"
        value={cm}
        onChangeText={setCm}
      />
      <Button title="Convertir" onPress={convertir} />
      {pulgadas !== null && <Text style={styles.result}>pulgadas: {pulgadas}
        </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, justifyContent: "center", alignItems:'center',padding:20},
  title:{ fontSize:24, marginBottom:25},
  input :{ borderWidth:1, borderColor: '#9a2828ff', padding: 10 , width:50, marginBottom:10 },
  result: { fontSize: 20 , marginTop: 20}
})