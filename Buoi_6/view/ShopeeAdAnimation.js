import React, { useRef, useEffect } from 'react';
import { View, Text, Image, Animated, Easing, StyleSheet } from 'react-native';

const ShopeeAdAnimation = () => {
  const shipperTranslateX = useRef(new Animated.Value(-100)).current;
  const textScale = useRef(new Animated.Value(1)).current;
  const textColor = useRef(new Animated.Value(0)).current;
  const productScale = useRef(new Animated.Value(0.7)).current;

  useEffect(() => {
    const animateShipper = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shipperTranslateX, {
            toValue: 400,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(shipperTranslateX, {
            toValue: -100,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
    

    const animateText = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(textScale, {
            toValue: 1.2,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(textColor, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(textScale, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(textColor, {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    const animateProducts = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(productScale, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(productScale, {
            toValue: 0.7,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateShipper();
    animateText();
    animateProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.road}>
     
       <View>
    
        <View>
        <Animated.Image
          source={require('../assets/road.jpg')}
          style={styles.roadImage}
          
        />
        
        </View>
       
       <Animated.View
          style={[
            styles.shipper,
            { transform: [{ translateX: shipperTranslateX }] },
          ]}
        >
           <Animated.Image
          source={require('../assets/ConAn.png')}
          style={styles.roadImage1}
          
        />
        <Animated.Image source={require('../assets/shipper.png')}
            style={styles.shipperImage} />
      
          
        </Animated.View>
       
       </View>
       
        
      </View>
      <Animated.Text
        style={[
          styles.text,
          { transform: [{ scale: textScale }], color: textColor.interpolate({
            inputRange: [0, 1],
            outputRange: ['black', 'red'],
          }) },
        ]}
      >
        Shopee cái gì cũng có...
      </Animated.Text>
      <View style={styles.productsContainer}>
        <Animated.Image
          source={require('../assets/mitom.png')}
          style={[styles.productImage, { transform: [{ scale: productScale }] }]}
        />
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  road: {
    position: 'relative',
  },
  roadImage: {
    width: 600,
    height: 150,
    marginTop:100,
  },
  roadImage1: {
    width: 250,
    height: 150,
    marginRight:100
    
  },
  shipper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 40,
  },

  shipperImage: {
    width: 300,
    height: 200,
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
});

export default ShopeeAdAnimation;
