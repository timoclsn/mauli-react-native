import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { Box } from "./src/design-system/components/Box";

export default function App() {
  return (
    <Box justifyContent="center" alignItems="center" width="full" height="full">
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </Box>
  );
}
