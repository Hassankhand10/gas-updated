import { View, Text, StyleSheet, FlatList, data } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from "react-native";

const Notifications = () => {
const [notification,setNotification]=useState([
    {name: 'Talha', id: '1'},
    {name: 'Talha', id: '2'},
    {name: 'Talha', id: '3'},
    {name: 'Talha', id: '4'},
    {name: 'Talha', id: '5'},
    {name: 'Talha', id: '6'},
    {name: 'Talha', id: '7'},
    {name: 'Talha', id: '8'},
]);

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
            height: "23%",
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
                    }}>Notifications</Text>

                </View>
            </View>
            </View>
            <FlatList
            keyExtractor={(item) => item.id}
            data={notification}
            renderItem={({item}) => (
                <Text style={{
                    marginTop:20,
                    padding:40,
                    backgroundColor:'lightgray',
                    fontSize:20
                }}>{item.name}</Text>
            )}
            />
</View>
            </View>
  )
}

export default Notifications