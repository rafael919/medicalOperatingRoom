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

const List = ({item = {}}) => (
  <View style={{paddingVertical: 8}}>
    <View style={[AppStyles.rowSpaceBetween]}>
      <View style={styles.row1}>
        <Text h6 style={styles.text}>
          {item.time}
        </Text>
      </View>
      <View style={styles.row2}>
        <Text
          h6
          style={[
            styles.text,
            {
              color: Colors.yellow,
            },
          ]}>
          {item.temp}
        </Text>
      </View>

      <View style={styles.row3}>
        <Text
          h6
          style={[
            styles.text,
            {
              color: Colors.green,
            },
          ]}>
          {item.speed}
        </Text>
      </View>

      <View style={styles.row4}>
        <Text
          h6
          style={[
            styles.text,
            {
              color: '#2B80C1',
            },
          ]}>
          {item.humidity}
        </Text>
      </View>
    </View>
    <View style={{marginTop: moderateScale(8)}} />
    <Line lineColor={'#14476E'} />
  </View>
);
export default List;
const styles = StyleSheet.create({
  row1: {
    flex: 0.25,
    alignItems: 'flex-start',
  },
  row2: {flex: 0.15, alignItems: 'center'},
  row3: {flex: 0.3, alignItems: 'flex-end'},
  row4: {flex: 0.25, alignItems: 'flex-end'},
  text: {
    color: 'white',
    fontSize: Typography.normalize(20),
  },
});
