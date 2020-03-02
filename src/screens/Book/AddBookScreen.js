import * as React from 'react';
import { View, Text, Button } from 'react-native';

function AddBookScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Novo livro</Text>
    </View>
  );
}

export default AddBookScreen;
