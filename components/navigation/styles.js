import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingTop: 18,
    paddingHorizontal: 20,
    paddingBottom: 18,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    margin: 5,
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  leftSection: {
    flexDirection: "row",
    flex: 1,
  },

  default: {
    backgroundColor: theme.NAVIGATION.BACKGROUND_DEFAULT,
  },

  disabled: {
    backgroundColor: theme.NAVIGATION.BACKGROUND_DISABLED,
    opacity: 0.5,
  },

  backButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: theme.NAVIGATION.BUTTON_BACKGROUND,
  },

  backCenter: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  backButtonDisabled: {
    backgroundColor: theme.NAVIGATION.BUTTON_BACKGROUND_DISABLED,
  },

  rightButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.NAVIGATION.BUTTON_BACKGROUND,
  },

  icon: {
    width: 30,
    height: 30,
  },

  iconCenter: {
    width: 100,
    height: 100,
  },

  disabledIcon: {
    opacity: 0.5,
  },

  title: {
    color: theme.NAVIGATION.TITLE,
    fontSize: 20,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 5,
    color: theme.NAVIGATION.SUBTITLE,
    fontSize: 12,
    lineHeight: 16,
    maxWidth: 240,
  },

  disabledSubtitle: {
    color: theme.NAVIGATION.TEXT_DISABLED,
  },

  disabledText: {
    color: theme.NAVIGATION.TEXT_DISABLED,
  },
});