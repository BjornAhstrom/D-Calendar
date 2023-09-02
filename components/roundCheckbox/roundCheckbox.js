import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "../roundCheckbox/style.roundCheckbox";

const RoundCheckbox = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.checkbox,
          {
            backgroundColor: isChecked ? "pink" : "transparent",
            borderColor: isChecked ? "pink" : "gray",
          },
        ]}
      >
        {isChecked && <View style={styles.innerCheckbox} />}
      </View>
    </TouchableOpacity>
  );
};

export default RoundCheckbox;
