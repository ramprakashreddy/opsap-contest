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
    ToastAndroid
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class PastEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const data = [
            {
                id: "1",
                image: require("../../assets/events/past_events/campus_soop_7.jpg"),


            },
            {
                id: "2",
                image: require("../../assets/events/past_events/campus_soop_8.jpg"),

            },

        ]
        return (
            <View>

                <FlatList
                    data={data}
                    // onEndReached={() => ToastAndroid.show("End Reached", ToastAndroid.SHORT)}
                    // onEndReachedThreshold={0.1}
                    numColumns={2}
                    columnWrapperStyle={{ flexWrap: 'wrap', flex: 1 }}
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
        width: wp("46.5%"),
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
        width: wp("44.5%"),
        paddingTop: 120,
        paddingBottom: 200,
        resizeMode: 'contain',
        borderRadius: 10,
        overflow: "hidden"

    }



});