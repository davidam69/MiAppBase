import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  checkboxContent: {
    height: 20,
    width: 20,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    backgroundColor: theme.CHECKBOX.CHECKBOX_UNCHECKED,
    borderColor: theme.CHECKBOX.CEHCKBOX_BORDER,
    marginRight: 5,
  },
  checkedContent: {
    backgroundColor: theme.CHECKBOX.CHECKBOX_CHECKED
  },
  checked: {
    height: 12,
    width: 12,
  },
  disabled: {
    opacity: 0.5
  },
  errorContent: {
    borderColor: theme.CHECKBOX.CEHCKBOX_BORDER_ERROR
  },
  text: {
    fontWeight: "500",
    fontSize: 13,
    
  },
  textError: {
    color: theme.CHECKBOX.CEHCKBOX_TEXT_ERROR
  }
});