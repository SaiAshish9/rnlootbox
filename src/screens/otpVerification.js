import React from 'react';

import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Input from '../components/input';

const {height, width} = Dimensions.get('window');

const Otp = ({navigation}) => (
  <LinearGradient
    colors={['#2A2D39', '#261D2A']}
    style={{
      width: width,
      minHeight: height,
      overflowX: 'hidden',

      // justifyContent:'center'
    }}>
    <ImageBackground
      style={{
        height: height,
        width: width,
        overflowX: 'hidden',
        padding: width * 0.1,
      }}
      source={require('../assets/dottedBackground.png')}>
      <View
        style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <Image
            style={{width: 48}}
            resizeMode="contain"
            source={require('../assets/back.png')}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontStyle: 'italic',
            fontSize: 12,
            color: '#ECDBFA',
            marginLeft: 10,
          }}>
          VERIFY OTP
        </Text>
      </View>
      <Text
        style={{
          fontSize: 24,
          color: '#ECDBFA',
          lineHeight: 28,
        }}>
        Verify OTP sent to your mobile number
      </Text>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        {[...Array(4).keys()].map((i, k) => (
          <Input
            key={k}
            tel
            otp
            inpStyle={{
              width: width * 0.15,
            }}
            style={{
              width: width * 0.15,
              height: height * 0.09,
              textAlign: 'center',
              //   marginRight: 20,
              //   paddingTop: 6,
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        ))}
      </View>
      <Text
        style={{
          marginTop: 20,
          color: '#ECDBFA',
          fontSize: 12,
        }}>
        01:00
      </Text>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#C01C8A', '#865CF4']}
        style={{
          height: height * 0.09,
          borderRadius: 10,
          //   alignSelf: 'flex-end',
          position: 'absolute',
          left: 0.125 * width,
          bottom: height * 0.09,
          marginTop: 25,
          elevation: 100,
          width: width * 0.75,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('slider');
          }}
          style={{
            width: '100%',
            height: height * 0.09,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: 0.5,
              fontStyle: 'italic',
            }}>
            VERIFY
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  </LinearGradient>
);

export default Otp;