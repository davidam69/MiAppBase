import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },

  defaultHalo: {
    position: "absolute",
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: "rgba(124,58,237,0.20)",
  },

  selectedHalo: {
    position: "absolute",
    width: 98,
    height: 98,
    borderRadius: 49,
    backgroundColor: "rgba(124,58,237,0.16)",
  },

  pin: {
    width: 82,
    height: 82,
    justifyContent: "center",
    alignItems: "center",
  },

  whiteRing: {
    position: "absolute",
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: theme.colors.white,
  },

  image: {
    width: 78,
    height: 78,
  },
});
