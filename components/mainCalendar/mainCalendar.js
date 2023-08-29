import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import styles from "../mainCalendar/style.mainCalendar";

const MainCalendar = () => {
  return (
    <View style={styles.container}>
      <Calendar style={styles.calendar} firstDay={1} />
    </View>
  );
};

export default MainCalendar;
