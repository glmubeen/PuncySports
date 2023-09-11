import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screen
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const {isLogin} = useSelector(state => state.user);

  return (
    <Stack.Navigator
      initialRouteName={!isLogin ? 'AuthStack' : 'HomeStack'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
