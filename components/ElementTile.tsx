import { Text, View } from "react-native";

export default function ElementTile() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
      }}
    >
      <Text>element.</Text>
    </View>
  );
}