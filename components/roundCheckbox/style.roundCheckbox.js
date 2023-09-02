import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCheckbox: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "white",
    borderColor: "black", // Ändra till borderColor
  },
});

export default styles;
