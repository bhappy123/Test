import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import Toast from './Toast';

const ConnectionChecker = () => {
  const netInfo = useNetInfo();
  const [connectionInfo, setConnectionInfo] = useState(true);

  return (
    <View
      style={
        {
          // display: !netInfo.isConnected ? 'flex' : 'none',
        }
      }>
      {netInfo.isConnected && <Toast />}
      {!netInfo.isConnected && (
        <Text
          style={{
            textAlign: 'center',
            backgroundColor: '#f00',
            color: '#ddd',
            padding: 10,
          }}>
          No Internet Connection
        </Text>
      )}
    </View>
  );
};

export default ConnectionChecker;

const styles = StyleSheet.create({});
