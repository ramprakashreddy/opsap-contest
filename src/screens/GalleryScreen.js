import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList, ToastAndroid
} from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default class GalleryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        const data = [
            {
                id: "1",
                title: "Event Name",
                image: require('../../assets/gallery/1.jpg')
            },
            {
                id: "2",
                title: "Event Name",
                image: require('../../assets/gallery/2.jpg')
            },
            {
                id: "3",
                title: "Event Name",
                image: require('../../assets/gallery/3.jpg')
            },
            {
                id: "4",
                title: "Event Name",
                image: require('../../assets/gallery/4.jpg')
            },
            {
                id: "5",
                title: "Event Name",
                image: require('../../assets/gallery/5.jpg')
            },
            {
                id: "6",
                title: "Event Name",
                image: require('../../assets/gallery/6.jpg')
            },
            {
                id: "7",
                title: "Event Name",
                image: require('../../assets/gallery/7.jpg')
            },
            {
                id: "8",
                title: "Event Name",
                image: require('../../assets/gallery/8.jpg')
            },
            {
                id: "9",
                title: "Event Name",
                image: require('../../assets/gallery/9.jpg')
            },
            {
                id: "10",
                title: "Event Name",
                image: require('../../assets/gallery/10.jpg')
            },

        ]
        return (
            <View>
                <FlatList
                    data={data}
                    onEndReached={() => ToastAndroid.show("That's it for now!", ToastAndroid.LONG)}
                    onEndReachedThreshold={0.1}
                    renderItem={({ item }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 5, paddingBottom: 10 }}>
                            <TouchableOpacity style={styles.card}
                            // onPress={() => { Linking.openURL(item.url) }}
                            >

                                <View style={{ justifyContent: "center", alignItems: 'center' }}>

                                    <Image
                                        style={styles.image}
                                        source={item.image} />
                                </View>
                                <View >
                                    <Text style={{
                                        alignSelf: 'flex-start', fontSize: 20, paddingLeft: 20, marginTop: -5,
                                        color: "#000000", fontWeight: "500", fontFamily: 'NeueHaasDisplay-Medium'
                                    }}>
                                        {item.title}
                                    </Text>
                                    <Text style={{
                                        alignSelf: 'flex-start', fontSize: 16, paddingLeft: 20, marginTop: 6,
                                        color: "#000000", fontWeight: "500", fontFamily: 'NeueHaasDisplay-Light'
                                    }}>
                                        Description Text
                                    </Text>
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
        width: wp("95%"),
        height: "auto",
        elevation: 4,
        borderRadius: 8,
        paddingBottom: 20,
        marginTop: 5,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        height: "auto",
        width: wp("89%"),
        paddingTop: 125,
        paddingBottom: 100,
        resizeMode: 'contain',

    }


});