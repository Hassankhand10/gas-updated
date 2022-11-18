import { View, Text } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'
import { Dimensions } from "react-native";

const ChangePassword = () => {
    const { width, height } = Dimensions.get("window");

    const [ oldpass, setOldpass] = useState('');
    const [ newpass, setNewpass] = useState('');
    const [ confirmpass, setConfirmPass] = useState('');

    const onChangePasswordPressed = () => {
        console.log('Password Changed Successfully');
    };

  return (
    <View style={{
        height: height,
        width: width,
    }}>
    <View style={{
        backgroundColor: "#FFF",
        flex: 1
    }}>
        <View style={{
            backgroundColor: "orange",
            height: "23%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
            //toFixed
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop:25,
                width: "100%"
            }}>
                <View style={{ width: "100%" }}>
                    <Text style={{
                        fontSize: 28,
                        color: "#FFF",
                        fontWeight: "bold",
                        marginTop: 80,
                    }}>Change Password</Text>

                </View>
            </View>
            <View style={{alignItems: 'center',
        padding: 20, marginTop:30}}>
            <CustomInput
       placeholder="Enter Your Old Password" 
       value={oldpass} 
       setvalue={setOldpass}
       />
       <CustomInput
       placeholder="Enter Your New Password" 
       value={newpass} 
       setvalue={setNewpass}
       />
       <CustomInput
       placeholder="Confirm Your Password" 
       value={confirmpass} 
       setvalue={setConfirmPass}
       />
       <CustomButton 
    text="Change Password" 
    onPress = {onChangePasswordPressed}   
    bgColor='orange'
    fgColor='black' 
    />
    </View>
            </View>
            </View>
            </View>
  )
}

export default ChangePassword