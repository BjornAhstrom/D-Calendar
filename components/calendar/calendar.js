import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

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

// Define the emojis objecgt with the correct paths
const emojis = {
  pngegg1: require("../../assets/emojis/pngegg1.png"),
  pngegg2: require("../../assets/emojis/pngegg2.png"),
  pngegg3: require("../../assets/emojis/pngegg3.png"),
  pngegg4: require("../../assets/emojis/pngegg4.png"),
  pngegg5: require("../../assets/emojis/pngegg5.png"),
  pngegg6: require("../../assets/emojis/pngegg6.png"),
  pngegg7: require("../../assets/emojis/pngegg7.png"),
  pngegg8: require("../../assets/emojis/pngegg8.png"),
  pngegg9: require("../../assets/emojis/pngegg9.png"),
  // Add more emojis
};

const EmojiPicker = ({ isVisible, onSelectEmoji, onClose }) => {
  const emojiKeys = Object.keys(emojis);

  const emojisPerRow = 5; // Number of emojis per row
  const emojiRows = Math.ceil(emojiKeys.length / emojisPerRow);

  return (
    <Modal visible={isVisible} animationType="slide">
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100,
          marginBottom: 100,
        }}
      >
        {Array.from({ length: emojiRows }).map((_, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: "row" }}>
            {emojiKeys
              .slice(rowIndex * emojisPerRow, (rowIndex + 1) * emojisPerRow)
              .map((emoji) => (
                <TouchableOpacity
                  key={emoji}
                  onPress={() => onSelectEmoji(emoji)}
                  style={{ marginHorizontal: 10, marginVertical: 5 }}
                >
                  <Image
                    source={emojis[emoji]}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
              ))}
          </View>
        ))}
        <TouchableOpacity onPress={onClose}>
          <Text>Stäng</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const CustomDayComponent = ({ date, state, marking, theme }) => {
  const [emojiMappings, setEmojiMappings] = useState({});
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  const onSelectEmoji = (emoji) => {
    setEmojiMappings((prevMappings) => ({
      ...prevMappings,
      [date.dateString]: emoji, // Saving the name of the emoji instead of using emojiMappings[emoji]
    }));
    toggleEmojiPicker();
  };

  const emojiToShow = emojiMappings[date.dateString];

  return (
    <View>
      <TouchableOpacity onPress={toggleEmojiPicker}>
        {emojiToShow && (
          <Image
            source={emojis[emojiToShow]}
            style={{ width: 30, height: 30 }}
          />
        )}
        {!emojiToShow && (
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: state === "disabled" ? "lightgray" : "black",
            }}
          >
            {date.day}
          </Text>
        )}
      </TouchableOpacity>

      <EmojiPicker
        isVisible={emojiPickerVisible}
        onSelectEmoji={onSelectEmoji}
        onClose={toggleEmojiPicker}
      />
    </View>
  );
};

const CustomCalendar = () => {
  return (
    <Calendar
      firstDay={1}
      showWeekNumbers={true}
      enableSwipeMonths={true}
      dayComponent={CustomDayComponent}
    />
  );
};

export default CustomCalendar;
