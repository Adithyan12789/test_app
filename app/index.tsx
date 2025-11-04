import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text>Welcome to the app</Text>
    </SafeAreaView>
  );
}
