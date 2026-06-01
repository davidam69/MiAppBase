const colors = {
    white: "#FFFFFF",
    whiteTransparent: "#FFFFFF24",
    purple: "#7C3AED",
    purplePressed: "#5B21B6",
    darkPurple: "#4C1D95",
    purpleDisabled: "#C4B5FD",
    purpleLight: "#EDE9FE",
    grayText: "#9CA3AF",
    lightGray: "#D9D9D9",
    grayDisabled: "#D9D9E2",
    darkGray: "#6B7280",
    lightPurple: "#DDD6FE",
    green: "#10B981",
    lightSuccess: "#F0FDF4",
    lightBackground: "#E5E7EB",
    red: "#EF4444",
    redPressed: "#D62626",
    redDisabled: "#E7969D",
    backgroundError: "#FFF5F5",
};

export const theme = {
  colors, 

  texts: {
        loading: "Cargando...",
      },

  button: {
    DEFAULT: {
      backgroundColor: colors.purple,
      color: colors.white,
    },

    PRESSED: {
      backgroundColor: colors.purplePressed,
      color: colors.white,
    },

    DISABLED: {
      backgroundColor: colors.purpleDisabled,
      color: colors.grayText,
    },

    LOADING: {
      backgroundColor: colors.purple,
      color: colors.white,
    },

    SUCCESS: {
      backgroundColor: colors.green,
      color: colors.white,
    },

    ERROR: {
      backgroundColor: colors.red,
      color: colors.white,
    },
  },
  CHECKBOX: {
    CHECKBOX_CHECKED : colors.purple,
    CHECKBOX_UNCHECKED: colors.white,
    CEHCKBOX_BORDER: colors.grayDisabled,
    CEHCKBOX_BORDER_ERROR: colors.red,
    CEHCKBOX_TEXT_ERROR: colors.red
  },
  linkButton: {
    DEFAULT: {
      color: colors.purple,
    },
    PRESSED: {
      color: colors.purplePressed,
    },
    DISABLED: {
      color: colors.purpleDisabled,
    },
    DESTRUCTIVE: {
      DEFAULT: {
        color: colors.red,
      },
      PRESSED: {
        color: colors.redPressed,
      },
      DISABLED: {
        color: colors.redDisabled,
      },
    },
  },
  NAVIGATION: {
        BACKGROUND_DEFAULT: colors.purple,
        BACKGROUND_DISABLED: colors.lightGray,
        BUTTON_BACKGROUND: colors.whiteTransparent,
        BUTTON_BACKGROUND_DISABLED: colors.lightGray,
        TITLE: colors.white,
        SUBTITLE: colors.white,
        TEXT_DISABLED: colors.lightGray,
        TYPE:{
            DEFAULT: "default",
            DISABLED: "disabled",
        }
    },
    INPUT: {
        BORDER_DEFAULT: "#D1D5DB",
        BORDER_FOCUSED: colors.purple,
        BORDER_ERROR: colors.red,
        BORDER_SUCCESS: colors.green,
        BACKGROUND_COLOR: colors.purpleLight,
        BACKGROUND_DEFAULT: colors.white,
        BACKGROUND_DISABLED: colors.lightBackground,
        TEXT_DISABLED: colors.grayText,
        LABEL_FOCUSED: colors.purple,
        LABEL_ERROR: colors.red,
        LABEL_SUCCESS: colors.green,
        MESSAGE_ERROR: colors.red,
        MESSAGE_SUCCESS: colors.green,
        BACKGROUND_ERROR: colors.backgroundError,
        BACKGROUND_SUCCESS: colors.lightSuccess,
        MESSAGE:{
            MESSAGE_ERROR_REQUERID: "Este campo es requerido.",
            MESSAGE_SUCCESS_INPUT: "Campo verificado.",
            MESSAGE_ERROR_EMAIL: "Ingresa un correo valido.",
            MESSAGE_ERROR_PASSWORD: "La contraseña es muy corta."
        },
    },
  RegisterScreen: {
    background: colors.white,
  },
};