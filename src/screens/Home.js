import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import ConnectionChecker from '../components/ConnectionChecker';
const Home = ({navigation}) => {
  const [connectionStatus, setConnectionStatus] = useState(null);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => BackHandler.removeEventListener();
  }, []);

  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ConnectionChecker />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileDetails')}
          style={{
            width: 250,
          }}>
          <Image
            style={{width: 250, height: 250, borderRadius: 150}}
            source={require('../../assets/img/profile-pic.jpg')}></Image>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 15,
              padding: 5,
              backgroundColor: '#333',
              color: '#ddd',
            }}>
            Hello React Native User
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
