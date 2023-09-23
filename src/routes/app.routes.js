import Home from "../pages/Home/Home";
import Dash from "../pages/Dash/Dash";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Platform } from 'react-native';

import HomeIcon from "../assets/HomeIcon.svg";
import UserIcon from "../assets/UserIcon.svg";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => {
                        return <HomeIcon width="35" height="35" />
                    },
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