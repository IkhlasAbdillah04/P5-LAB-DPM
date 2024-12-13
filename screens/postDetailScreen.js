import React from "react";
import { View, ScrollView } from "react-native";
import { Card, Text, Avatar, Button } from "react-native-elements";

const PostDetailScreen = ({ route }) => {
    const { postId } = route.params;
    const comments = [
        {
        id: "1",
        username: "Ikmal",
        comment: "Amazing post!",
        },
        {
        id: "2",
        username: "Azid",
        comment: "Congratulations!",
        },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
        <ScrollView>
            <Card>
            <Text h4>Post Comments</Text>
            {comments.map((comment) => (
                <View
                key={comment.id}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                    padding: 10,
                    backgroundColor: "white",
                    borderRadius: 10,
                }}
                >
                <Avatar
                    rounded
                    size="small"
                    source={{
                    uri: `https://ui-avatars.com/api/?name=${comment.username}`,
                    }}
                    containerStyle={{ marginRight: 10 }}
                />
                <View>
                    <Text style={{ fontWeight: "bold" }}>{comment.username}</Text>
                    <Text>{comment.comment}</Text>
                </View>
                </View>
            ))}
            </Card>
        </ScrollView>
        <Button title="Add Comment" containerStyle={{ margin: 10 }} />
        </View>
    );
    };

export default PostDetailScreen;