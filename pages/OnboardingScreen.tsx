import React, { useCallback, useRef } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetRefProps } from '../src/components/BottomSheet';

interface OnBoardingScreenProps {
    navigation: any;
}

export default function OnBoardingScreen(props: OnBoardingScreenProps) {

    const ref = useRef<BottomSheetRefProps>(null);

    const onPress = useCallback(() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-400);
        }
    }, []);

    const home = () => props.navigation.navigate('Home');

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}> 
                    <View style={{ height: 70 }}></View>
                    <View styles={styles.imageView}>
                        <Image source={require('../assets/images/people.png')} style={styles.imageMain} />
                    </View>
                    <View style={{ height: 16 }}></View>
                    <Text style={styles.mainBrand}>YBL</Text>
                    <View style={{ height: 16 }}></View>
                    <Text style={styles.mainText}>Trough YBL, you are able
                        to read books many times.</Text>
                    <Text style={styles.mainText}>Right now, you can try for
                        free for 1 month.</Text>
                    <Text style={styles.mainText}>If you want to continue,
                        you can subscribe to YBL.</Text>
                    <View style={{ height: 30 }}></View>
                    <TouchableOpacity onPress={onPress} style={styles.buttonView}>
                        <Text style={styles.buttonText}>Get Free Trial</Text>
                    </TouchableOpacity>
                    <BottomSheet ref={ref}>
                        <Text styles={styles.brandText}>YBL</Text>
                        <Text style={styles.secondText}>First of all, you have to create an
                            account to continue.</Text>
                        <Text style={styles.secondText}>If you have an account, please</Text>
                        <Text style={styles.bSignInText}>Sign In.</Text>
                        <TouchableOpacity onPress={home} style={styles.bButtonUp}>
                            <Text style={styles.buttonText}>Create An Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={home} style={styles.bButtonDown}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </BottomSheet>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: StatusBar.currentHeight, // yukarıdaki 'react-native' e  StatusBar diye importa ekle 
    },
    scrollView: {
        backgroundColor: '#F3EBE9',
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageMain: {
        marginHorizontal: 20,
    },
    mainBrand: {
        fontFamily: 'bebasneue-regular',
        fontSize: 100,
        color: '#FE4F32',
        marginLeft: 16,
    },
    mainText: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25,
        marginHorizontal: 16
    },
    buttonView: {
        elevation: 0,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 16,
        backgroundColor: '#FE4F32',
        borderWidth: 2,
        borderColor: 'black'
    },
    buttonText: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: "center",
        color: 'black',
        paddingVertical: 10
    },
    action: {
        borderTopLeftRadius: 10,
        borderWidth: 2,
        marginHorizontal: 16
    },
    brandText: {
        fontFamily: 'bebasneue-regular',
        fontWeight: 'bold',
        fontSize: 50,
        color: '#FE4F32',
        marginLeft: 16
    },
    secondText: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        marginHorizontal: 16
    },
    bSignInText: {
        fontFamily: 'urbanist-bold',
        fontWeight: 'bold',
        color: '#FE4F32',
        fontSize: 20,
        marginHorizontal: 16
    },
    bButtonUp: {
        elevation: 0,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 16,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#FE4F32',
        marginTop: 30,
    },
    bButtonDown: {
        elevation: 0,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 16,
        backgroundColor: '#FE4F32',
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 16,
    }
});

