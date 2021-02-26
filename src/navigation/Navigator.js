import * as React from 'react';
import { Image, Text, View, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import MeetTeamScreen from '../screens/MeetTeamScreen';
import EventScreen from '../screens/EventScreen';
import CollaborateScreen from '../screens/CollaborateScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Homescreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomeScreen' options={{
                    headerTitleStyle: {
                        alignSelf: 'flex-start',
                        fontWeight: '100',
                        fontFamily: "NeueHaasDisplay-Medium"
                    },

                    headerRight: () => (
                        <View style={{
                            flexDirection: "row", marginRight: 10
                        }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 40, width: 120, resizeMode: 'cover' }}
                                    source={require('../../assets/logos/SAP_logo-03.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTintColor: '#000000',
                    headerTitle: "Home",
                    headerLeft: false,
                    headerStyle: {
                        backgroundColor: '#00b2d2'
                    }
                }} component={HomeScreen} />

        </Stack.Navigator>
    )
}

function Galleryscreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='GalleryScreen' options={{
                    headerTitleStyle: {
                        alignSelf: 'flex-start',
                        fontWeight: '100',
                        fontFamily: "NeueHaasDisplay-Medium"
                    },

                    headerRight: () => (
                        <View style={{
                            flexDirection: "row", marginRight: 10
                        }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 40, width: 120, resizeMode: 'cover' }}
                                    source={require('../../assets/logos/SAP_logo-03.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTintColor: '#000000',
                    headerTitle: "Gallery",
                    headerLeft: false,
                    headerStyle: {
                        backgroundColor: '#00b2d2'
                    }
                }} component={GalleryScreen} />

        </Stack.Navigator>
    )
}
function MeetTeamscreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='MeetTeamScreen' options={{
                    headerTitleStyle: {
                        alignSelf: 'flex-start',
                        fontWeight: '100',
                        fontFamily: "NeueHaasDisplay-Medium"
                    },

                    headerRight: () => (
                        <View style={{
                            flexDirection: "row", marginRight: 10
                        }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 40, width: 120, resizeMode: 'cover' }}
                                    source={require('../../assets/logos/SAP_logo-03.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTintColor: '#000000',
                    headerTitle: "Team",
                    headerLeft: false,
                    headerStyle: {
                        backgroundColor: '#00b2d2'
                    }
                }} component={MeetTeamScreen} />

        </Stack.Navigator>
    )
}
function Eventscreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='EventScreen' options={{
                    headerTitleStyle: {
                        alignSelf: 'flex-start',
                        fontWeight: '100',
                        fontFamily: "NeueHaasDisplay-Medium"

                    },

                    headerRight: () => (
                        <View style={{
                            flexDirection: "row", marginRight: 10
                        }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 40, width: 120, resizeMode: 'cover' }}
                                    source={require('../../assets/logos/SAP_logo-03.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTintColor: '#000000',
                    headerTitle: "Events",
                    headerLeft: false,
                    headerStyle: {
                        backgroundColor: '#00b2d2'
                    }
                }} component={EventScreen} />

        </Stack.Navigator>
    )
}

function Collaboratescreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='CollaborateScreen' options={{
                    headerTitleStyle: {
                        alignSelf: 'flex-start',
                        fontWeight: '100',
                        fontFamily: "NeueHaasDisplay-Medium"

                    },

                    headerRight: () => (
                        <View style={{
                            flexDirection: "row", marginRight: 10
                        }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ height: 40, width: 120, resizeMode: 'cover' }}
                                    source={require('../../assets/logos/SAP_logo-03.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTintColor: '#000000',
                    headerTitle: "Collaborate With us",
                    headerLeft: false,
                    headerStyle: {
                        backgroundColor: '#00b2d2'
                    }
                }} component={CollaborateScreen} />

        </Stack.Navigator>
    )
}



export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#000000',
                    inactiveTintColor: '#f0f0f0',
                    tabStyle: {
                        backgroundColor: '#00b2d2'
                    },
                    labelStyle: {
                        fontSize: 12,
                        fontFamily: "NeueHaasDisplay-Medium"
                    },
                    keyboardHidesTabBar: true,
                }}
            >
                <Tab.Screen name="HomeScreen" component={Homescreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (

                            <Entypo name="home" size={24} color={color} />
                        ),
                        keyboardHidesTabBar: true,
                        tabBarLabel: "Home"
                    }}

                />
                <Tab.Screen name="GalleryScreen" component={Galleryscreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="photo-library" size={24} color={color} />
                        ),
                        keyboardHidesTabBar: true,
                        tabBarLabel: "Gallery"
                    }}

                />
                <Tab.Screen name="MeetTeam" component={MeetTeamscreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="ios-people" size={31} color={color} />
                        ),
                        keyboardHidesTabBar: true,
                        tabBarLabel: "Team"

                    }}

                />
                <Tab.Screen name="EventScreen" component={Eventscreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="event" size={24} color={color} />
                        ),
                        keyboardHidesTabBar: true,
                        tabBarLabel: "Events"
                    }}

                />
                <Tab.Screen name="CollaborateScreen" component={Collaboratescreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="hands-helping" size={22} color={color} />
                        ),
                        keyboardHidesTabBar: true,
                        tabBarLabel: "Collaborate",

                    }}

                />




            </Tab.Navigator>
        </NavigationContainer>
    );
}