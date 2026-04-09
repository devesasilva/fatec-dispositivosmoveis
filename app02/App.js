import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, StyleSheet, Image, Button} from 'react-native';

export default function App() {
  const [num1, SetNum1] = useState('');
  const [num2, SetNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(num2)) {
      setResultado('Entrada inválida');
      return;
    }

    switch (operacao) {
      case '+':
        setResultado(n1 + n2);
        break;
      case '-':
        setResultado(n1 - n2);
        break;
      case '*':
        setResultado(n1 * n2);
        break;
      case '/':
        setResultado(n2 !== 0 ? n1 / n2 : 'Erro: Divisão por zero');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://placehold.com/150' }} style={styles.image}/>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o 1º número'
        keyboardType='numeric'
        value={num1}
        onChangeText={(text) => SetNum1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite o 2º número'
        keyboardType='numeric'
        value={num2}
        onChangeText={(text) => SetNum2(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title='+' onPress={() => calcular('+')}/>
        <TouchableOpacity style={styles.button} onPress={() => calcular('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Pressable style={styles.button} onPress={() => calcular('*')}>
          <Text style={styles.buttonText}>*</Text>
        </Pressable>
        <TouchableOpacity style={styles.button} onPress={() => calcular('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

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
    borderWidht: 1,
    borderColor: '#ccc', 
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '80%',
  },

  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },

  buttonText: {
    color: 'fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  result: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#333',
  },
});
