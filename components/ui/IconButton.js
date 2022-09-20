import {Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';

function IconButton({icon, color, size, onPress}) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Image
        source={icon}
        style={{height: size, width: size, tintColor: color}}
      />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
