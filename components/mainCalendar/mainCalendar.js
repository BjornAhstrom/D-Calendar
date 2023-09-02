import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import styles from "../mainCalendar/style.mainCalendar";
import Agenda from "../agendaModal/agenda";

LocaleConfig.locales["sv"] = {
  monthNames: [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ],
  dayNamesShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
  today: "Idag",
};
LocaleConfig.defaultLocale = "sv";

const MainCalendar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [currentModalData, setCurrentModalData] = useState({});

  const openModal = (data) => {
    setCurrentModalData(data);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    console.log("Modal stängd");
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        firstDay={1}
        showWeekNumbers={true}
        enableSwipeMonths={true}
        theme={{
          "stylesheet.calendar.header": { dayTextAtIndex6: { color: "red" } },
        }}
        onDayPress={(date) => {
          openModal(date);
        }}
      />
      <Agenda
        isVisible={modalVisible}
        close={closeModal}
        date={currentModalData}
      />
    </View>
  );
};

export default MainCalendar;
