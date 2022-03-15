import React, { useEffect } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

import FF from './FF';

const App = () => {

  async function getFlag() {
    const flagName = '<YOUR FLAG KEY>';
    const value = await FF.booleanFlagValue(flagName, false);
    Alert.alert(flagName, flagName + ' = ' + value);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ justifyContent: 'center' }}>
          <Button title="Evaluate Flag" onPress={getFlag} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;