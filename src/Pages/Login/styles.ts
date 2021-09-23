import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#395185",
    alignItems: "center",
    height: "100%",
  },

  header: {
    height: 100,
    marginTop: 180,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  background: {
    backgroundColor: "#395185",
  },

  logoFacebook: {
    padding: 30,
    width: 65,
    height: 35,
  },

  title: {
    color: "#F5FFFF",
    fontSize: 48,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginLeft: 10,
  },

  InputLogin: {
    backgroundColor: "#f5ffff",
    paddingLeft: 15,
    width: "80%",
    marginVertical: 20,
    height: 40,
  },

  formulario: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonOnLogin: {
    width: "80%",
    alignItems: "center",
    height: 48,
    backgroundColor: "#213873",
    justifyContent: "center",
  },

  buttonOnHome: {
    color: "#f5ffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  signUp: {
    color: "#f5ffff",
    fontSize: 14,
    marginVertical: 22,
    textDecorationLine: "underline",
  },
});
