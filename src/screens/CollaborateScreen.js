import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ToastAndroid

} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";


export default class CollaborateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            regno: "",
            emailid: "",
            phone: "",
            college: "",
            idea: ""
        };

    }

    submitDetails() {
        if (this.state.name == "" || this.state.regno == "" || this.state.emailid == "" || this.state.phone == "" ||
            this.state.college == "" || this.state.idea == "") {
            ToastAndroid.show("Please Fill All Your Details", ToastAndroid.LONG)
        } else {
            console.log("NAME", this.state.name)
            alert("Thank you " + this.state.name + "\n" + "We will get back to you soon !")
            this.setState({

                name: "",
                regno: "",
                emailid: "",
                phone: "",
                college: "",
                idea: ""

            })
        }
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.mainContainer}>
                    <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.card}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View>
                                    <MaterialCommunityIcons name="account" size={34} color="black" />

                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <TextInput
                                        style={{
                                            width: wp("80%"),
                                            fontFamily: "NeueHaasDisplay-Light",
                                            fontSize: 15,
                                            paddingLeft: 0,
                                            borderBottomWidth: 0.8,
                                            borderBottomColor: '#777777'

                                        }}
                                        placeholderTextColor="#777777"
                                        placeholder="Name"
                                        value={this.state.name}
                                        onChangeText={(input) => {
                                            this.setState({
                                                name: input
                                            })
                                        }}

                                    />
                                </View>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View>
                                    <MaterialCommunityIcons name="account-card-details" size={28} color="black" />

                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <TextInput
                                        style={{
                                            width: wp("80%"),
                                            fontFamily: "NeueHaasDisplay-Light",
                                            fontSize: 15,
                                            paddingLeft: 0,
                                            borderBottomWidth: 0.8,
                                            borderBottomColor: '#777777'

                                        }}
                                        placeholderTextColor="#777777"
                                        placeholder="Reg No"
                                        value={this.state.regno}
                                        onChangeText={(input) => {
                                            this.setState({
                                                regno: input
                                            })
                                        }}

                                    />
                                </View>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View>
                                    <MaterialCommunityIcons name="email" size={28} color="black" />

                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <TextInput
                                        style={{
                                            width: wp("80%"),
                                            fontFamily: "NeueHaasDisplay-Light",
                                            fontSize: 15,
                                            paddingLeft: 0,
                                            borderBottomWidth: 0.8,
                                            borderBottomColor: '#777777'

                                        }}
                                        placeholderTextColor="#777777"
                                        placeholder="Email-Id"
                                        value={this.state.emailid}
                                        onChangeText={(input) => {
                                            this.setState({
                                                emailid: input
                                            })
                                        }}

                                    />
                                </View>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View>
                                    <MaterialCommunityIcons name="contact-phone" size={27} color="black" />

                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <TextInput
                                        style={{
                                            width: wp("80%"),
                                            fontFamily: "NeueHaasDisplay-Light",
                                            fontSize: 15,
                                            paddingLeft: 0,
                                            borderBottomWidth: 0.8,
                                            borderBottomColor: '#777777'

                                        }}
                                        value={this.state.phone}
                                        placeholderTextColor="#777777"
                                        placeholder="Phone Number"
                                        onChangeText={(input) => {
                                            this.setState({
                                                phone: input
                                            })
                                        }}

                                    />
                                </View>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View>
                                    <MaterialCommunityIcons name="school" size={29} color="black" />

                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <TextInput
                                        style={{
                                            width: wp("80%"),
                                            fontFamily: "NeueHaasDisplay-Light",
                                            fontSize: 15,
                                            paddingLeft: 0,
                                            borderBottomWidth: 0.8,
                                            borderBottomColor: '#777777'

                                        }}
                                        placeholderTextColor="#777777"
                                        placeholder="Name Of Instituion"
                                        value={this.state.college}
                                        onChangeText={(input) => {
                                            this.setState({
                                                college: input
                                            })
                                        }}

                                    />
                                </View>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card1}>
                            <View >
                                <View style={{ paddingBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialCommunityIcons name="lightbulb-on" size={32} color="black" />
                                    <Text style={{ paddingLeft: 5 }}> Tell us about your idea</Text>

                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <TextInput
                                        style={{

                                            fontFamily: "NeueHaasDisplay-Light",
                                            fontSize: 15,
                                            paddingLeft: 10,
                                            borderWidth: 0.8,
                                            borderColor: '#777777',
                                            height: hp("15%"),
                                            borderRadius: 10,
                                            textAlignVertical: 'top',
                                            padding: 10,
                                        }}
                                        placeholderTextColor="#777777"

                                        placeholder="Idea......................"
                                        value={this.state.idea}
                                        onChangeText={(input) => {
                                            this.setState({
                                                idea: input
                                            })
                                        }}

                                    />
                                </View>
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View style={{ alignContent: 'center', paddingLeft: 20, paddingRight: 20, marginTop: 30 }}>
                        <TouchableOpacity
                            style={{
                                elevation: 4, backgroundColor: '#00b2d2', height: hp("7%"),
                                justifyContent: 'center', alignItems: 'center',
                                borderRadius: 8
                            }}
                            onPress={() => {
                                this.submitDetails();
                            }}
                        >
                            <Text style={{
                                justifyContent: 'center', alignSelf: 'center',
                                fontFamily: "NeueHaasDisplay-Medium", fontSize: 18
                            }}>
                                SUBMIT
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )

    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignContent: 'center',
        marginTop: 10,
        paddingBottom: 20
    },
    card: {
        backgroundColor: "#ffffff",
        width: wp("97%"),
        height: "auto",
        elevation: 4,
        borderRadius: 8,
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10,
        alignContent: 'center',
        justifyContent: 'center'
    },
    card1: {
        backgroundColor: "#ffffff",
        width: wp("97%"),
        height: hp("26%"),
        elevation: 4,
        borderRadius: 8,
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10,
    },


});