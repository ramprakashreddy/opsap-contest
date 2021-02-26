import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Linking
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from "react-native-image-slider-box";
import { ScrollView } from "react-native-gesture-handler";



export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../../assets/PreviewImages/1.png'),
                require('../../assets/PreviewImages/2.png'),
                require('../../assets/PreviewImages/3.png'),
                require('../../assets/PreviewImages/4.png'),
                require('../../assets/PreviewImages/5.png'),
                require('../../assets/PreviewImages/6.png'),

            ]
        };
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ flex: 1, marginTop: 20, paddingBottom: 20 }}>
                        <SliderBox
                            autoplay={true}
                            sliderBoxHeight={hp("44%")}
                            resizeMode={"contain"}
                            circleLoop={true}
                            autoplayInterval={4000}
                            images={this.state.images}
                            imageLoadingColor={"#00b2d2"}
                            dotColor="#00b2d2"
                            inactiveDotColor="#90a4ae"
                            dotStyle={{
                                position: 'relative',
                                top: 30,
                                width: 10,
                                height: 10,
                                borderRadius: 15,
                                marginHorizontal: 10,
                                padding: 0,
                                margin: 0
                            }}

                        />
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.card1}
                                onPress={() => {
                                    Linking.openURL("https://open.spotify.com/playlist/1SeGoo6wWZFg4Kbz27475X?si=AZ-cyEL8Reuy7UMGYrwipQ")

                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ padding: 20 }}>
                                        <Image
                                            source={require('../../assets/spotify.png')}
                                            style={{ height: 50, width: 50, resizeMode: 'contain' }}

                                        />
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: 'NeueHaasDisplay-Medium' }}>
                                            Hey! Check out our Spotify Playlist
                                    </Text>
                                    </View>

                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card2}
                                onPress={() => {
                                    Linking.openURL("https://www.instagram.com/oneplus_sap")

                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ padding: 20 }}>
                                        <Image
                                            source={require('../../assets/instagram.png')}
                                            style={{ height: 50, width: 50, resizeMode: 'contain' }}

                                        />
                                    </View>
                                    <View >
                                        <Text style={{ fontFamily: 'NeueHaasDisplay-Medium', lineHeight: 20 }}>
                                            For latest updates follow us on our {"\n"} instagram
                                    </Text>
                                    </View>

                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card3}
                                onPress={() => {
                                    Linking.openURL("https://forums.oneplus.com/forums/student-community/")

                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ padding: 20 }}>
                                        <Image
                                            source={require('../../assets/onepluslogo.png')}
                                            style={{ height: 50, width: 50, resizeMode: 'contain' }}

                                        />
                                    </View>
                                    <View >
                                        <Text style={{ fontFamily: 'NeueHaasDisplay-Medium', lineHeight: 20 }}>
                                            Visit our community forum
                                    </Text>
                                    </View>

                                </View>

                            </TouchableOpacity>


                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card1: {
        backgroundColor: "#e3ffed",
        width: wp("97%"),
        height: "auto",
        elevation: 4,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 4,
        paddingBottom: 5
    },
    card2: {
        backgroundColor: "#ffcfde",
        width: wp("97%"),
        height: "auto",
        elevation: 4,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 5
    },
    card3: {
        backgroundColor: "#ffabb6",
        width: wp("97%"),
        height: "auto",
        elevation: 4,
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 10,
        paddingBottom: 5
    }

});