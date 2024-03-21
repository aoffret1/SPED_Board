import { StyleSheet, View } from "react-native";

const Row = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

// create styles of Row
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderBottomWidth: 2,
    width: '100',
  },
});

export default Row;
