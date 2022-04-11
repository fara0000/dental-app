import React from 'react';
import {
    ScrollView,
    SafeAreaView,
    Text,
    View
} from 'react-native';

import styled from "styled-components";

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <MainWrapper>
          <InputField placeholder="Event's Name" />
          <Text>Alooo</Text>
      </MainWrapper>
      // <Stack.Navigator initialRouteName="login">
      //     <Stack.Screen name="login" component={LoginScreen} options={{
      //         title: 'Login',
      //     }}/>
      // </Stack.Navigator>
  );
};

const MainWrapper = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
`;

const InputField = styled.TextInput`
    align-items: center;
    width: 80%;
    color: blue;
    border-width: 1.5px;
    border-radius: 5px;
    border-color: green;
`;

export default App;
