import Home from "../views/Home/Home";
import Dash from "../views/Dash/Dash";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { View, Text, StyleSheet, Platform } from 'react-native'

import SvgUri from "react-native-svg-uri"; // Importe o componente SvgUri 

import HomeIcon from "../../assets/HomeIcon.svg"
import UserIcon from "../../assets/UserIcon.svg"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const icons = {
    Home: {
        svg: require("../../assets/HomeIcon.svg"), // Substitua pelo caminho do seu SVG
    },
    Dash: {
        svg: require("../../assets/UserIcon.svg"), // Substitua pelo caminho do seu SVG
    }
};



export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: "#fff",
                    },
                }}>
                <Stack.Screen
                    name="home"
                    component={Tabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Dash"
                    component={Tabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    paddingHorizontal: 80,
                    padding: 4,
                    height: Platform.OS === 'ios' ? 95 : 60,
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => {
                        return <HomeIcon width="35" height="35" />
                    }
                }} />
            <Tab.Screen
                name="Dash"
                component={Dash}
                options={{
                    tabBarIcon: () => {
                        return <UserIcon width="35" height="35" />
                    }
                }} />
        </Tab.Navigator>
    )
}