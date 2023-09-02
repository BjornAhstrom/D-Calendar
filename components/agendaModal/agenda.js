import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

const Agenda = ({ date, close, isVisible }) => {
  return (
    <Modal animationType="slide" visible={isVisible} onRequestClose={close}>
      <View style={{ marginTop: 100, borderColor: "magenta", borderWidth: 2 }}>
        <Text>{date.day}</Text>
        <TouchableOpacity onPress={close}>
          <Text>Stäng</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Agenda;
