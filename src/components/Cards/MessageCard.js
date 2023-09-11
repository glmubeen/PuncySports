import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import globalStyle from '../../utils/globalStyle';
import colors from '../../constants/colors';
import {fontsFamily, fontsSize} from '../../constants/fonts';

const MessageCard = ({image, name, time, message, badge}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image source={image} style={styles.imgStyle} resizeMode="contain" />
      </View>
      <View style={styles.rightSide}>
        <View style={{...globalStyle.rcb}}>
          <Text style={styles.text1}>{name}</Text>
          <Text style={styles.text2}>{time}</Text>
        </View>
        <View style={{...globalStyle.rcb}}>
          <Text numberOfLines={3} style={styles.text3}>
            {message}
          </Text>
          {badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: widthPercentageToDP(2),
    gap: widthPercentageToDP(1),
  },
  leftSide: {
    width: '20%',
    justifyContent: 'center',
  },
  rightSide: {
    width: '80%',
  },
  badge: {
    width: widthPercentageToDP(5),
    height: widthPercentageToDP(5),
    borderRadius: 100,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: fontsSize.sm1,
    fontFamily: fontsFamily.bold,
  },
  imgStyle: {
    width: widthPercentageToDP(15),
    height: widthPercentageToDP(15),
  },
  text1: {
    fontFamily: fontsFamily.medium,
    fontSize: fontsSize.md2,
    color: colors.textDark,
  },
  text2: {
    fontFamily: fontsFamily.medium,
    fontSize: fontsSize.sm2,
    color: colors.textDark,
  },
  text3: {
    fontFamily: fontsFamily.regular,
    fontSize: fontsSize.md1,
    color: colors.textLight,
    width: '90%',
    marginTop: heightPercentageToDP(0.6),
  },
});
