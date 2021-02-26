import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    ToastAndroid,
    Linking
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default class MeetTeamScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        const data = [
            {
                id: "1",
                name: "Advait Karmakar",
                image: require("../../assets/team/Advait_Karmakar.jpg"),
                email: 'v-atishay.jain@oneplus.com'

            },
            {
                id: "2",
                name: "Atishay Jain",
                image: require("../../assets/team/Atishay_Jain.jpeg"),
                email: 'v-atishay.jain@oneplus.com'
            },
            {
                id: "3",
                name: "Dev Sabharwal",
                image: require("../../assets/team/Dev_Sabharwal.jpg"),
                email: 'v-atishay.jain@oneplus.com'
            },
            {
                id: "4",
                name: "Dhruv Shetty",
                image: require("../../assets/team/Dhruv_Shetty.jpg"),
                email: 'v-atishay.jain@oneplus.com'
            },
            {
                id: "5",
                name: "Kaashvi Saxena",
                image: require("../../assets/team/Kaashvi_Saxena.jpeg"),
                email: 'v-atishay.jain@oneplus.com'
            },
            {
                id: "6",
                name: "Pratyush Agarwal",
                image: require("../../assets/team/Pratyush_Agarwal.jpg"),
                email: 'v-atishay.jain@oneplus.com'
            },
            {
                id: "7",
                name: "Sarthak Soral",
                image: require("../../assets/team/Sarthak_Soral.jpg"),
                email: 'v-atishay.jain@oneplus.com'
            },
            {
                id: "8",
                name: "Suparna Mukherji",
                image: require("../../assets/team/Suparna_Mukherji.jpg"),
                email: 'v-atishay.jain@oneplus.com'
            },
        ]
        return (
            <View>
                <FlatList
                    data={data}
                    numColumns={2}
                    columnWrapperStyle={{ flexWrap: 'wrap', flex: 1 }}

                    onEndReached={() => ToastAndroid.show("End Reached", ToastAndroid.SHORT)}
                    onEndReachedThreshold={0.1}
                    renderItem={({ item }) => (
                        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flex: 1, marginTop: 8, paddingBottom: 10 }}>
                            <TouchableOpacity style={styles.card}
                                onPress={() => {
                                    if (item.email) {
                                        Linking.openURL("mailto:" + item.email)

                                    }
                                }}
                            >

                                <View style={{ justifyContent: "center", alignItems: 'center' }}>

                                    <Image
                                        style={styles.image}
                                        source={item.image} />
                                </View>
                                <View >

                                    <Text style={{
                                        alignSelf: 'flex-start', fontSize: 16, justifyContent: 'center', alignSelf: 'center', marginTop: 10,
                                        color: "#000000", fontWeight: "500", fontFamily: 'NeueHaasDisplay-Bold'
                                    }}>
                                        {item.name}
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
        width: wp("48%"),
        height: "auto",
        elevation: 4,
        borderRadius: 8,
        padding: 20,
        paddingTop: 0,
        marginTop: 2,
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    image: {
        height: "auto",
        width: wp("48%"),
        paddingTop: 160,
        paddingBottom: 100,
        resizeMode: 'cover',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: "hidden"

    }



});