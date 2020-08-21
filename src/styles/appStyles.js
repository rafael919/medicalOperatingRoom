// App styles
import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Typography, Colors, Mixins} from '_styles';
let {boxShadow, windowWidth, padding, windowHeight} = Mixins;

let {FONT_REGULAR, FONT_BOLD, FONT_MEDIUM} = Typography;

export default AppStyles = StyleSheet.create({
  text: {
    ...FONT_REGULAR,
    color: Colors.textColor,
  },
  bold: {
    ...FONT_BOLD,
    color: Colors.textColor,
  },
  medium: {
    ...FONT_MEDIUM,
    color: Colors.textColor,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  col: {
    flex: 1,
    marginTop: 8,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blurColor: {color: 'rgba(0,0,0,0.44)', fontSize: Typography.normalize(13)},
  row: {
    flexDirection: 'row',
  },
});
