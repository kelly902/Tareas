import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function App() {
 const [c1, setC1] = useState('');
 const [c2, setC2] = useState('');
 const [c3, setC3] = useState('');
 const [c4, setC4] = useState('');
 const [promedio, setpromedio] = usertate(null);

 const calcularpromedio =() => {
  const n1 = parseFloat (c1);
  const n2 = parseFloat (c2);
  const n3 = parseFloat (c3);
  const n4 = parseFloat (c4);
   if ([n1,n2,n3,n4] .every(n => !isNaN(n))) {
    setpromedio (((n1+n2+n3+n4)/4).toFixed(2));
   }else{
    setpromedio('Numero invalido');
   }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcula el Promedio</Text>
      <TextInput style={styles.input} placeholder="Calificación 1" keyboardType="numeric" value={c1} onChangeText={setC1} />
      <TextInput style={styles.input} placeholder="Calificación 2" keyboardType="numeric" value={c2} onChangeText={setC2} />
      <TextInput style={styles.input} placeholder="Calificación 3" keyboardType="numeric" value={c3} onChangeText={setC3} />
      <TextInput style={styles.input} placeholder="Calificación 4" keyboardType="numeric" value={c4} onChangeText={setC4} />
      <Button title="Calcular Promedio" onPress={calcularPromedio} />
      {promedio !== null && <Text style={styles.result}>Promedio: {promedio}
        </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, justifyContent: "center", alignItems:'center',padding:20},
  title:{ fontSize:24, marginBottom:15},
  input :{ borderWidth:1, borderColor: '#9a2828ff', padding: 10 , width:50, marginBottom:10 },
  result: { fontSize: 20 , marginTop: 20}
})