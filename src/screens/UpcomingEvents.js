import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    FlatList,
    ToastAndroid,
    SafeAreaView
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';






export default class UpcomingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const data = [
            {
                id: "1",
                image: require("../../assets/events/upcoming_events/oxygen_os.jpg"),


            },
            {
                id: "2",
                image: require("../../assets/events/upcoming_events/warp_charge.png"),

            },

        ]
        return (
            <View>

                <FlatList
                    data={data}
                    // onEndReached={() => ToastAndroid.show("End Reached", ToastAndroid.SHORT)}
                    // onEndReachedThreshold={0.1}

                    renderItem={({ item }) => (
                        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flex: 1, marginTop: 8, paddingBottom: 10 }}>
                            <TouchableOpacity style={styles.card}

                            >

                                <View style={{ justifyContent: "center", alignItems: 'center' }}>

                                    <Image
                                        style={styles.image}
                                        source={item.image} />
                                </View>

                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => (item.id)}
                />

            </View>
        )

    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        width: wp("96%"),
        height: "auto",
        elevation: 4,
        borderRadius: 8,
        padding: 20,
        paddingBottom: 0,
        paddingTop: 0,
        marginTop: 2,
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    image: {
        height: "auto",
        width: wp("94%"),
        paddingTop: 25,
        paddingBottom: 160,
        resizeMode: 'contain',
        borderRadius: 10,
        overflow: "hidden"

    }



});