import React, { useCallback } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { Container } from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign';

import { AnimatedView, Avatar, Menu } from './styles'

const ActionMenu = ({ avatar }) => {
  let open = false;
  const animation = new Animated.Value(0);

  const toggleMenu = useCallback(() => {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    open = !open
  }, []);

  const showItem = (index) => (
    {
      transform: [
        {
          scale: animation
        },
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, index*-55],
          }),
        },
      ],
    }
  );

  const rotateItem = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '-10deg'],
        })
      },
    ],
  };

  return (
    <Container>
      <TouchableWithoutFeedback>
        <AnimatedView style={showItem(2)}>
          <AntDesign name="home" size={24} />
        </AnimatedView>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <AnimatedView style={showItem(1)}>
          <AntDesign name="shoppingcart" size={24} />
        </AnimatedView>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Menu style={rotateItem}>
          <Avatar source={avatar} />
        </Menu>
      </TouchableWithoutFeedback>
    </Container>
  )
};

export default ActionMenu;
