import ElementTile from "@/components/ElementTile";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <ElementTile />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
