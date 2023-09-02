import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderColor: "pink",
    borderWidth: 2,
    borderRadius: 10,
    width: "90%",
    height: "90%",
    alignSelf: "center",
  },
  reminerCard: {
    marginLeft: 5,
    marginRight: 5,
    borderColor: "pink",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  reminderText: {
    padding: 3,
    fontSize: 14,
  },
  checkBoxContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

export default styles;
