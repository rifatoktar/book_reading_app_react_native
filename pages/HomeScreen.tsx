import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { AppBar, IconButton } from '@react-native-material/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface HomeScreenProps {
    navigation: any;
}

export default function HomeScreen(props: HomeScreenProps) {

    const home = () => props.navigation.navigate('Detail')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: '#F3EBE9' }}>
                <AppBar style={styles.appbar}
                    leading={<Text style={styles.title}>YBL</Text>}
                    trailing={<IconButton
                        icon={props => <Image source={require('../assets/icons/notification.png')} />}
                        {...props}
                    />}
                />
                <View style={styles.mainCategory}>
                    <TouchableOpacity>
                        <View style={styles.categories}>
                            <View style={styles.category}>
                                <Image style={{ height: 24, width: 24 }} source={require('../assets/icons/ghost.png')} />
                            </View>
                            <Text style={styles.categoryText}>Thriller</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.categories}>
                            <View style={styles.category}>
                                <Image style={{ height: 24, width: 24 }} source={require('../assets/icons/globe.png')} />
                            </View>
                            <Text style={styles.categoryText}>Geo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.categories}>
                            <View style={styles.category}>
                                <Image style={{ height: 24, width: 24 }} source={require('../assets/icons/heart.png')} />
                            </View>
                            <Text style={styles.categoryText}>Romantic</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.categories}>
                            <View style={styles.category}>
                                <Image style={{ height: 24, width: 24 }} source={require('../assets/icons/bowl.png')} />
                            </View>
                            <Text style={styles.categoryText}>Recipe</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 140, marginTop: 40, justifyContent: 'center', alignSelf: 'center' }}>
                    <Image source={require('../assets/images/home.png')} />
                </View>
                <View style={{ marginHorizontal: 110 }}>
                    <Text style={styles.homeText}>You did not read any
                        book. Let’s read a book</Text>
                </View>
                <View style={{ justifyContent: 'center', alignSelf: 'center', marginVertical: 16 }}>
                    <Image source={require('../assets/icons/homearrowdown.png')} />
                </View>
                <View style={{ height: 30, marginHorizontal: 16, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.header}>Thriller</Text>
                    <TouchableOpacity style={{ paddingVertical: 6 }}>
                        <Text style={styles.moreText}>See More</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 240, marginHorizontal: 16, marginTop: 16, flexDirection: 'row', marginVertical: 16 }}>
                    <TouchableOpacity onPress={home} style={{ paddingVertical: 5 }}>
                        <Image source={require('../assets/images/book1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={home} style={{ paddingVertical: 5 }}>
                        <Image style={{ marginLeft: 16 }} source={require('../assets/images/book2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={home} style={{ paddingVertical: 5 }}>
                        <Image style={{ marginLeft: 16 }} source={require('../assets/images/book2.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    appbar: {
        elevation: 0,
        backgroundColor: 'transparent',
    },
    title: {
        fontFamily: 'bebasneue-regular',
        fontSize: 30,
        color: '#FE4F32',
        marginLeft: 16,
    },
    mainCategory: {
        height: 75,
        marginHorizontal: 16,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categories: {
        height: 75,
        width: 70,
        flexDirection: 'column',
    },
    category: {
        elevation: 0,
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        height: 40,
    },
    categoryText: {
        fontFamily: 'urbanist-semiBold',
        fontWeight: '800',
        color: 'black',
        marginTop: 16,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    homeText: {
        fontFamily: 'urbanist-semiBold',
        fontWeight: '800',
        color: 'black',
        marginTop: 16,
    },
    header: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FE4F32',
    },
    moreText: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#3A89FF'
    }
});