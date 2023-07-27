import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  defaultContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    alignSelf: "center",
    borderRadius: 25,
    shadowColor: "#000000",
  },
  title: {
    marginTop: 20,
    marginBottom: 15,
    fontWeight: "bold",
    alignSelf: "baseline",
    paddingLeft: "15%",
    fontFamily: "Roboto",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
    fontFamily: "normal",
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  buttonSend: {
    backgroundColor: "#609966",
    padding: 10,
    marginTop: 10,
    marginBottom: 15,
    width: "50%",
    borderRadius: 10,
    marginLeft: 60,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
});
export default style;
