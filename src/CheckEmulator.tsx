import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  NativeModules,
  Button,
  StyleSheet, StatusBar, View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const CheckEmulator = ({ route }:any) => {
  

  const navigation = useNavigation();
  // our custom method
  const { ReactOneCustomMethod } = NativeModules;

  const { item } = route.params;

  const [id, setId] = useState('Press the button to get Emulator Status');

  const getId = () => {
    ReactOneCustomMethod.getPhoneID()
      .then((res: boolean) => {
        if (res == true) {
          setId('App is running in Emulator');
        } else {
          setId('App is running in Device');
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#2196F3" translucent={true} />
      <View style={{
        flexDirection: 'row', width: '100%', height: '10%',
        backgroundColor: '#2196F3',
      }}>
          <Icon name="angle-left" size={25} color="white" style={{ marginTop: '10%', marginLeft: '5%' }} onPress={() => { navigation.goBack(); }} />
              
        <Text style={styles.header}>
          {item}
        </Text>
      </View>
      <Text style={styles.id}>{id}</Text>
      <View style={{margin:20}}>
        <Button title="Check Emulator" onPress={getId} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  id: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    marginTop: 50
  }, header: {
    backgroundColor: '#2196F3',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '10%',
    width: '100%',
    paddingLeft: '35%'
  },
});

export default CheckEmulator;