import * as React from 'react';
import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


import Register from './screens/Register';
import Home from './screens/Home';
import NatCard from './screens/NatCard';
import GetNatCard from './screens/getNatCard';
import GetZodiac from './screens/getZodiac';
import Settings from './screens/Settings';
import { AuthContext } from './context/context';
import DataNatCard from './screens/DataNatCard';
import Zodiac from './screens/Zodiac';
import DataZodiac from './screens/DataZodiac';
import Taro from './screens/Taro';
export const Splash = () => (
    <View>
      <Text>Loading...</Text>
    </View>
    
  
);
const AuthStack = createStackNavigator();
const AuthStackScreen = ({userToken2}) => {
  console.log("2", userToken2)
  return (
  <AuthStack.Navigator screenOptions={{
    headerStyle: {
    },
    headerShown: false,}}>

    <AuthStack.Screen
      name="Register"
      component={Register}
      options = {{title:'', headerShadowVisible: false}}
    />
  </AuthStack.Navigator>
);
  };

const NatCardStack = createStackNavigator();
const NatCardStackScreen = () => (
  <NatCardStack.Navigator 
  screenOptions={{
    headerStyle: {
    },
    headerShown: false,
  }}>
    <NatCardStack.Screen name="NatData" component={NatCard} options={{
           headerShadowVisible: false}}/>
    <NatCardStack.Screen name="DataNatCard" component={DataNatCard} options={{
          headerShadowVisible: false}}/>
    <NatCardStack.Screen name="OtherData" component={GetNatCard} options={{
           headerShadowVisible: false}}/>
    <NatCardStack.Screen name="OtherData2" component={DataNatCard} options={{
          headerShadowVisible: false}}s/>
  </NatCardStack.Navigator>
);


const ZodiacStack = createStackNavigator();
const ZodiacStackScreen = ({userData}) => (
  <ZodiacStack.Navigator 
  screenOptions={{
    headerStyle: {
    },
    headerShown: false,
  }}>
    <ZodiacStack.Screen name="Zodiac1" component={Zodiac} initialParams={{userData:userData}} options={{
           headerShadowVisible: false}}/>
    <ZodiacStack.Screen name="DataZodiac" component={DataZodiac} options={{
          headerShadowVisible: false}}/>
    <ZodiacStack.Screen name="OtherZodiackData" component={GetZodiac} options={{
           headerShadowVisible: false}}/>
    <ZodiacStack.Screen name="OtherZodiackData2" component={DataZodiac} options={{
          headerShadowVisible: false}}s/>
  </ZodiacStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = ({ infUser }) => {
  console.log("1", infUser);
  return (
  
  
  <Tabs.Navigator 
  initialRouteName="Home"
   
      screenOptions={{
        
        tabBarActiveTintColor: '#282E64',
        tabBarInactiveTintColor: '#BDC1E5',
        headerShown: false,

        
      }}>
    <Tabs.Screen name="Home" children={() => <Home userData={infUser} />} 
      options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    }} />
    <Tabs.Screen name="NatCard" children={() => <NatCardStackScreen userData={infUser} /> }
    options={{
      tabBarLabel: 'NatCard',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="star" color={color} size={size} />
      ),
    }}/>
    <Tabs.Screen name="Zodiac" children={() => <ZodiacStackScreen userData={infUser} /> }  
    options={{
      tabBarLabel: 'Zodiac',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="dice-d12" color={color} size={size} />
      ),
    }}/>
    <Tabs.Screen name="Taro"  children={() => <Taro userData={infUser} /> }  
    options={{
      tabBarLabel: 'Taro',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="cards-playing" color={color} size={size} />
      ),
    }}/>
      <Tabs.Screen name="Settings" children={() => <Settings userData={infUser} /> } 
    options={{
      tabBarLabel: 'Settings',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="person" color={color} size={size} />
      ),
    }}/>
  </Tabs.Navigator>
);
  };

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => {
  
  console.log(userToken)
  return (
  <RootStack.Navigator  screenOptions={{
    headerStyle: {
    },
    headerShown: false,
  }}>
    {userToken.a ? (
      <RootStack.Screen 
        name="App"
        children={() => <TabsScreen infUser={userToken.allInf} />} 
        
        options={{
          animationEnabled: false, headerShadowVisible: false
        }}
      />
    ) : (
      <RootStack.Screen 
        name="Auth"
        component={AuthStackScreen}
        options={{title:'',
          animationEnabled: false, headerShadowVisible: false
        }}
      />
    )}
  </RootStack.Navigator>
);
      };
export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [userInfAll, setuserInfAll] = React.useState(null);
  const authContext = React.useMemo(() => {
    return {
     
      signUp: (userInf) => {
        setIsLoading(false);
        setUserToken("asdf");
        setuserInfAll(userInf)
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <RootStackScreen userToken={{a: userToken, allInf:userInfAll}} />
    </NavigationContainer>
    </AuthContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
