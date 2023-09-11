import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

// local import
import colors from '../../constants/colors';
import {logoutUser} from '../../redux/userSlice';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          dispatch(logoutUser());
          navigation.reset({
            index: 0,
            routes: [{name: 'AuthStack'}],
          });
        }}
        style={{
          backgroundColor: colors.primary,
          paddingHorizontal: 50,
          paddingVertical: 10,
          color: 'white',
        }}>
        Reset User
      </Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
