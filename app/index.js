import React from "react";
import { SafeAreaView, View } from "react-native";
import styles from "../styles/homePage";
import MainCalendar from "../components/mainCalendar/mainCalendar";
import Habits from "../components/habits/habits";
import Reminder from "../components/reminder/reminder";
import AddButton from "../components/addButton/addButton";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.calendarContainer}>
          <MainCalendar />
        </View>
        <View style={styles.habitAndReminderContainer}>
          <View style={styles.leftBox}>
            <Reminder />
          </View>
          <View style={styles.rightBox}>
            <Habits />
          </View>
        </View>
        <View style={styles.footer}>
          <AddButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
