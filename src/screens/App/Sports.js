import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Sports = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '92%',
          alignSelf: 'center',
          backgroundColor: colors.primary,
          height: heightPercentageToDP(20),
          borderRadius: widthPercentageToDP(2),
          marginTop: heightPercentageToDP(2),
        }}></View>
    </View>
  );
};

export default Sports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});
