import { FlatList, StyleSheet, Text } from "react-native";
import { names } from "./names";

export default function App() {
  const namesAsObjects = names.map((item) => {
    return { name: item };
  });

  const renderName = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <FlatList
      data={namesAsObjects}
      renderItem={renderName}
      keyExtractor={(item) => item.name}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
