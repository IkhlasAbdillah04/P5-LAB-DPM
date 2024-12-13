import React from "react";
import { View, ScrollView } from "react-native";
import { Header, Card, Button, Text, Avatar } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  const posts = [
    {
      id: "1",
      username: "Revi",
      content: "Enjoying a beautiful day at the park!",
      likes: 42,
      comments: 5,
    },
    {
      id: "2",
      username: "Raihan",
      content: "Just completed my first marathon!",
      likes: 78,
      comments: 12,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "Media Sosial",
          style: { color: "#fff", fontSize: 18 },
        }}
        rightComponent={{ icon: "home", color: "#fff" }}
        containerStyle={{ backgroundColor: "#3498db" }}
      />
      <ScrollView>
        {posts.map((post) => (
          <Card key={post.id}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Avatar
                rounded
                source={{
                  uri: `https://ui-avatars.com/api/?name=${post.username}`,
                }}
                containerStyle={{ marginRight: 10 }}
              />
              <Text style={{ fontWeight: "bold" }}>{post.username}</Text>
            </View>
            <Text>{post.content}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Button
                title={`Like (${post.likes})`}
                type="outline"
                buttonStyle={{ borderColor: "#3498db" }}
                titleStyle={{ color: "#3498db" }}
              />
              <Button
                title={`Comments (${post.comments})`}
                type="outline"
                buttonStyle={{ borderColor: "#2ecc71" }}
                titleStyle={{ color: "#2ecc71" }}
                onPress={() =>
                  navigation.navigate("PostDetail", { postId: post.id })
                }
              />
            </View>
          </Card>
        ))}
      </ScrollView>
      <Button
        title="View Profile"
        onPress={() => navigation.navigate("Profile")}
        containerStyle={{ margin: 10 }}
      />
    </View>
  );
};

export default HomeScreen;