// src/components/Product.js
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import {Mixins, Typography, Colors, AppStyles} from '_styles';
import {Line} from '_molecules';

let {margin, boxShadow, scaleSize, padding, windowHeight, windowWidth} = Mixins;
import {Text, Card, SmallIcon} from '_atoms';
import {Images, Methods} from '_utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const RowLabel = ({item = {}}) => (
  <View
    style={[
      AppStyles.rowSpaceBetween,
      {
        paddingBottom: moderateScale(16),
      },
    ]}>
    <Text h6 style={{color: 'white', fontSize: Typography.normalize(20)}}>
      Time
    </Text>
    <Text
      h6
      style={{
        alignSelf: 'center',
        color: Colors.yellow,
        fontSize: Typography.normalize(20),
      }}>
      Temp
    </Text>
    <Text h6 style={{color: Colors.green, fontSize: Typography.normalize(20)}}>
      Air
    </Text>
    <Text h6 style={{color: '#2B80C1', fontSize: Typography.normalize(20)}}>
      Humidity
    </Text>
  </View>
);
export default RowLabel