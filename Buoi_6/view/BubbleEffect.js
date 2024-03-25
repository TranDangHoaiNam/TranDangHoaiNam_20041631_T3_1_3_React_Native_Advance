import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Image } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const BubbleEffect = () => {
  const bubbles = useRef([]);

  // Tạo mảng chứa các quả bóng
  const createBubbles = () => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(
        <Animatable.View
          key={i}
          ref={(ref) => (bubbles.current[i] = ref)}
          animation={{
            from: { translateY: 900 , opacity: 1 }, // Bắt đầu từ dưới cùng với opacity = 1
            to: { translateY: 0, opacity: 0 }, // Di chuyển lên trên và mờ dần với opacity = 0
          }}
          easing="ease-out"
          duration={3000}
          iterationCount="infinite"
          delay={i * 1500} // Độ trễ giữa các bóng
          style={styles.bubbleContainer}
        >
          <Image
            source={{ uri:'../assets/bongbong.png' }} 
            style={styles.bubble}
          />
        </Animatable.View>
      );
    }
    return items;
  };

  // Tự động xóa bóng khi component unmount
  useEffect(() => {
    return () => {
      bubbles.current.forEach((bubble, index) => {
        Animated.parallel([
          Animated.timing(bubble, {
            toValue: 0,
            duration: 5000,
            useNativeDriver: true,
          }),
          bubble.fadeOut(5000),
        ]).start(() => {
          bubble.setNativeProps({ style: { display: 'none' } });
          bubbles.current.splice(index, 1);
        });
      });
    };
  }, []);

  return (
    <View style={styles.container}>
      {createBubbles().map((bubble, index) => (
        <React.Fragment key={index}>
          {React.cloneElement(bubble, {
            onAnimationEnd: () => {
              // Xử lý khi hiệu ứng kết thúc
              bubbles.current.splice(index, 1);
            },
          })}
        </React.Fragment>
      ))}
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

  bubble: {
    width: 200,
    height: 200,
  },
 
});

export default BubbleEffect;
