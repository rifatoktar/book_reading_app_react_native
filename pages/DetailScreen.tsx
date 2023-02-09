import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AppBar, IconButton } from '@react-native-material/core';


interface DetailScreenProps {
    navigation: any;
}

export default function DetailScreen(props: DetailScreenProps){

    const detail = () => props.navigation.goBack('Home')

return(
    <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{ backgroundColor: '#F3EBE9' }}>
            <AppBar style={styles.appbar}
                leading={<IconButton onPress={detail}
                    icon={props => <Image source={require('../assets/icons/arrowleft.png')} />}
                    {...props}
                />}
                trailing={<IconButton
                    icon={props => <Image source={require('../assets/icons/bookmark.png')} />}
                    {...props}
                />}
            />
            <View style={styles.header}>
                <Image source={require('../assets/images/book1.png')} />
                <View style={styles.subheader}>
                    <Text style={styles.bookHeader}>Origin</Text>
                    <Text style={styles.bookAuthor}>Dan Brown</Text>
                    <View style={styles.subTitle}>
                        <Text style={styles.novel}>Novel</Text>
                        <Image source={require('../assets/icons/dot.png')} style={{marginHorizontal: 5, marginTop: 5}}/>
                        <Text style={styles.novel}>2017</Text>
                    </View>
                    <View style={{height: 10, flexDirection: 'row'}}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>Novel</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>Thriller</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>Mystery</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>Suspense</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ height: 30, marginHorizontal: 16, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.headerT}>Abstract</Text>
                <TouchableOpacity style={{ paddingVertical: 6 }}>
                    <Text style={styles.moreText}>Read More</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 16}}>
                <Text style={styles.dText}>Robert Langdon, Harvard professor
                    of symbology and religious iconology,
                    arrives at the ultramodern
                    Guggenheim Museum Bilbao to
                    attend a major announcement—the
                    unveiling of a discovery that...</Text>
            </View>
            <View style={{ height: 30, marginHorizontal: 16, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.headerT}>Reviews</Text>
                <TouchableOpacity style={{ paddingVertical: 6 }}>
                    <Text style={styles.moreText}>Read More</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 16 }}>
                <Text style={styles.dText}>Fans of The Da Vinci Code rejoice!
                    Professor Robert Langdon is again
                    solving the mysteries of the universe.</Text>
            </View> 
            <View style={{height: 25, marginHorizontal: 16, flexDirection: 'row'}}>
                <Text style={styles.reviewer}>– People Magazine</Text>
                <Image source={require('../assets/icons/dot2.png')} style={{ marginHorizontal: 5, marginTop: 8 }} />
                <Text style={styles.reviewer}>4.9</Text>
                <Image source={require('../assets/icons/dot2.png')} style={{ marginHorizontal: 5, marginTop: 8 }} />
                <Text style={styles.reviewer}>2017</Text>
            </View>
            <TouchableOpacity style={styles.buttonView}>
                <Text style={styles.buttonText}>Read Now</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    appbar:{
        elevation: 0,
        backgroundColor: 'transparent',
    },
    header:{
        marginTop: 20,
        height: 240,
        marginHorizontal: 16,
        flexDirection: 'row'
    },
    subheader: {
        height: 140,
        marginLeft: 16
    },
    bookHeader: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FE4F32',
        marginTop: 90,
    },
    bookAuthor: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        opacity: 0.7,
        marginTop: 16
    },
    subTitle: {
        marginTop: 16,
        flexDirection: 'row',
        height: 20,
    },
    novel: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        fontSize: 12,
        color: 'black',
        opacity: 0.7,
    },
    tag: {
        height: 10,
        width: 30,
        borderRadius: 5,
        backgroundColor: 'black',
        marginLeft: 5,
        marginTop: 10
    },
    tagText: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        fontSize: 5,
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    moreText: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#3A89FF'
    },
    headerT:{
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FE4F32',
    },
    dText: {
        fontFamily: 'urbanist-bold',
        fontWeight: '700',
        fontSize: 20,
        color: 'black',
        opacity: 0.5,
        marginTop: 16
    },
    reviewer: {
        fontFamily: 'urbanist-bold',
        fontWeight: '700',
        fontSize: 15,
        color: '#FE4F32',
    },
    buttonView: {
        elevation: 0,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 16,
        backgroundColor: '#FE4F32',
        borderWidth: 2,
        borderColor: 'black',
        marginVertical: 20
    },
    buttonText: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: "center",
        color: 'black',
        paddingVertical: 10
    },
});