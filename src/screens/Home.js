import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import Weight from 'react-native-vector-icons/FontAwesome5'
import Battery from 'react-native-vector-icons/Entypo'
import Cylinder from 'react-native-vector-icons/MaterialCommunityIcons'
import SelectList from 'react-native-dropdown-select-list'
import { Dimensions } from "react-native";

const Home = (props) => {
  
  const [selected, setSelected] = React.useState("");

  
  const data = [{key:'1',value:'RMX-00001'},
  {key:'2',value:'RMX-00002'},
  {key:'3',value:'RMX-00003'},
  {key:'4',value:'RMX-00004'},
  {key:'5',value:'RMX-00005'}];



  const { width, height } = Dimensions.get("window");
  return (
    <View style={{
      height: height,
        width: width,
    }}>
    <View style={{
      backgroundColor: "#FFF",
      flex: 1,
    }}>
      <View style={{
        backgroundColor: "orange",
        height: "45%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20
      }}>
        <View style={{ width: "50%", alignItems: 'flex-start', marginTop: '20%' }}>
        <TouchableOpacity
        onPress={() => props.navigation.navigate('Profile')} 
        >
          <Icons
            name='face-man-profile' size={30} color='white'
          />
        </TouchableOpacity>
        </View>
        <View style={{ width: "100%", alignItems: 'flex-end', marginTop: -28 }}>
        <TouchableOpacity
         onPress={() => props.navigation.navigate('Notifications')}
         >
          <Icon
            name='notifications' size={30} color='white'
          />
        </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          marginTop: '20%',
          width: "100%",
        }}>
          <View style={{ width: "100%" }}>
            <Text style={{
              fontSize: 28,
              color: "#FFF",
              fontWeight: "bold",
              //marginTop: 80,
            }}>{props.route.params.id.Device_no}</Text>

          </View>
        </View>

        <View style={{ marginTop: '10%' }}>
        <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
        </View>

        <View style={{
          alignItems:'center',
          marginTop:'10%',
        }}>
        <View style={{
          height: 130,
          flexDirection: "row",
          marginTop: 50,
          marginLeft: -3,
          marginRight: 0,
          marginTop:40
        }}>
          <View style={{
            width: 150,
            height: 135,
            backgroundColor: "#E6E6E6"
          }}>
            <Weight style={{marginTop:50,
              marginLeft:10}}
            name='weight' size={40} color='orange'
          />
          <Text style={{
            fontSize:26,
            color:'orange',
            fontWeight:'bold',
            marginLeft:70,
            marginTop:-40
          }}>
            {props.route.params.id.weight} KG
          </Text>
          </View>
          <View style={{
            width: 150,
            height: 135,
            backgroundColor: "#E6E6E6",
            marginLeft: 24
          }}>
            <Battery style={{marginTop:50,
              marginLeft:10}}
            name='battery' size={40} color='orange'
          />
          <Text style={{
            fontSize:26,
            color:'orange',
            fontWeight:'bold',
            marginLeft:70,
            marginTop:-40
          }}>
            {props.route.params.id.battery}%
          </Text>
          </View>
        </View>
        <View style={{
          width: 325,
          height: 120,
          backgroundColor: "#E6E6E6",
          marginTop: 34,
          marginLeft: -3
        }}>
          <Cylinder style={{marginTop:30,
              marginLeft:10}}
            name='gas-cylinder' size={60} color='orange'
          />
          <Text style={{
            fontSize:26,
            color:'orange',
            fontWeight:'bold',
            marginLeft:70,
            marginTop:-45
          }}>
            {props.route.params.id.status} Status
          </Text>
        </View>
      </View>
    </View>
    </View>
    </View>

  );
}

export default Home