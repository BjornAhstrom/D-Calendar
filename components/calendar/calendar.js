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

const CustomCalendar = () => {
  return <Calendar firstDay={1} />;
};

export default CustomCalendar;
