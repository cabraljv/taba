import styled from 'styled-components';
import { Animated } from 'react-native';

export const Container = styled.View`
  align-items: center;
  position: absolute;

  bottom: 30px;
  left: 30px;
`;

export const AnimatedView = styled(Animated.View)`
  position: absolute;

  transform: translateY(25px);

  width: 46px;
  height: 46px;
  border-radius: 23px;

  background-color: #fff;

  align-items: center;
  justify-content: center;
`;

export const Menu = styled(Animated.View)`
  width: 60px;
  height: 60px;
  border-radius: 30px;

  background-color: #fff;

  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 58px;
  height: 58px;

  border-radius: 29px;
`;
