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

let {margin, boxShadow, scaleSize, padding, windowHeight, windowWidth} = Mixins;
import {Text, Card, SmallIcon} from '_atoms';
import {Images, Methods} from '_utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const {capitalize} = Methods;

const ListItem = ({
  item = {},
  onPress,
  customeStyle,
  isShowFavourite = false,
  onPressSelect,
  isTrainer = false,
}) => (
  <Card cardStyle={[styles.cardStyle]}>
  
  </Card>
);
export default ListItem;

const styles = StyleSheet.create({
  cardStyle: {
    ...padding(0),
    ...margin(8, 16, 8, 16),
    ...boxShadow('black', {height: 1, width: 1}, 1, 0.1),
    borderRadius: 16,
    backgroundColor:'white'
  },
  profileText: {
    color: Colors.black,
    fontSize: Typography.normalize(14),
  },
  aratingText: {
    color: Colors.black,
    alignSelf: 'center',
    paddingTop: moderateScale(8),
    fontSize: Typography.normalize(14),
  },
  imageAbsolute: {position: 'absolute', right: 0, bottom: 0},
  profileStyle: {height: scale(72), width: scale(72)},
  imageStyle: {height: moderateScale(12), width: moderateScale(12)},
  deleteImageStyle: {
    borderRadius: moderateScale(28) / 2,
    height: moderateScale(28),
    width: moderateScale(28),
  },
  ratingImageStyle: {
    height: moderateScale(18),
    width: moderateScale(18),
  },
  leftSection: {
    flex: 0.8,
    paddingLeft: 4,
    justifyContent: 'flex-start',
  },
  rightStatus: {
    flex: 0.2,
    paddingVertical: moderateScale(4),
  },
});
