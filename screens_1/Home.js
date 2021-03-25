import React from 'react';
import {View, Button, Text} from 'react-native'

const Home = ({navigation}) =>{
    return(
        <View>

            <Text>Home View</Text>
            <Button onPress={() => navigation.navigate('Details')} title = 'Next Screen'></Button>

        </View>
    )
}

export default Home