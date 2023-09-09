import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./style.agenda";
import { db } from "../../firebase";
import {
  QuerySnapshot,
  collection,
  onSnapshot,
  query,
  doc,
  getDoc,
} from "firebase/firestore";

const Agenda = ({ date, close, isVisible }) => {
  const [selectedStartTime, setSelectedStartTime] = useState(new Date());
  const [selectedEndTime, setSelectedEndTime] = useState(new Date());
  const todaysDate = new Date();

  const [names, setNames] = useState([]);

  const handlePress = () => {
    // useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, "Users", "MURGbnizHvvnS8xMbjBf");
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          // Anta att användarnamnet är lagrat i "name" i användardokumentet
          if (userData && userData.name) {
            setNames([userData.name]);
          }
        }
      } catch (error) {
        console.error("Fel vid hämtning av användarnamn:", error);
      }
    };

    fetchUserData();
    //}, []);

    //useEffect(() => {
    names.forEach((name) => {
      console.log("Användare:", name);
    });
    //}, [names]);
  };

  const handleStartTimeChange = (event, newTime) => {
    if (Platform.OS === "android" && event.type === "dismissed") {
      // Hantera om Android-väljaren stängs utan att välja en tid
      //setShowPicker(false);
      return;
    }

    if (newTime) {
      setSelectedStartTime(newTime);
    }
  };

  const handleEndTimeChange = (event, newTime) => {
    if (Platform.OS === "android" && event.type === "dismissed") {
      // Hantera om Android-väljaren stängs utan att välja en tid
      //setShowPicker(false);
      return;
    }

    if (newTime) {
      setSelectedStartTime(newTime);
    }
  };
  const checkIfTheDayIsToday = (day) => {
    const date1 = todaysDate.getDate();

    if (date.day === date1) {
      return "Idag den " + date.day + ":e";
    }
    return date.year + "-" + date.month + "-" + date.day;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Modal animationType="slide" visible={isVisible} onRequestClose={close}>
        <View style={styles.container}>
          <Text style={styles.top}>{checkIfTheDayIsToday()}</Text>
          <KeyboardAvoidingView
            style={styles.keyboardAvoidingContainer}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
          >
            <ScrollView
              style={styles.body}
              contentContainerStyle={styles.scrollContent}
            >
              <TextInput
                style={styles.titleInput}
                placeholderTextColor={"gray"}
                placeholder="Titel"
              />
              <View
                style={{
                  width: "80%",
                  margin: 20,
                  borderColor: "pink",
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              >
                <View
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    height: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: 20,
                    }}
                  >
                    Starttid
                  </Text>
                  <DateTimePicker
                    style={{ marginRight: 20 }}
                    value={selectedStartTime}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleStartTimeChange}
                  />
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    height: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: 20,
                    }}
                  >
                    Sluttid
                  </Text>
                  <DateTimePicker
                    style={{ marginRight: 20 }}
                    value={selectedEndTime}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleEndTimeChange}
                  />
                </View>
              </View>
              <View style={styles.notesContainer}>
                <Text style={styles.noteTopText}>Antekningar</Text>
                <View style={styles.noteLine} />
                <TextInput
                  style={styles.noteTextInput}
                  placeholderTextColor={"gray"}
                  placeholder="Skriv dina anteckningar här"
                  multiline={true}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.closeBtn} onPress={handlePress}>
              <Text style={styles.closeBtnText}>Stäng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

export default Agenda;
