import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeSeriesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeSeriesScreen</Text>
      <Button
        title="Nova serie"
        onPress={() => navigation.navigate('AddSeriesScreen')}
      />
    </View>
  );
}

export default HomeSeriesScreen;
