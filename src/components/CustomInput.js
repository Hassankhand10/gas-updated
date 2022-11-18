import React from 'react';
import { View , Text ,TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setvalue , placeholder}) => {
    return(
        <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={setvalue} 
            placeholder={placeholder} 
            style = {styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 4,
        borderRadius: 6,

        paddingHorizontal: 10,
        marginVertical: 12,
    },
    input: {},

});

export default CustomInput;