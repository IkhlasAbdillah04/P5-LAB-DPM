import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, Card, Button } from "react-native-elements";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
        <Avatar
            size="xlarge"
            rounded
            source={{ uri: "https://ui-avatars.com/api/?name=Ikhlas+Abdillah" }}
            containerStyle={styles.avatar}
        />
        <Text h2 style={styles.name}>
            Ikhlas Abdillah
        </Text>
        <Text style={styles.bio}> Software Engineer </Text>

        <Card containerStyle={styles.statsCard}>
            <View style={styles.statsContainer}>
            <View style={styles.statItem}>
                <Text h4>42</Text>
                <Text>Posts</Text>
            </View>
            <View style={styles.statItem}>
                <Text h4>1.2K</Text>
                <Text>Followers</Text>
            </View>
            <View style={styles.statItem}>
                <Text h4>500</Text>
                <Text>Following</Text>
            </View>
            </View>
        </Card>

        <Button
            title="Edit Profile"
            type="solid"
            containerStyle={styles.editButton}
        />
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        paddingTop: 50,
    },
    avatar: {
        marginBottom: 20,
    },
    name: {
        marginBottom: 5,
    },
    bio: {
        color: "gray",
        marginBottom: 20,
    },
    statsCard: {
        width: "90%",
        borderRadius: 10,
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    statItem: {
        alignItems: "center",
    },
    editButton: {
        width: "80%",
        marginTop: 20,
    },
    });

export default ProfileScreen;