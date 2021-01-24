import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Share,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector, connect, useDispatch} from 'react-redux';
import {fetchUsers} from '../action/APIDataAction';
import {addComments} from '../action/CommentAction';

const ProfileDetails = ({userData, fetchUsers}) => {
  const user = useSelector((state) => state.user);
  const APIData = useSelector((state) => state.APIData);
  const commentData = useSelector((state) => state.comment);

  const dispatch = useDispatch();

  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleLoadMore = () => {
    fetchUsers();
  };

  const handelShare = async () => {
    try {
      const result = await Share.share({
        message: `Hi i am ${user.name} working as ${user.profession} and having work experience of ${user.workExperience}`,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: '#ddd',
        marginTop: 6,
        height: 38,
        paddingLeft: 12,
        paddingTop: 8,
      }}>
      <Text
        style={{
          color: '#333',
        }}>
        {item.email ? item.email : item.comment}
      </Text>
    </View>
  );

  const commentHandler = () => {
    if (comment !== '') {
      dispatch(addComments([{comment}, ...commentData]));
      setComment('');
    }
  };

  return (
    <ScrollView vertical style={{flex: 1, padding: 5, backgroundColor: '#eee'}}>
      <View
        style={{
          height: 150,
          margin: 5,
          backgroundColor: '#111',
          padding: 10,
          borderRadius: 10,
          borderBottomLeftRadius: 25,
          borderTopRightRadius: 25,
        }}>
        <Text style={{color: '#ddd', fontSize: 22, fontWeight: 'bold'}}>
          {user.name}
        </Text>
        <Text
          style={{
            color: '#ddd',
            fontSize: 18,
            marginTop: 8,
          }}>{`${user.address}, ${user.location}`}</Text>
        <Text
          style={{
            color: '#ddd',
            fontSize: 15,
            marginTop: 8,
          }}>{`Profession: ${user.profession}`}</Text>
        <Text
          style={{
            color: '#ddd',
            fontSize: 15,
            marginTop: 8,
          }}>{`Experience: ${user.workExperience}`}</Text>
      </View>
      <View style={{height: 50, margin: 5}}>
        <TouchableOpacity
          onPress={() => handelShare()}
          style={{
            height: '100%',
            backgroundColor: '#d3d3d3',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#222',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Share +
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{height: 250, margin: 5, backgroundColor: '#ccc', padding: 10}}>
        {/* <FlatList data={commentData} renderItem={renderUserComment} /> */}
        <FlatList
          data={commentData.concat(APIData.users)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
        />
      </View>
      <View
        style={{
          height: 50,
          margin: 5,
          backgroundColor: '#444',
          flexDirection: 'row',
        }}>
        <View style={{flex: 5}}>
          <KeyboardAvoidingView>
            <TextInput
              placeholderTextColor="#ddd"
              placeholder="write a comment..."
              onChangeText={(text) => setComment(text)}
              defaultValue={comment}
              style={{
                borderBottomColor: '#eee',
                width: '90%',
                borderBottomWidth: 2,
                marginBottom: 5,
                padding: 5,
                fontSize: 18,
                marginLeft: 5,
                color: '#eee',
              }}
            />
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity
          onPress={() => commentHandler()}
          style={{
            flex: 1,
            height: 35,
            width: 35,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#eee',
            marginHorizontal: 6,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.APIData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
