import React, {useState, useRef, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Text, Button, Header} from '_atoms';
import {Line} from '_molecules';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {WSService, Methods} from '_utils';
import {Typography, Colors, Mixins, AppStyles} from '_styles';
let {boxShadow, padding} = Mixins;
// Component
import {ratingsData} from '../templates/dummyData'
import {List,RowLabel} from '../templates'

const Dashboard = ({navigation}) => {

  const [ratings, setRatings] = useState(ratingsData);
  useEffect(() => {
    _listneTemprature();
    return () => {
      WSService.removeListener('data');
    };
  }, []);

  /********************** Socket Listner **********************/
  const _listneTemprature = () => {
    if (!WSService) {
      return;
    }
    WSService.on('data', data => {
      // listing reading when data event listen
      if (data) {
        setState([...ratings,...data]);
      }
    });
  };

  /****************************** Render Main  *************************************/
  return (
    <View style={[{flex: 1, backgroundColor: Colors.primary1}]}>
      <Header
        onPressLeft={() => navigation.goBack()}
        style={[
          boxShadow('trasparent', {}, 0),
          {
            backgroundColor: Colors.primary2,
          },
        ]}
        title={'Dashboard'}
        textStyle={{textAlign: 'center'}}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          backgroundColor: Colors.primary,
          paddingTop: scale(12),
        }}>
       <RowLabel />
        <FlatList
          data={ratings}
          renderItem={({item,index}) => <List item={item} index={index}/>
          }
        />
      </View>
    </View>
  );
};

export default Dashboard;
