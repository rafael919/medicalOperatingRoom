import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {Text} from '_atoms';
import {Images} from '_utils';
import {Mixins, Typography, Colors, AppStyles} from '_styles';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
let {margin, boxShadow, scaleSize, windowHeight} = Mixins;

const Header = props => {
  const navigation = useNavigation();
  const {
    textColor,
    alignSelf,
    rightImage,
    rightText,
    leftText,
    image,
    rightStyle,
    onPressRight,
    style,
    onPressLeft,
  } = props;
  return (
    <View
      style={[
        boxShadow('trasparent', {}, 0),
        styles.container,
        ,
        style && style,
        {
          paddingHorizontal: moderateScale(16),
        },
      ]}>
      {/************* leftText or Left Icon ***************/}
      {(leftText || image) && (
        <TouchableOpacity
          onPress={() => (onPressLeft ? onPressLeft() : navigation.goBack())}
          style={{
            flex: 0.1,
            alignSelf: alignSelf ? 'center' : 'center',
          }}>
          <Image source={image ? image : Images.back} />
        </TouchableOpacity>
      )}

      {/*************  Title  ***************/}
      <View style={{alignSelf: 'center', flex: 1}}>
        <Text
          h6
          style={[
            {
              fontSize: Typography.normalize(22),
              color: textColor ? textColor : Colors.white,
              ...props.textStyle,
            },
          ]}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};
const styles = {
  container: {
    backgroundColor: 'white',
    height: moderateScale(52),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    color: 'red',
    height: 18,
    width: 18,
    borderRadius: 18 / 2,
    backgroundColor: 'red',
    zIndex: 100,
    right: -10,
    bottom: 16,
  },
};
export default Header;
