import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';

// local import
import Input from '../../components/Inputs/Input';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import {fontsFamily, fontsSize} from '../../constants/fonts';
import colors from '../../constants/colors';
import apiRequest from '../../utils/apiRequest';
import endPoints from '../../constants/endPoints';
import {useDispatch, useSelector} from 'react-redux';
import {setLoader} from '../../redux/globalSlice';
import {setUser} from '../../redux/userSlice';
import languages from '../../lang/languages';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const selectedLang = useSelector(state => state.language.selectedLang);

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('This email address is not valid')
      .required('Please enter your email address!')
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'This email address is not valid',
      ),
    password: Yup.string()
      .required('Password is required')
      .min(3, 'Password must be 6 character long'),
  });

  const signIn = async value => {
    navigation.reset({
      index: 0,
      routes: [{name: 'HomeStack'}],
    });
    // dispatch(setLoader(true));
    // const fcmToken = await AsyncStorage.getItem('fcmToken');
    // let payload = {
    //   email: value.email,
    //   password: value.password,
    //   deviceToken: fcmToken ? fcmToken : '1234567890',
    //   deviceType: Platform.OS,
    // };
    // apiRequest
    //   .post(endPoints.login, payload)
    //   .then(res => {
    //     console.log('response login ----> ', res.data);
    //     dispatch(setLoader(false));
    //     dispatch(setUser(res.data.data));
    //     navigation.reset({
    //       index: 0,
    //       routes: [{name: 'HomeStack'}],
    //     });
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
          justifyContent: 'center',
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
          <View style={styles.wrapper}>
            <Text style={styles.heading}>{languages[selectedLang].signIn}</Text>
            <Formik
              initialValues={{
                email: 'xyz123@yopmail.com',
                password: '123',
              }}
              onSubmit={value => {
                signIn(value);
              }}
              validationSchema={SignInSchema}>
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
                  <Text style={styles.titleStyle}>
                    {
                      languages[selectedLang]
                        .pleaseEnterYourEmailAddressandPassword
                    }
                  </Text>
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
                  <PrimaryButton
                    disabled={!isValid}
                    text={languages[selectedLang].signIn}
                    onPress={handleSubmit}
                    style={{marginTop: heightPercentageToDP(5)}}
                  />
                  <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.text2}>
                      {languages[selectedLang].createaAccount}
                    </Text>
                  </Pressable>
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: fontsSize.xl2,
    fontFamily: fontsFamily.bold,
    color: colors.textDark,
  },
  wrapper: {
    width: '90%',
    alignSelf: 'center',
  },
  titleStyle: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: fontsSize.md1,
    fontFamily: fontsFamily.regular,
    color: colors.textDark,
    marginTop: heightPercentageToDP(2),
  },
  text2: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: fontsSize.md1,
    fontFamily: fontsFamily.regular,
    marginTop: heightPercentageToDP(2),
    color: colors.secondary,
    textDecorationLine: 'underline',
  },
});
