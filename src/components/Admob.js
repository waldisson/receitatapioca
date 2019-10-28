import React, {useState} from 'react';
import {AdMobBanner} from 'react-native-admob';
import {View} from 'react-native';

export default props => {
  return (
    <View style={{}}>
      <AdMobBanner
        adSize="banner"
        adUnitID="ca-app-pub-5749178758370185/8033347586"
      />
    </View>
  );
};
