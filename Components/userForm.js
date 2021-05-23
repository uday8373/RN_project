import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Switch, Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from './Input'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';



const { width, height } = Dimensions.get('window')

export default function UserForm() {

  // const navigation = useNavigation()

  // const goToProfile = () => {
  //   navigation.navigate('Profile')
  // }


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('Male')
  const [dob, setDob] = useState(new Date())
  const [show, setShow] = useState(false);
  const [acceptTerm, setTerms] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false)
    if (selectedDate) {
      setDob(selectedDate)
    }
  }



  // const onDateFocus = () => {
  //   setShow(true)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Signup</Text>
      <View style={styles.row}>
        <View style={{ width: '45%' }}>
          <Input
            label="First name"
            value={firstName}
            setValue={setFirstName}
            placeholder="Enter firstname"
          />
        </View>
        <View style={{ width: '45%' }}>
          <Input
            label="Last name"
            value={lastName}
            setValue={setLastName}
            placeholder="Enter lastname"
          />
        </View>
      </View>
      <Input
        label="Email"
        value={email}
        setValue={setEmail}
        placeholder="Enter email address"
      />
      {show && (
        <DateTimePicker
          testID="12314"
          value={dob}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <View>
        <Input
          label="Date of birth"
          value={dob?.toDateString()}
          setValue={onChange}
          placeholder="Enter your date of birth"
          disabled={true}
        />
        <Icon onPress={() => setShow(true)} style={styles.datePickerIcon} name="calendar" size={25} color="gray" />
      </View>
      <Input
        label="Age"
        value={age}
        setValue={setAge}
        keyboard="numeric"
        placeholder="Enter your age"
        maxLength={2}
      />
      <Input
        label="Address"
        value={address}
        setValue={setAddress}
        placeholder="Enter address"
        address={"true"}
      />

      <View style={styles.row}>
        <Text>Accept terms & condition</Text>
        <Switch value={acceptTerm} onChange={() => setTerms(!acceptTerm)} />
      </View>

      {/* <View style={{marginTop: width * 0.04}}>
        <Button title="Go to Profile" onPress={goToProfile} />
        </View> */}

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.06,
    // alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datePickerIcon: {
    position: 'absolute',
    right: '5%',
    top: '45%'
  },
  headText: {
    fontSize: 22,
    fontWeight: '500',
    marginVertical: width * 0.04,
    textDecorationLine: 'underline'
  }
})