import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';

// local import
import Input from '../../components/Inputs/Input';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import {fontsFamily, fontsSize} from '../../constants/fonts';
import colors from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import apiRequest from '../../utils/apiRequest';
import endPoints from '../../constants/endPoints';
import {setLoader} from '../../redux/globalSlice';
import images from '../../assets/images';

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const SignUpSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('This email address is not valid')
      .required('Please enter your email address!')
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'This email address is not valid',
      ),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be 8 character long'),
    confirmPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('This field is required')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  });

  const signUp = async value => {
    navigation.reset({
      index: 0,
      routes: [{name: 'HomeStack'}],
    });
    // dispatch(setLoader(true));
    // const fcmToken = await AsyncStorage.getItem('fcmToken');
    // let payload = {
    //   username: value.username,
    //   email: value.email,
    //   password: value.password,
    //   userType: provider == 'provider' ? 'Provider' : 'Consumer',
    //   deviceType: Platform.OS,
    //   deviceToken: fcmToken ? fcmToken : 'abc',
    //   service: '64e40933e79ea153263da441',
    // };
    // apiRequest
    //   .post(endPoints.register, payload)
    //   .then(res => {
    //     console.log('register ===>', res.data);
    //     dispatch(setLoader(false));
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     dispatch(setLoader(false));
    //     Toast.show({
    //       type: 'error',
    //       text1: err.data.message,
    //     });
    //   });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          marginTop: heightPercentageToDP(4),
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  source={images.down_arrow}
                  style={styles.dropDownIc}
                  resizeMode="contain"
                />
              </Pressable>
              <Text style={styles.heading}>Register Account</Text>
            </View>
            <Formik
              initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={value => {
                signUp(value);
              }}
              validationSchema={SignUpSchema}>
              {({
                values,
                errors,
                touched,
                handleChange,
                setFieldTouched,
                isValid,
                handleSubmit,
              }) => (
                <View>
                  <Input
                    placeholderText={'Username'}
                    value={values.username}
                    handleOnChangeTxt={handleChange('username')}
                    onBlur={() => setFieldTouched('username')}
                    keyboardType={'email-address'}
                    error={touched.username && errors.username}
                    errorType={errors.username}
                    marginTop={heightPercentageToDP(3)}
                  />
                  <Input
                    placeholderText={'Email Address'}
                    value={values.email}
                    handleOnChangeTxt={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    keyboardType={'email-address'}
                    error={touched.email && errors.email}
                    errorType={errors.email}
                    marginTop={heightPercentageToDP(3)}
                  />
                  <Input
                    isPassword
                    placeholderText={'Password'}
                    value={values.password}
                    handleOnChangeTxt={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    keyboardType={'email-address'}
                    error={touched.password && errors.password}
                    errorType={errors.password}
                    marginTop={heightPercentageToDP(3)}
                  />
                  <Input
                    isPassword
                    placeholderText={'Confirm Password'}
                    value={values.confirmPassword}
                    handleOnChangeTxt={handleChange('confirmPassword')}
                    onBlur={() => setFieldTouched('confirmPassword')}
                    keyboardType={'email-address'}
                    error={touched.confirmPassword && errors.confirmPassword}
                    errorType={errors.confirmPassword}
                    marginTop={heightPercentageToDP(3)}
                  />
                  <PrimaryButton
                    disabled={!isValid}
                    text={'Register'}
                    onPress={handleSubmit}
                    style={{marginTop: heightPercentageToDP(3)}}
                  />
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthPercentageToDP(2),
  },
  dropDownIc: {
    width: widthPercentageToDP(5),
    height: widthPercentageToDP(5),
    transform: [{rotate: '90deg'}],
  },
  heading: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: fontsSize.xl2,
    fontFamily: fontsFamily.bold,
    color: colors.textDark,
  },
  titleStyle: {
    fontSize: fontsSize.md1,
    fontFamily: fontsFamily.regular,
    color: colors.textDark,
    marginTop: heightPercentageToDP(3),
  },
  pointsWrapper: {
    paddingVertical: heightPercentageToDP(2),
    marginTop: heightPercentageToDP(1),
  },
  points: {
    fontSize: fontsSize.sm2,
    fontFamily: fontsFamily.regular,
    color: colors.textLight,
    marginBottom: heightPercentageToDP(1),
    opacity: 0.7,
  },
});
