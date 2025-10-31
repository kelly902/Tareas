import { useState } from 'react';
import {Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  const[horas, sethoras]=useState(0);
  const[mos,setmos]=useState(null);
  let salario=0;
  const calculo=()=>{
    if(horas<40){
      salario=horas*14.00;
    }else{
      salario=(40*14.00)+((horas-40)*26.00);
    }
    setmos(salario)
  }
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Salario de un obrero</Text>
      <TextInput
      placeholder='Ingresa las horas'
      keyboardType='numeric'
      style={{borderWidth:2, padding:10, marginBottom:20, width:260}}
      onChangeText={sethoras}
      ></TextInput>
      <Button style={{marginTop:10}} title='Calcular' onPress={calculo}/>
      <Text>${mos}</Text>
    </View>
  );
}