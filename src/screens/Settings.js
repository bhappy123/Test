import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  BackHandler,
  Modal,
  Alert,
  SafeAreaView,
} from 'react-native';

const Settings = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => BackHandler.removeEventListener();
  }, []);

  const backAction = () => {
    setIsModalVisible(true);
    return true;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has now been closed.');
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 300,
              height: 200,
              backgroundColor: '#ddd',
              justifyContent: 'space-around',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: 35,
            }}>
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {' '}
                Choose An Option
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
              }}>
              <Button title="Exit" onPress={() => BackHandler.exitApp()} />
              <Button
                title="Navigate"
                onPress={() => {
                  setIsModalVisible(false);
                  props.navigation.navigate('Home');
                }}
              />
              <Button
                color="green"
                title="No"
                onPress={() => {
                  setIsModalVisible(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          color="#333"
          title="Exit App"
          style={{padding: 5}}
          onPress={() => BackHandler.exitApp()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
