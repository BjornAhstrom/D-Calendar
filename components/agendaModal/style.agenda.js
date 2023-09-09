import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  top: {
    height: 50,
    justifyContent: "center",
    borderColor: "pink",
    borderWidth: 2,
  },
  dateText: {
    fontSize: 16,
  },
  body: {
    height: 200,
  },
  scrollContent: {
    alignItems: "center",
  },
  titleInput: {
    height: 40,
    width: "50%",
    marginVertical: 12,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  notesContainer: {
    padding: 10,
    width: "80%",
    borderColor: "pink",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  noteTopText: {
    fontSize: 20,
    marginBottom: 10,
  },
  noteLine: {
    width: "100%",
    borderWidth: 1,
    borderColor: "pink",
    marginBottom: 10,
  },
  noteScrollView: {
    height: 200,
    width: "100%",
  },
  noteTextInput: {
    height: 200,
    width: "100%",
  },
  footer: {
    alignItems: "center",
  },
  closeBtn: {
    marginBottom: 30,
    width: "50%",
    height: 50,
    borderColor: "pink",
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: "center",
  },
  closeBtnText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default styles;
