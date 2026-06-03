import { StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },

  header: {
    backgroundColor: theme.colors.purple,
    paddingHorizontal: 24,
    paddingTop: 48,
    height: 200,

    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: theme.colors.white,
  },

  subtitle: {
    fontSize: 13,
    color: theme.colors.lightPurple,
    marginTop: 10,
  },

  section: {},

  form: {
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 12,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  inputHalf: {
    flex: 1,
  },

  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: theme.colors.darkGray,
    marginTop: 6,
  },

  link: {
    color: theme.colors.purple,
    fontWeight: "700",
  },
});
