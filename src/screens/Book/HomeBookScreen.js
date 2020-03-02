import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeBookScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeBookScreen</Text>
      <Button
        title="Novo livro"
        onPress={() => navigation.navigate('AddBookScreen')}
      />
    </View>
  );
}

export default HomeBookScreen;
