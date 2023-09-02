import { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import RoundCheckbox from "../roundCheckbox/roundCheckbox";
import styles from "../reminder/style.reminder";

const Reminder = () => {
  const [data, setData] = useState([]);

  // Simulera att data hämtas från en API med useEffect
  useEffect(() => {
    // Simulerad API-anrop
    setTimeout(() => {
      const dummyArray = [
        {
          id: 1,
          title: "Jobba",
          startTime: "16:32",
          endTime: "21:58",
          isChecked: false,
        },
        {
          id: 2,
          title: "Dammsuga",
          startTime: "11:22",
          endTime: "12:00",
          isChecked: false,
        },
        {
          id: 3,
          title: "Baka tårta",
          startTime: "6:30",
          endTime: "07:00",
          isChecked: false,
        },
        {
          id: 4,
          title: "Skriva dagbok",
          startTime: "16:50",
          endTime: "17:00",
          isChecked: false,
        },
        {
          id: 5,
          title: "Ringa vårdcentralen",
          startTime: "07:00",
          endTime: "07:30",
          isChecked: false,
        },
        {
          id: 6,
          title: "Tvätta",
          startTime: "13:45",
          endTime: "15:00",
          isChecked: false,
        },
      ];
      setData(dummyArray);
    }, 1000); // Simulera 1 sekunds API-anrop
  }, []); // Använd en tom beroendelista för att köra useEffect en gång

  const toggleCheckbox = (itemId) => {
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    setData(updatedData);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.reminerCard}>
            <View style={styles.checkBoxContainer}>
              <RoundCheckbox
                isChecked={item.isChecked}
                onPress={() => {
                  toggleCheckbox(item.id);
                }}
              />
              <TouchableOpacity>
                <Text style={styles.reminderText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Reminder;
