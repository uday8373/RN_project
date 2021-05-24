import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

export default function Input({value, setValue, label, keyboard, placeholder, disabled, maxLength, address}) {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={(text) => setValue(text)}
          style={styles.input}
          keyboardType={keyboard ? keyboard : 'default'}
          placeholder={placeholder}
          maxLength={maxLength ? maxLength : null}
          multiline={address === 'true' ? true : false}
          numberOfLines={address === 'true' ? 3 : null}
          editable={!disabled}
        /> 
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  inputContainer: {
    // marginHorizontal: width * 0.06
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 18,
    marginBottom: 5
  }
})