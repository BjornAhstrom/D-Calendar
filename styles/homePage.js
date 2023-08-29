import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
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
