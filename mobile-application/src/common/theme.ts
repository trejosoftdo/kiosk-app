
import { configureFonts, MD3LightTheme } from 'react-native-paper';

const commonFontConfig = {
  default: {
    fontFamily: "Montserrat-Regular",
    fontWeight: "normal",
  },    
  regular: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'Montserrat-Light',
    fontWeight: 'normal',
  },
  titleMedium: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleSmall: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  titleLarge: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 22,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 28,
  },
  labelLarge: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelMedium: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelSmall: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  headlineSmall: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 32,
  },
  headlineMedium: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 28,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineLarge: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 32,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 40,
  },
  labelSmall: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelMedium: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelLarge: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  bodyMedium: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodyLarge: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  thin: {
    fontFamily: 'Montserrat-Light',
    fontWeight: 'normal',
  },
};

const fontConfig = {
  web: commonFontConfig,
  ios: commonFontConfig,
  android: commonFontConfig,
};

const AppLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2929cc',
    primaryContainer: '#b4c5e4',
    background: '#ffffff',
    outline: '#d4d4d4',
    error: '#cc426a',
    tertiaryContainer: '#feeef4',
    secondary: '#3c3744',
  },
  fonts: configureFonts({config: fontConfig, isV3: false}),
};

export default AppLightTheme;
