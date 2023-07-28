import { StyleSheet, ImageBackground } from "react-native";
const BackgroundImage = require("../assets/back.jpg");

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
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: "40%",
    height: "20%",
    alignSelf: "center",
  },
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: null,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
  },
  containerView: {
    backgroundColor: "#EDF1D6",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    alignSelf: "center",
    borderRadius: 25,
    shadowColor: "#000000",
    padding: 20,
  },
  containerText: {
    color: "black",
  },
  navBack: {
    backgroundColor: "#40513B",
  },
});
export default style;
