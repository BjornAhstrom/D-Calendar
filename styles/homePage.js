import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  calendarContainer: {
    height: "50%",
  },
  habitAndReminderContainer: {
    height: "40%",
    width: "100%",
    flexDirection: "row",
  },
  leftBox: {
    flex: 1,
    height: "100%",
    width: "50%",
  },
  rightBox: {
    height: "100%",
    width: "50%",
  },
  footer: {
    marginBottom: 30,
    alignItems: "flex-end",
  },
});

export default styles;
