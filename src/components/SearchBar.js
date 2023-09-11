import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import images from '../assets/images';
import colors from '../constants/colors';

const SearchBar = ({value, onChangeText, onPress, isFilter}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={styles.leftSide}>
        <Image
          source={images.search}
          style={styles.searchIc}
          resizeMode="contain"
        />
        <TextInput
          placeholder="Search for service or product"
          placeholderTextColor={colors.textLight}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      {isFilter && (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.8}
          style={styles.rightSide}>
          <Image
            source={images.filter}
            style={styles.filterIc}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: widthPercentageToDP(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.textLight,
    borderWidth: 0.5,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginTop: heightPercentageToDP(3),
    paddingLeft: widthPercentageToDP(4),
    paddingRight: widthPercentageToDP(1),
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  searchIc: {
    width: widthPercentageToDP(6),
    height: widthPercentageToDP(6),
    tintColor: colors.textLight,
    marginRight: widthPercentageToDP(1),
  },
  rightSide: {
    backgroundColor: colors.primary,
    width: widthPercentageToDP(8),
    height: widthPercentageToDP(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  filterIc: {
    width: widthPercentageToDP(4),
    height: widthPercentageToDP(4),
    tintColor: colors.white,
  },
});
