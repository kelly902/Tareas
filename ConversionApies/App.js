import { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';

export default function App() {
  const [pies,setpies] = useState (0);
  const [resultado, setResultado] = useState(null);
  const conversion = () => {
    setResultado(parseFloat(pies)*0.3048)
  };
  return (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Conversion de pies a metros</Text>
      <TextInput
      placeholder='Ingresa un numero'
      keyboardType='numeric'
      style={{ borderWidth:2, padding:10, marginBottom:20, width:200 }}
      onChangeText={setpies}></TextInput>
      <Button title='Calcular' onPress={conversion}></Button>
         {resultado !==null && <Text style={{marginTop:10}}>En metros es : {resultado}</Text>}
    </View>
  );
}
