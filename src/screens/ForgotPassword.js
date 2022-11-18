import { View, Text } from 'react-native'
import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'
import { Dimensions } from "react-native";

const ForgotPassword = (props) => {

    const [ email, setEmail] = useState('');

    const onVerifyPressed = () => {
        console.log('Verified! Check Your Email');
    };

    const { width, height } = Dimensions.get("window");

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
                height: "20%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    //marginTop:25,
                    width: "100%"
                }}>
                    <View style={{ width: "100%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold",
                            marginTop: 80,
                        }}>Forgot Password</Text>
    
                    </View>
                </View>
                <View style={{alignItems: 'center',
            padding: 20, marginTop:30}}>
                <CustomInput
           placeholder="Enter Your Email" 
           value={email} 
           setvalue={setEmail}
           />
           <CustomButton 
        text="Verify" 
        onPress = {onVerifyPressed}   
        bgColor='orange'
        fgColor='black' 
        />
        </View>
                </View>
                </View>
                </View>
      )
    }

export default ForgotPassword