import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './index.style'
import { Link, router } from 'expo-router';

export default function Index() {

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logoProvisoire.png')}
                style={styles.logo}
            />
            <TouchableOpacity>
                <View style={styles.mylaButtonView}>
                    <Text
                        style={styles.userSelectionButton}
                        onPress={() => {
                            router.push({
                                pathname: "/difficultySelectionScreen/[id]",
                                params: { id: 1, playerName: 'Myla' }
                            })
                        }}
                    >
                        Myla
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.leoButtonView}>
                        <Text
                            style={styles.userSelectionButton}
                            onPress={() => {
                                router.push({
                                    pathname: "/difficultySelectionScreen/[id]",
                                    params: { id: 2, playerName: 'Léo' }
                                })
                            }}
                        >
                            Léo
                        </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};