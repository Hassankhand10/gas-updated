import { View, Text, TextInput, value, setvalue, placeholder } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Icon from 'react-native-vector-icons/Entypo'
import { useState } from 'react';
import { Dimensions } from "react-native";
import AppSettings from './AppSettings';

const Profile = (props) => {
    const onAppSettingPressed = () => {
        props.navigation.navigate(AppSettings)
    };
    const [mobileno, setMobileno] = useState('');

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
                height: "45%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20
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
                            marginTop: '15%',
                        }}>Profile</Text>
                        <View style={{ width: "100%", alignItems: 'flex-start', marginTop: '10%' }}>
                            <Icon
                                name='image-inverted' size={120} color='white'

                            />
                            <View style={{ marginLeft: 120 }}>
                                <Text style={{
                                    fontSize: 20,
                                    color: "#FFF",
                                    fontWeight: "bold",
                                    marginTop: -105,
                                    flexDirection:'row'
                                }}>Muhammad Humayun Khalid
                                </Text>
                                <TextInput
                                    value={mobileno}
                                    onChangeText={setMobileno}
                                    placeholder='Enter Your Mobile No'
                                    style={{
                                        backgroundColor: 'white',
                                        width: 200,
                                        borderColor: '#e8e8e8',
                                        borderWidth: 15,
                                        borderRadius: 20,

                                        paddingHorizontal: 10,
                                        marginVertical: 12,
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                </View>
            </View>
            <View style={{
                alignItems: 'center',
                padding: 20,
                marginTop: 40
            }}>
                <CustomButton
                    text="App Settings"
                    onPress={onAppSettingPressed}
                    bgColor='orange'
                    fgColor='black'
                />
            </View>
        </View>
        </View>
    )
}

export default Profile