import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// local imports
import colors from '../constants/colors';
import {fontsFamily, fontsSize} from '../constants/fonts';

// screens

import images from '../assets/images';
import Sports from '../screens/App/Sports';
import Orders from '../screens/App/User';
import Vendors from '../screens/App/Vendors';
import Setting from '../screens/App/Setting';

const Tab = createBottomTabNavigator();

const bottomTabData = [
  {
    name: 'Sports',
    component: Sports,
  },
  {
    name: 'Orders',
    component: Orders,
  },
  {
    name: 'Vendors',
    component: Vendors,
  },
  {
    name: 'Setting',
    component: Setting,
  },
];

const BottomTabStack = () => {
  const TabImage =
    name =>
    ({focused}) => {
      return (
        <View style={styles.iconBox}>
          <Image
            source={images[name.toLowerCase()]}
            style={styles.tabImage(focused)}
            resizeMode="contain"
          />
          <Text style={styles.tabTitle(focused)}>{name}</Text>
        </View>
      );
    };
  return (
    <Tab.Navigator
      initialRouteName={bottomTabData[0].name}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.mainTabbar,
      }}>
      {bottomTabData.map(tab => {
        return (
          <Tab.Screen
            name={tab.name}
            component={tab.component}
            options={{tabBarIcon: TabImage(tab.name)}}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabStack;

const styles = StyleSheet.create({
  mainTabbar: {
    height:
      Platform.OS === 'ios'
        ? heightPercentageToDP(11)
        : heightPercentageToDP(8),
    backgroundColor: colors.bg,
    borderTopWidth: undefined,
    elevation: 0,
  },
  iconBox: {
    width: widthPercentageToDP(20),
    height: heightPercentageToDP(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabImage: focused => ({
    width: widthPercentageToDP(5.5),
    height: widthPercentageToDP(5.5),
    tintColor: !focused ? 'grey' : colors.primary,
  }),
  tabTitle: focused => ({
    fontFamily: fontsFamily.regular,
    fontSize: fontsSize.sm1,
    marginTop: heightPercentageToDP(1),
    color: !focused ? 'grey' : colors.primary,
  }),
});
