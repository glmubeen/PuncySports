import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {fontsFamily, fontsSize} from '../../constants/fonts';
import colors from '../../constants/colors';

const SimpleTextHeader = ({text, ...props}) => {
  return (
    <View style={{flex: 1, ...props.style}}>
      <Text style={styles.text1}>{text}</Text>
    </View>
  );
};

export default SimpleTextHeader;

const styles = StyleSheet.create({
  text1: {
    fontFamily: fontsFamily.semibold,
    fontSize: fontsSize.xxl2,
    color: colors.textDark,
  },
});
