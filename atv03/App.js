import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const n1 = parseFloat(base);
    const n2 = parseFloat(altura);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Entrada inválida');
      return;
    }

    setResultado(`Área: ${n1 * n2}`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://placehold.com/150' }} style={styles.image}/>
      
      <Text style={styles.title}>Área do Retângulo</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite a base'
        keyboardType='numeric'
        value={base}
        onChangeText={setBase}
      />

      <TextInput
        style={styles.input}
        placeholder='Digite a altura'
        keyboardType='numeric'
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcbdb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },

  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc', 
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  result: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
});