import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    minWidth: 180,
    flexDirection: "row",
    gap: 10,
  },
  default: {
    backgroundColor: theme.button.DEFAULT.backgroundColor,
  },
  pressed: {
    backgroundColor: theme.button.PRESSED.backgroundColor,
  },
  disabled: {
    backgroundColor: theme.button.DISABLED.backgroundColor,
  },
  loading: {
    backgroundColor: theme.button.LOADING.backgroundColor,
  },
  success: {
    backgroundColor: theme.button.SUCCESS.backgroundColor,
  },
  error: {
    backgroundColor: theme.button.ERROR.backgroundColor,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#FFFFFF",
  },
  textDisabled: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#9CA3AF",
  },
  
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});