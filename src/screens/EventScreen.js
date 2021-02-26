import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView
} from "react-native";
import UpcomingEvents from './UpcomingEvents';
import OnGoingEvents from './OngoingEvents';
import PastEvents from './PastEvents';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';


import { LogBox } from 'react-native';



export default class EventScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1
        };

    }
    componentDidMount() {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }

    renderElement() {

        if (this.state.val == 1) {
            return <UpcomingEvents />;

        } else if (this.state.val == 2) {
            return <OnGoingEvents />;
        } else if (this.state.val == 3) {
            return <PastEvents />;
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.IconsView}>
                    <TouchableOpacity
                        onPress={() => this.setState({ val: 1 })}
                    >
                        <View
                            style={{ flexDirection: "column", }}
                        >
                            <Text style={{ color: this.state.val == 1 ? "#000000" : "#cccccc" }}>
                                Upcoming Events
                            </Text>
                            <View style={{ alignSelf: 'center', marginTop: 5 }}>
                                <FontAwesome name="calendar-plus-o" size={24} color={this.state.val == 1 ? "#000000" : "#cccccc"} />

                            </View>


                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.setState({ val: 2 })}
                    >
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ color: this.state.val == 2 ? "#000000" : "#cccccc" }}>
                                On-going Events
                            </Text>
                            <View style={{ alignSelf: 'center', marginTop: 5 }}>
                                <MaterialCommunityIcons name="calendar" size={28} color={this.state.val == 2 ? "#000000" : "#cccccc"} />
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ val: 3 })}
                    >
                        <View style={{ flexDirection: "column", justifyContent: 'center', alignContent: 'center' }}>
                            <Text style={{ color: this.state.val == 3 ? "#000000" : "#cccccc" }}>
                                Past Events
                            </Text>
                            <View style={{ alignSelf: 'center', marginTop: 5 }}>
                                <MaterialCommunityIcons name="calendar-clock" size={28} color={this.state.val == 3 ? "#000000" : "#cccccc"} />

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>


                <View
                    style={{ backgroundColor: "#00b2d2", height: 1.5, width: "100%" }}
                >

                </View>
                <ScrollView>
                    <View>{this.renderElement()}</View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },

    IconsView: {
        backgroundColor: "#ffffff",
        height: 60,
        width: "100%",
        marginTop: 15,
        flexDirection: "row",
        justifyContent: 'space-around'


    },


});