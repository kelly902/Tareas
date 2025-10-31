import { useState } from 'react';
import {Text, View, Button } from 'react-native';

export default function App() {
  const sal = 80*50;
  const dimms = sal*0.015;
  const dispt = sal*0.012;
  const [resultado, setResultado]= useState(null);
  const conversion = () => {
    setResultado(((((sal*0.2)+sal)-dimms)-dispt))
  };
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Calcular el salario neto de un obrero </Text>
      <Button title="Calcular" onPress={conversion}/>
      {resultado !==null && <Text style={{marginTop:10}}>El salario es de: {resultado}</Text>}
    </View>
  );
}
