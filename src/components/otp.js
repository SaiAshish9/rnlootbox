import React, {useRef, useState} from 'react';
import {TextInput, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const GradientWrapper = ({children}) => (
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={['rgba(255,255,255,0.069)', 'rgba(255,255,255,0.003) ']}
    style={[
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: width * 0.15,
        height: height * 0.09,
        textAlign: 'center',
      },
    ]}>
    {children}
  </LinearGradient>
);

const Otp = ({otp, setOtp}) => {
  const pin1ref = useRef();
  const pin2ref = useRef();
  const pin3ref = useRef();
  const pin4ref = useRef();
  const pins = [pin1ref, pin2ref, pin3ref, pin4ref];
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const x = [a, b, c, d];
  // const navigation = useNavigation();
  const [direction, setDirection] = useState('forward');

  return (
    <>
      <GradientWrapper>
        <TextInput
          placeholderTextColor="#ECDBFA"
          autoCompleteType={'off'}
          returnKeyType="next"
          ref={pin1ref}
          maxLength={1}
          onChangeText={(value) => {
            setA(value);
            if (value.length === 1 && b.length === 0) {
              pin2ref.current.focus();
            }
          }}
          autoCapitalize="none"
          blurOnSubmit={true}
          autoCorrect={false}
          keyboardType="phone-pad"
          style={styles.inp}
        />
      </GradientWrapper>
      <GradientWrapper>
        <TextInput
          placeholderTextColor="#ECDBFA"
          autoCompleteType={'off'}
          returnKeyType="next"
          ref={pin2ref}
          onChangeText={(value) => {
            setB(value);
            if (value.length === 1 && c.length === 0) pin3ref.current.focus();
            if (value.length === 0 && a.length === 1) pin1ref.current.focus();
          }}
          maxLength={1}
          autoCapitalize="none"
          blurOnSubmit={true}
          autoCorrect={false}
          keyboardType="phone-pad"
          style={styles.inp}
        />
      </GradientWrapper>
      <GradientWrapper>
        <TextInput
          placeholderTextColor="#ECDBFA"
          autoCompleteType={'off'}
          returnKeyType="next"
          ref={pin3ref}
          onChangeText={(value) => {
            setC(value);
            if (value.length === 1 && d.length === 0 && direction === 'forward')
              pin4ref.current.focus();
            if (value.length === 0 && b.length === 1) {
              pin2ref.current.focus();
              setDirection('forward');
            }
          }}
          maxLength={1}
          autoCapitalize="none"
          blurOnSubmit={true}
          returnKeyType="next"
          autoCorrect={false}
          keyboardType="phone-pad"
          style={styles.inp}
        />
      </GradientWrapper>
      <GradientWrapper>
        <TextInput
          placeholderTextColor="#ECDBFA"
          autoCompleteType={'off'}
          maxLength={1}
          ref={pin4ref}
          autoCapitalize="none"
          blurOnSubmit={true}
          autoCorrect={false}
          keyboardType="phone-pad"
          onChangeText={(value) => {
            if (
              value.length === 0 &&
              c.length > 0 &&
              b.length > 0 &&
              a.length > 0
            ) {
              pin3ref.current.focus();
              setDirection('backward');
            }
          }}
          onSubmitEditing={() => {
            setOtp(+`${a}${b}${c}${d}`);
            // navigation.replace('slider');
          }}
          style={styles.inp}
        />
      </GradientWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  inp: {
    paddingLeft: 20,
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    width: '100%',
    color: '#ECDBFA',
  },
});

export default Otp;
