import React from 'react';
import { View } from 'react-native';
import BubbleEffect from './view/BubbleEffect';
import ShopeeAdAnimation from './view/ShopeeAdAnimation'; 
const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BubbleEffect />
      <ShopeeAdAnimation />
    </View>
  );
};

export default App;
